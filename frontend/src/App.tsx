import { useState, useEffect } from 'react'
import { usePlannerStore } from './store/plannerStore'
import { Loader2, RefreshCw, Plus, Minus, Check, Share2 } from 'lucide-react'
import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps'
import { COUNTRIES, MOOD_KEYWORDS } from './data/travelOptions'
import EarthGlobe from './components/EarthGlobe'

function App() {
  const { 
    countryId, setCountryId,
    regionId, setRegionId,
    duration, setDuration, 
    selectedKeywords, toggleKeyword, 
    isGenerating, itinerary, generateItinerary, swapSpot,
    highlightedSpotIndex, setHighlightedSpotIndex,
    resetPlanner
  } = usePlannerStore()

  const [showShareToast, setShowShareToast] = useState(false)

  const handleShare = () => {
    if (!itinerary) return;
    try {
      const serialized = btoa(unescape(encodeURIComponent(JSON.stringify(itinerary))));
      const shareUrl = `${window.location.origin}${window.location.pathname}#share=${serialized}`;
      navigator.clipboard.writeText(shareUrl).then(() => {
        setShowShareToast(true);
        setTimeout(() => setShowShareToast(false), 3000);
      });
    } catch (err) {
      console.error('Failed to generate share link:', err);
    }
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#share=')) {
        const shareCode = hash.substring(7);
        try {
          const decodedJSON = decodeURIComponent(escape(atob(shareCode)));
          const sharedItinerary = JSON.parse(decodedJSON);
          if (sharedItinerary && sharedItinerary.schedule) {
            usePlannerStore.setState({ itinerary: sharedItinerary });
          }
        } catch (err) {
          console.error('Failed to parse shared itinerary:', err);
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const currentCountry = COUNTRIES.find(c => c.id === countryId);
  const currentRegion = currentCountry?.regions.find(r => r.id === regionId);
  const targetCoords = currentRegion ? { lat: currentRegion.baseLat, lng: currentRegion.baseLng } : null;

  return (
    <div className="h-screen w-screen bg-black text-white font-sans selection:bg-indigo-500/30 overflow-hidden relative flex flex-col">
      {/* 1. FULL SCREEN BACKGROUND (Globe or Map) */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
        {(!itinerary || isGenerating) ? (
          <EarthGlobe isGenerating={isGenerating} targetCoords={targetCoords} />
        ) : (
          <div className="w-full h-full bg-neutral-900 relative animate-in fade-in duration-1000">
            <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY || import.meta.env.VITEGOOGLE_MAPS_API_KEY || import.meta.env.GOOGLE_MAPS_API_KEY || ""} language="ko" region="KR">
              <Map 
                defaultZoom={12} 
                defaultCenter={{ lat: itinerary.schedule[0]?.spots[0]?.latitude || 35.6895, lng: itinerary.schedule[0]?.spots[0]?.longitude || 139.6917 }}
                mapId="DEMO_MAP_ID"
                gestureHandling={'greedy'}
                disableDefaultUI={false}
                className="w-full h-full"
              >
                {itinerary.schedule.flatMap((day, dIdx) => 
                  day.spots.map((spot, sIdx) => {
                    const globalIndex = dIdx * 3 + sIdx + 1;
                    const isHighlighted = highlightedSpotIndex === globalIndex;
                    return (
                    <AdvancedMarker 
                      key={spot.spot_id} 
                      position={{ lat: spot.latitude, lng: spot.longitude }}
                      title={spot.name}
                      zIndex={isHighlighted ? 100 : 1}
                    >
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${spot.latitude},${spot.longitude}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          e.stopPropagation();
                          setHighlightedSpotIndex(globalIndex);
                        }}
                        className="no-underline block"
                      >
                        <div 
                          className={`flex items-center justify-center rounded-full shadow-lg border-2 border-neutral-900 font-bold transition-all duration-300 ${
                            isHighlighted 
                              ? 'bg-indigo-400 text-white w-12 h-12 text-lg shadow-[0_0_20px_rgba(129,140,248,0.8)] scale-110 animate-bounce' 
                              : 'bg-indigo-600/90 text-white w-9 h-9 text-sm hover:scale-110'
                          }`}
                        >
                           {globalIndex}
                        </div>
                      </a>
                    </AdvancedMarker>
                  )})
                )}
              </Map>
            </APIProvider>
          </div>
        )}
      </div>

      {/* 2. OVERLAY UI */}
      <div className="relative z-10 flex flex-col h-full pointer-events-none">
        {/* NAV */}
        <nav className="px-6 py-5 flex items-center justify-between pointer-events-auto shrink-0 bg-gradient-to-b from-black/80 to-transparent">
          <div 
            className="text-3xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg cursor-pointer transition-transform hover:scale-105"
            onClick={resetPlanner}
            title="처음으로 돌아가기"
          >
            MoodMap
          </div>
          <div className="text-sm font-medium text-neutral-300 drop-shadow-md">
            AI 기반 개인 맞춤형 여행 플래너
          </div>
        </nav>

        {/* MAIN PANEL */}
        <main className="flex-1 w-full max-w-[1800px] mx-auto px-6 pb-6 overflow-hidden flex pointer-events-none">
          {/* Left Panel Container */}
          <section className="w-full lg:w-[460px] h-full overflow-y-auto pointer-events-auto scrollbar-hide flex flex-col gap-6 pb-20 pr-2">
            
            {!itinerary ? (
              <>
                <div className="space-y-2 mb-2 drop-shadow-md">
                  <h1 className="text-4xl font-extrabold tracking-tight">어디로 떠나고 싶으신가요?</h1>
                  <p className="text-neutral-300 text-lg">취향을 담은 키워드만 남겨주세요. AI가 당신만의 완벽한 감성 여행을 설계합니다.</p>
                </div>

                <div className="bg-neutral-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-[0_0_40px_rgba(0,0,0,0.5)] space-y-8">
                  
                  {/* 1. 목적지 선택 */}
                  <div className="space-y-3">
                    <label className="text-sm font-medium text-neutral-300">어디로 가시나요?</label>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="relative">
                        <select 
                          value={countryId}
                          onChange={e => setCountryId(e.target.value)}
                          className="w-full bg-neutral-950/80 border border-white/10 rounded-xl px-4 py-3 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all cursor-pointer"
                        >
                          {COUNTRIES.map(c => (
                            <option key={c.id} value={c.id}>{c.icon} {c.name}</option>
                          ))}
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500">▼</div>
                      </div>
                      <div className="relative">
                        <select 
                          value={regionId}
                          onChange={e => setRegionId(e.target.value)}
                          className="w-full bg-neutral-950/80 border border-white/10 rounded-xl px-4 py-3 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all cursor-pointer"
                        >
                          {currentCountry?.regions.map(r => (
                            <option key={r.id} value={r.id}>{r.name}</option>
                          ))}
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500">▼</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* 2. 여행 기간 선택 */}
                  <div className="space-y-3">
                    <label className="text-sm font-medium text-neutral-300 flex justify-between">
                      <span>여행 기간</span>
                      <span className="text-indigo-400 font-bold">{duration}일</span>
                    </label>
                    <div className="flex items-center justify-between bg-neutral-950/80 border border-white/10 rounded-xl p-2">
                      <button 
                        onClick={() => setDuration(Math.max(1, duration - 1))}
                        className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors text-neutral-400 hover:text-white"
                      >
                        <Minus className="w-5 h-5" />
                      </button>
                      <div className="flex-1 flex gap-1 items-center justify-center">
                        {Array.from({ length: Math.min(duration, 7) }).map((_, i) => (
                          <div key={i} className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]"></div>
                        ))}
                        {duration > 7 && <span className="text-indigo-400 text-xs font-bold pl-1">+{duration - 7}</span>}
                      </div>
                      <button 
                        onClick={() => setDuration(Math.min(14, duration + 1))}
                        className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors text-neutral-400 hover:text-white"
                      >
                        <Plus className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* 3. 무드 키워드 */}
                  <div className="space-y-3">
                    <label className="text-sm font-medium text-neutral-300 flex justify-between">
                      <span>여행 감성 (최대 3개)</span>
                      <span className="text-xs text-neutral-500">{selectedKeywords.length}/3</span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {MOOD_KEYWORDS.map(keyword => {
                        const isSelected = selectedKeywords.includes(keyword.id);
                        return (
                          <button
                            key={keyword.id}
                            onClick={() => toggleKeyword(keyword.id)}
                            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                              isSelected 
                                ? 'bg-indigo-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.4)] ring-1 ring-indigo-400 scale-105' 
                                : 'bg-neutral-950/80 border border-white/10 text-neutral-400 hover:bg-white/10 hover:text-neutral-200 hover:scale-105'
                            }`}
                          >
                            <span>{keyword.icon}</span>
                            <span>{keyword.label}</span>
                            {isSelected && <Check className="w-3.5 h-3.5 ml-1" />}
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  <button 
                    onClick={generateItinerary}
                    disabled={isGenerating || selectedKeywords.length === 0}
                    className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:bg-neutral-800/80 disabled:text-neutral-500 disabled:cursor-not-allowed text-white font-bold py-4 px-4 rounded-xl shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all transform hover:scale-[1.02] active:scale-[0.98] flex justify-center items-center gap-2 mt-6 border border-indigo-400/30"
                  >
                    {isGenerating ? <Loader2 className="animate-spin w-5 h-5" /> : 
                     selectedKeywords.length === 0 ? '키워드를 1개 이상 선택해주세요' : 'AI 맞춤 일정 생성하기'}
                  </button>
                </div>
              </>
            ) : (
              <div className="animate-in fade-in slide-in-from-left-4 duration-700 bg-neutral-900/80 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                <div className="space-y-2 mb-6 flex justify-between items-start">
                  <div>
                      <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
                      {itinerary.trip_title}
                      </h1>
                      <p className="text-neutral-300 mt-1 text-sm">당신만을 위한 맞춤형 테마 여정이 준비되었습니다.</p>
                  </div>
                  <button 
                    onClick={() => {
                      window.location.hash = '';
                      resetPlanner();
                    }} 
                    className="text-xs text-neutral-400 hover:text-white transition-colors bg-white/5 px-2.5 py-1.5 rounded-lg border border-white/10 hover:bg-white/10 shrink-0"
                  >
                    다시 시작
                  </button>
                </div>

                {/* 공유하기 바 (검은칸 바로밑에라인에 공유버튼 세팅) */}
                <div className="mb-6 p-4 bg-neutral-950/60 border border-white/10 rounded-2xl flex flex-col gap-2 transition-all">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-medium text-neutral-300">이 일정을 다른 사람과 공유해보세요!</span>
                    <button 
                      onClick={handleShare}
                      className="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold py-2 px-3.5 rounded-xl transition-all shadow-[0_0_15px_rgba(99,102,241,0.3)] shrink-0 active:scale-95 flex-row"
                    >
                      <Share2 className="w-3.5 h-3.5" />
                      일정 공유
                    </button>
                  </div>
                  {showShareToast && (
                    <div className="text-[11px] text-indigo-400 font-semibold animate-in fade-in slide-in-from-top-1 duration-300 text-right">
                      ✓ 링크가 복사되었습니다! SNS나 메신저에 공유하세요.
                    </div>
                  )}
                </div>

                <div className="space-y-10 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-indigo-500/50 before:to-transparent">
                  {itinerary.schedule.map((day, dIdx) => (
                    <div key={day.day} className="space-y-6 relative">
                      <div className="sticky top-0 z-20 flex justify-start pt-2 pb-2 bg-neutral-900/0 backdrop-blur-sm -mx-2 px-2">
                          <h3 className="text-base font-bold bg-indigo-500 text-white px-4 py-1.5 rounded-full shadow-lg shadow-indigo-500/30 border border-indigo-400">
                          {day.day} 일차
                          </h3>
                      </div>
                      <div className="space-y-8">
                        {day.spots.map((spot, sIdx) => {
                          const globalIndex = dIdx * 3 + sIdx + 1;
                          return (
                          <div key={spot.spot_id} className="relative flex items-start group">
                            <button 
                              onClick={() => {
                                setHighlightedSpotIndex(highlightedSpotIndex === globalIndex ? null : globalIndex);
                              }}
                              className={`flex items-center justify-center w-10 h-10 rounded-full border bg-neutral-950 shadow-[0_0_15px_rgba(99,102,241,0.3)] font-bold shrink-0 z-10 transition-all hover:scale-110 ml-0 mr-4 mt-1 cursor-pointer no-underline focus:outline-none ${
                                highlightedSpotIndex === globalIndex 
                                  ? 'border-indigo-400 text-white bg-indigo-600 scale-110 ring-2 ring-indigo-400 ring-offset-2 ring-offset-black' 
                                  : 'border-indigo-500/50 text-indigo-400'
                              }`}
                              title="클릭하여 지도 상에서 명소 강조"
                            >
                              {globalIndex}
                            </button>
                            
                            <div className="w-[calc(100%-3.5rem)] bg-neutral-950/60 border border-white/10 p-5 rounded-2xl shadow-xl space-y-3 hover:border-indigo-500/40 hover:bg-neutral-900/80 transition-all">
                              <div>
                                {spot.time && (
                                  <span className="inline-block px-2 py-1 bg-indigo-500/15 text-indigo-300 text-xs font-bold rounded-md mb-2 border border-indigo-500/20">
                                    🕒 {spot.time}
                                  </span>
                                )}
                                <h4 className="font-bold text-lg leading-tight text-white">{spot.name}</h4>
                                <p className="text-neutral-300 text-sm mt-2 leading-relaxed">{spot.description}</p>
                              </div>
                              
                              {spot.mood_bgm && (
                                <div className="flex items-center gap-2 bg-black/40 text-indigo-200 px-3 py-1.5 rounded-lg text-xs font-medium w-fit border border-white/5">
                                  🎵 {spot.mood_bgm}
                                </div>
                              )}

                              {spot.alternatives && spot.alternatives.length > 0 && (
                                <div className="pt-4 mt-3 border-t border-white/10">
                                  <p className="text-xs text-neutral-400 mb-2 font-medium tracking-wide">💡 AI 대안 (클릭하여 교체)</p>
                                  <div className="flex flex-col gap-2">
                                    {spot.alternatives.map((alt, aIdx) => (
                                      <button 
                                        key={aIdx}
                                        onClick={() => swapSpot(dIdx, sIdx, aIdx)}
                                        className="flex items-center justify-between text-left w-full bg-black/30 hover:bg-indigo-500/20 border border-white/5 hover:border-indigo-500/40 rounded-xl px-3 py-2.5 text-sm transition-all group/btn"
                                      >
                                        <div>
                                          <span className="block text-neutral-200 group-hover/btn:text-indigo-200 transition-colors font-medium">{alt.name}</span>
                                          <span className="block text-neutral-500 text-xs mt-0.5">{alt.reason}</span>
                                        </div>
                                        <RefreshCw className="w-4 h-4 text-neutral-500 group-hover/btn:text-indigo-400 shrink-0" />
                                      </button>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        )})}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  )
}

export default App
