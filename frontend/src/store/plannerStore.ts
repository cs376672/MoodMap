import { create } from 'zustand'
import { COUNTRIES, MOOD_KEYWORDS } from '../data/travelOptions'
import { REAL_SPOTS, type SpotData } from '../data/mockSpots'

export interface Alternative {
  name: string;
  reason: string;
  latitude: number;
  longitude: number;
  description: string;
  mood_bgm?: string;
}

export interface Spot {
  spot_id: string;
  time?: string;
  name: string;
  latitude: number;
  longitude: number;
  description: string;
  mood_bgm?: string;
  alternatives?: Alternative[];
}

export interface DaySchedule {
  day: number;
  spots: Spot[];
}

export interface Itinerary {
  trip_title: string;
  schedule: DaySchedule[];
  region_name?: string;
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

    // 100% 실존하는 실제 명소 데이터를 가져옵니다.
    const rawSpots = REAL_SPOTS[regionId] || [];
    
    // 일정의 총 스팟 개수 계산 (하루 3개 기준)
    const requiredSpots = Math.min(duration || 3, 14) * 3;

    // 선택된 키워드(테마)가 있으면 매칭되는 명소 선별
    const matchedSpots = selectedKeywords.length > 0
      ? rawSpots.filter(spot => spot.keywords.some(k => selectedKeywords.includes(k)))
      : [...rawSpots];

    // 선택된 키워드와 맞지 않는 다른 실제 명소들
    const unmatchedSpots = selectedKeywords.length > 0
      ? rawSpots.filter(spot => !spot.keywords.some(k => selectedKeywords.includes(k)))
      : [];

    const shuffledMatched = [...matchedSpots].sort(() => Math.random() - 0.5);
    const shuffledUnmatched = [...unmatchedSpots].sort(() => Math.random() - 0.5);

    let selectedPool: SpotData[] = [];

    if (shuffledMatched.length >= requiredSpots) {
      // 매칭되는 실제 스팟으로만 채움
      selectedPool = shuffledMatched.slice(0, requiredSpots);
    } else {
      // 매칭되는 실제 스팟이 부족할 경우 -> 해당 도시의 다른 실제 스팟으로 대체 채움 (테마 필터링 완화)
      selectedPool = [...shuffledMatched];
      const needed = requiredSpots - selectedPool.length;
      
      if (shuffledUnmatched.length >= needed) {
        selectedPool = [...selectedPool, ...shuffledUnmatched.slice(0, needed)];
      } else {
        // 해당 도시의 모든 스팟을 쏟아부어도 부족할 경우 -> 전체 리스트 순환(Cycle) 배정
        selectedPool = [...selectedPool, ...shuffledUnmatched];
        const basePool = [...selectedPool];
        let idx = 0;
        // basePool이 비어 있는 비정상 상황 방어코드
        if (basePool.length > 0) {
          while (selectedPool.length < requiredSpots) {
            selectedPool.push(basePool[idx % basePool.length]);
            idx++;
          }
        } else {
          // 최후의 방어코드: 중심 좌표 주변 임의 위치 객체 생성 (실제 mockSpots에 다 존재하므로 사실상 호출 안 됨)
          for (let i = 0; i < requiredSpots; i++) {
            selectedPool.push({
              name: `${d} 명소 ${i + 1}`,
              lat: baseLat + (Math.random() - 0.5) * 0.01,
              lng: baseLng + (Math.random() - 0.5) * 0.01,
              desc: '실존 명소를 기반으로 구축된 힐링 관광 코스입니다.',
              keywords: ['healing']
            });
          }
        }
      }
    }

    // 최종 선택된 스팟들을 다시 한번 무작위 셔플하여 일차별 지리적 군집화에 전달
    const selectedSpots = [...selectedPool].sort(() => Math.random() - 0.5);

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

    // 5. 실존 대안 명소 탐색을 위한 거리 포맷터 및 대안 추출기
    const getFormattedDistance = (s1: { lat: number; lng: number }, s2: { lat: number; lng: number }) => {
      const latDiff = (s1.lat - s2.lat) * 111;
      const lngDiff = (s1.lng - s2.lng) * 88;
      const dist = Math.sqrt(latDiff * latDiff + lngDiff * lngDiff);
      if (dist < 1) {
        return `${Math.round(dist * 1000)}m`;
      }
      return `${dist.toFixed(1)}km`;
    };

    const allItinerarySpotNames = new Set(selectedSpots.map(sp => sp.name));

    const getAlternativesForSpot = (s: SpotData) => {
      // 1차 후보군: 현재 일정에 아예 할당되지 않은 실제 명소들
      let candidates = rawSpots.filter(sp => !allItinerarySpotNames.has(sp.name));
      
      // 만약 미사용 명소가 너무 부족하면, 현재 명소만 제외하고 도시 내 전체 명소 중 탐색
      if (candidates.length < 2) {
        candidates = rawSpots.filter(sp => sp.name !== s.name);
      }

      // 거리 순서대로 정렬
      const sortedCandidates = [...candidates].sort((a, b) => getDistance(s, a) - getDistance(s, b));

      // 최대 2개의 대안 명소 정보 생성
      return sortedCandidates.slice(0, 2).map(altSpot => {
        const distStr = getFormattedDistance(s, altSpot);
        return {
          name: altSpot.name,
          latitude: altSpot.lat,
          longitude: altSpot.lng,
          description: `[AI 대안 추천] 원래 일정 대신 방문하기 좋은 '${altSpot.name}'입니다. ${altSpot.desc}`,
          reason: `'${s.name}'에서 약 ${distStr} 거리에 위치한 인근 대안 장소입니다.`,
          mood_bgm: `추천 BGM: Smooth Lounge`
        };
      });
    };

    const dynamicItinerary: Itinerary = {
      trip_title: `${d} ${keywordsText} 테마 투어 ✨`,
      region_name: d,
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
              alternatives: getAlternativesForSpot(s1)
            },
            {
              spot_id: `spot_${i}_2`,
              time: '오후 02:30',
              name: s2.name,
              latitude: s2.lat,
              longitude: s2.lng,
              description: `오후 코스는 '${s2.name}'입니다. ${s2.desc} 가장 활발한 시간대에 방문하기 완벽합니다.`,
              mood_bgm: `추천 BGM: Afternoon Jazz`,
              alternatives: getAlternativesForSpot(s2)
            },
            {
              spot_id: `spot_${i}_3`,
              time: '오후 07:00',
              name: s3.name,
              latitude: s3.lat,
              longitude: s3.lng,
              description: `아름다운 야경과 함께하는 저녁 일정, '${s3.name}'입니다. ${s3.desc} 하루의 피로를 풀며 로맨틱한 시간을 보내세요.`,
              mood_bgm: `추천 BGM: Night City Pop`,
              alternatives: getAlternativesForSpot(s3)
            }
          ]
        };
      })
    };
    
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
      
      // 명소 정보와 대안 명소 정보를 서로 완전 맞교환 (Swap)
      const temp = {
        name: spot.name,
        latitude: spot.latitude,
        longitude: spot.longitude,
        description: spot.description,
        mood_bgm: spot.mood_bgm
      };
      
      spot.name = alt.name;
      spot.latitude = alt.latitude;
      spot.longitude = alt.longitude;
      spot.description = alt.description;
      spot.mood_bgm = alt.mood_bgm || spot.mood_bgm;
      
      alt.name = temp.name;
      alt.latitude = temp.latitude;
      alt.longitude = temp.longitude;
      alt.description = temp.description;
      alt.mood_bgm = temp.mood_bgm;
      
      // 대안 명소 카드를 재클릭했을 때 원래대로 되돌아갈 수 있도록 안내 메시지 동적 업데이트
      alt.reason = `현재 설정된 '${spot.name}' 대신 원래 일정이었던 '${alt.name}'(으)로 다시 변경합니다.`;
      
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
