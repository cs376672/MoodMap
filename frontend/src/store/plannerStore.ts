import { create } from 'zustand'
import { COUNTRIES, MOOD_KEYWORDS } from '../data/travelOptions'
import { REAL_SPOTS, getGenericSpots, type SpotData } from '../data/mockSpots'

export interface Spot {
  spot_id: string;
  time?: string;
  name: string;
  latitude: number;
  longitude: number;
  description: string;
  mood_bgm?: string;
  alternatives?: {
    name: string;
    reason: string;
  }[];
}

export interface DaySchedule {
  day: number;
  spots: Spot[];
}

export interface Itinerary {
  trip_title: string;
  schedule: DaySchedule[];
}

interface PlannerState {
  countryId: string;
  regionId: string;
  duration: number;
  selectedKeywords: string[];
  isGenerating: boolean;
  itinerary: Itinerary | null;
  highlightedSpotIndex: number | null;
  
  setCountryId: (id: string) => void;
  setRegionId: (id: string) => void;
  setDuration: (duration: number) => void;
  toggleKeyword: (keywordId: string) => void;
  setHighlightedSpotIndex: (index: number | null) => void;
  generateItinerary: () => Promise<void>;
  swapSpot: (dayIndex: number, spotIndex: number, altIndex: number) => void;
  resetPlanner: () => void;
}

export const usePlannerStore = create<PlannerState>((set, get) => ({
  countryId: COUNTRIES[0].id,
  regionId: COUNTRIES[0].regions[0].id,
  duration: 3,
  selectedKeywords: [],
  isGenerating: false,
  itinerary: null,
  highlightedSpotIndex: null,

  setCountryId: (id) => {
    const country = COUNTRIES.find(c => c.id === id);
    set({ countryId: id, regionId: country ? country.regions[0].id : '', highlightedSpotIndex: null });
  },
  setRegionId: (id) => set({ regionId: id, highlightedSpotIndex: null }),
  setDuration: (duration) => set({ duration }),
  setHighlightedSpotIndex: (index) => set({ highlightedSpotIndex: index }),
  toggleKeyword: (keywordId) => set((state) => {
    const isSelected = state.selectedKeywords.includes(keywordId);
    if (isSelected) {
      return { selectedKeywords: state.selectedKeywords.filter(k => k !== keywordId) };
    } else {
      if (state.selectedKeywords.length >= 3) return state; // 최대 3개 선택 제한
      return { selectedKeywords: [...state.selectedKeywords, keywordId] };
    }
  }),

  generateItinerary: async () => {
    set({ isGenerating: true })
    const { countryId, regionId, duration, selectedKeywords } = get()
    
    // 실제 API 통신 전 UI 테스트용 지연 시간
    await new Promise(resolve => setTimeout(resolve, 2500))
    
    const country = COUNTRIES.find(c => c.id === countryId);
    const region = country?.regions.find(r => r.id === regionId);
    
    const d = region ? region.name : '도쿄';
    const baseLat = region ? region.baseLat : 35.6895;
    const baseLng = region ? region.baseLng : 139.6917;

    const keywordsText = selectedKeywords.length > 0 
      ? selectedKeywords.map(k => MOOD_KEYWORDS.find(m => m.id === k)?.label).join(', ')
      : '시티팝';

    // 해당 지역의 실제 데이터가 있으면 가져오고, 없으면 범용 데이터 생성
    const rawSpots = REAL_SPOTS[regionId] || getGenericSpots(d, baseLat, baseLng);
    
    // 일정의 총 스팟 개수 계산 (하루 3개 기준)
    const requiredSpots = Math.min(duration || 3, 14) * 3;

    // 키워드에 맞는 명소 필터링 (선택된 키워드 중 하나라도 포함하는 명소)
    let filteredSpots: SpotData[] = [];
    if (selectedKeywords.length > 0) {
      // 1. 해당 지역 실제 명소 중 테마(키워드)에 맞는 명소 필터링
      filteredSpots = rawSpots.filter(spot => 
        spot.keywords.some(k => selectedKeywords.includes(k))
      );
      
      // 2. 부족한 개수는 오직 해당 테마를 만족하는 가상 명소로만 채움 (오프테마 차단)
      if (filteredSpots.length < requiredSpots) {
        const extraSpots = getGenericSpots(d, baseLat, baseLng).filter(spot => 
          spot.keywords.some(k => selectedKeywords.includes(k)) &&
          !filteredSpots.some(fs => fs.name === spot.name)
        );
        filteredSpots = [...filteredSpots, ...extraSpots];
      }
    } else {
      // 선택된 테마가 없을 경우, 전체 실제 명소를 사용하고 부족하면 전체 가상 명소로 채움
      filteredSpots = [...rawSpots];
      if (filteredSpots.length < requiredSpots) {
        const extraSpots = getGenericSpots(d, baseLat, baseLng).filter(spot => 
          !filteredSpots.some(fs => fs.name === spot.name)
        );
        filteredSpots = [...filteredSpots, ...extraSpots];
      }
    }

    // 1. 필요한 개수만큼 고유한 스팟 무작위 선택
    const selectedSpots = [...filteredSpots].sort(() => Math.random() - 0.5).slice(0, requiredSpots);

    // 2. 유클리드 거리 계산기
    const getDistance = (s1: SpotData, s2: SpotData) => {
      const dx = s1.lat - s2.lat;
      const dy = s1.lng - s2.lng;
      return Math.sqrt(dx * dx + dy * dy);
    };

    // 3. 일자별 지리적 군집화 (가장 인접한 3개 스팟씩 묶어 하루로 편성)
    const days: SpotData[][] = [];
    let remaining = [...selectedSpots];

    for (let i = 0; i < (duration || 3); i++) {
      if (remaining.length === 0) break;
      if (remaining.length < 3) {
        days.push(remaining);
        break;
      }
      // 첫 번째 스팟을 Seed로 삼고 가장 가까운 2개 스팟을 묶음
      const seed = remaining[0];
      const rest = remaining.slice(1).sort((a, b) => getDistance(seed, a) - getDistance(seed, b));
      const daySpots = [seed, rest[0], rest[1]];
      days.push(daySpots);
      remaining = rest.slice(2);
    }

    // 4. 하루 일정 경로 최단 거리 정렬 (오전 -> 오후 -> 저녁의 총 이동거리 최소화)
    const optimizeDayPath = (daySpots: SpotData[]): SpotData[] => {
      if (daySpots.length < 3) return daySpots;
      const [A, B, C] = daySpots;
      
      const permutations = [
        [A, B, C],
        [A, C, B],
        [B, A, C],
        [B, C, A],
        [C, A, B],
        [C, B, A]
      ];
      
      let minDistance = Infinity;
      let bestPerm = permutations[0];
      
      for (const p of permutations) {
        const d = getDistance(p[0], p[1]) + getDistance(p[1], p[2]);
        if (d < minDistance) {
          minDistance = d;
          bestPerm = p;
        }
      }
      
      return bestPerm;
    };

    const optimizedDays = days.map(optimizeDayPath);

    const dynamicItinerary: Itinerary = {
      trip_title: `${d} ${keywordsText} 테마 투어 ✨`,
      schedule: optimizedDays.map((daySpots, i) => {
        const s1 = daySpots[0] || { name: '미정', lat: baseLat, lng: baseLng, desc: '', keywords: [] };
        const s2 = daySpots[1] || s1;
        const s3 = daySpots[2] || s2;
        
        return {
          day: i + 1,
          spots: [
            {
              spot_id: `spot_${i}_1`,
              time: '오전 10:00',
              name: s1.name,
              latitude: s1.lat,
              longitude: s1.lng,
              description: `아침의 첫 일정은 '${s1.name}'입니다. ${s1.desc} 선택하신 [${keywordsText}] 테마에 어울리는 시작입니다.`,
              mood_bgm: `추천 BGM: Morning Acoustic`,
              alternatives: [
                { name: `${d} 로컬 핫플 탐방`, reason: "아침의 활기찬 에너지를 느끼고 싶으실 때 추천합니다." }
              ]
            },
            {
              spot_id: `spot_${i}_2`,
              time: '오후 02:30',
              name: s2.name,
              latitude: s2.lat,
              longitude: s2.lng,
              description: `오후 코스는 '${s2.name}'입니다. ${s2.desc} 가장 활발한 시간대에 방문하기 완벽합니다.`,
              alternatives: [
                { name: `${d} 숨겨진 골목길`, reason: "사람이 많은 곳을 피해 조용하게 쉬고 싶을 때 좋습니다." }
              ]
            },
            {
              spot_id: `spot_${i}_3`,
              time: '오후 07:00',
              name: s3.name,
              latitude: s3.lat,
              longitude: s3.lng,
              description: `아름다운 야경과 함께하는 저녁 일정, '${s3.name}'입니다. ${s3.desc} 하루의 피로를 풀며 로맨틱한 시간을 보내세요.`,
              alternatives: [
                { name: `${d} 로컬 심야 펍`, reason: "현지인들과 어울려 가볍고 신나게 한잔하고 싶을 때 완벽합니다." }
              ]
            }
          ]
        };
      })
    }
    
    set({ isGenerating: false, itinerary: dynamicItinerary })
  },

  swapSpot: (dayIndex, spotIndex, altIndex) => set((state) => {
    if (!state.itinerary) return {};
    const newItin = { ...state.itinerary };
    const schedule = [...newItin.schedule];
    const spots = [...schedule[dayIndex].spots];
    const spot = { ...spots[spotIndex] };
    
    if (spot.alternatives && spot.alternatives[altIndex]) {
      const alternatives = [...spot.alternatives];
      const alt = { ...alternatives[altIndex] };
      const oldName = spot.name;
      spot.name = alt.name;
      alt.name = oldName;
      alternatives[altIndex] = alt;
      spot.alternatives = alternatives;
    }
    
    spots[spotIndex] = spot;
    schedule[dayIndex] = { ...schedule[dayIndex], spots };
    newItin.schedule = schedule;
    
    return { itinerary: newItin };
  }),

  resetPlanner: () => set({ itinerary: null, highlightedSpotIndex: null })
}))
