import { useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';
import { usePlannerStore } from '../store/plannerStore';
import { COUNTRIES } from '../data/travelOptions';

interface EarthGlobeProps {
  isGenerating: boolean;
  targetCoords?: { lat: number; lng: number } | null;
}

export default function EarthGlobe({ isGenerating, targetCoords }: EarthGlobeProps) {
  const globeRef = useRef<any>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // 전역 상태 접근 (국가 선택을 위해)
  const setCountryId = usePlannerStore((state) => state.setCountryId);
  const currentCountryId = usePlannerStore((state) => state.countryId);

  // Resize handler for responsive globe
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight
        });
      }
    };
    window.addEventListener('resize', updateSize);
    updateSize();
    setTimeout(updateSize, 100);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // GeoJSON 벡터 데이터를 사용해 아무리 줌인해도 절대 깨지지 않는 테두리 생성
  const [countries, setCountries] = useState([]);
  const [hoverD, setHoverD] = useState<any | null>(null);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson')
      .then(res => res.json())
      .then(data => {
        // 지원하는 국가 목록만 필터링 (ISO_A2 코드 기준)
        const supportedISOs = COUNTRIES.map(c => c.id);
        const filtered = data.features.filter((d: any) => supportedISOs.includes(d.properties.ISO_A2));
        setCountries(filtered);
      });
  }, []);

  // Handle Fly-To animation and auto-rotate
  useEffect(() => {
    if (!globeRef.current) return;

    const globe = globeRef.current;

    const controls = globe.controls() as any;
    if (controls) {
      controls.autoRotate = !isGenerating;
      controls.autoRotateSpeed = 0.8;
      controls.enableZoom = false;
    }

    if (isGenerating && targetCoords) {
      // 텍스처 한계를 벡터 테두리로 커버하므로 자신있게 줌인(0.5)
      globe.pointOfView({ lat: targetCoords.lat, lng: targetCoords.lng, altitude: 0.5 }, 2500);
    }
    // 대기 상태일 때 강제로 초기 위치로 되돌리는 로직 제거하여 마우스 드래그 상태 유지
  }, [isGenerating, targetCoords]);

  // 고해상도 텍스처 (야경 및 낮)
  const NIGHT_TEXTURE = '//unpkg.com/three-globe/example/img/earth-night.jpg';
  const DAY_TEXTURE = '//unpkg.com/three-globe/example/img/earth-blue-marble.jpg';
  const BUMP_TEXTURE = '//unpkg.com/three-globe/example/img/earth-topology.png';

  return (
    <div ref={containerRef} className="w-full h-full relative overflow-hidden bg-black flex items-center justify-center rounded-2xl">
      {/* 다시 별이 반짝이는 우주 배경(night-sky.png) 적용을 위해 Globe 컴포넌트에 backgroundImageUrl 사용 */}
      <div className="absolute inset-0 bg-black z-0" />
      
      {dimensions.width > 0 && (
        <div className="z-10 animate-in fade-in duration-1000">
          <Globe
            ref={globeRef}
            width={dimensions.width}
            height={dimensions.height}
            globeImageUrl={isGenerating ? DAY_TEXTURE : NIGHT_TEXTURE}
            bumpImageUrl={BUMP_TEXTURE}
            backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
            backgroundColor="rgba(0,0,0,0)" 
            atmosphereColor={isGenerating ? "#3b82f6" : "#6366f1"} 
            atmosphereAltitude={0.15}
            // 벡터 폴리곤 레이어 (국가 테두리 표시로 화질 방어 및 상호작용)
            polygonsData={countries}
            polygonAltitude={d => (d === hoverD ? 0.04 : 0.01)}
            polygonCapColor={d => 
              d === hoverD ? 'rgba(99, 102, 241, 0.4)' : // 마우스 오버 시 밝게 빛남
              (d as any).properties.ISO_A2 === currentCountryId ? 'rgba(99, 102, 241, 0.2)' : // 선택된 국가 표시
              'rgba(0, 0, 0, 0.1)' // 기본 투명도
            }
            polygonSideColor={() => 'rgba(200, 200, 200, 0.05)'}
            polygonStrokeColor={d => 
              d === hoverD ? '#a5b4fc' : // 마우스 오버 시 선 색상 밝게
              (d as any).properties.ISO_A2 === currentCountryId ? '#818cf8' : 
              '#4f46e5'
            }
            polygonsTransitionDuration={300}
            onPolygonHover={setHoverD}
            onPolygonClick={d => {
              const iso = (d as any).properties.ISO_A2;
              setCountryId(iso);
            }}
          />
        </div>
      )}
      
      {/* 오버레이 텍스트 */}
      <div className="absolute bottom-10 left-0 right-0 text-center z-20 pointer-events-none transition-opacity duration-1000">
        <p className="text-white/60 tracking-[0.2em] text-sm font-light">
          {isGenerating ? "목적지로 이동 중..." : "새로운 여정이 시작되는 곳"}
        </p>
      </div>
    </div>
  );
}
