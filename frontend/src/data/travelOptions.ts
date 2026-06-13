export interface RegionOption {
  id: string;
  name: string;
  baseLat: number;
  baseLng: number;
}

export interface CountryOption {
  id: string;
  name: string;
  icon: string;
  regions: RegionOption[];
}

export const COUNTRIES: CountryOption[] = [
  {
    id: 'JP', name: '일본', icon: '🇯🇵',
    regions: [
      { id: 'JP-TYO', name: '도쿄', baseLat: 35.6895, baseLng: 139.6917 },
      { id: 'JP-OSA', name: '오사카', baseLat: 34.6937, baseLng: 135.5023 },
      { id: 'JP-FUK', name: '후쿠오카', baseLat: 33.5902, baseLng: 130.4017 },
      { id: 'JP-SPK', name: '삿포로', baseLat: 43.0618, baseLng: 141.3545 },
      { id: 'JP-OKA', name: '오키나와', baseLat: 26.2124, baseLng: 127.6809 },
    ]
  },
  {
    id: 'KR', name: '한국', icon: '🇰🇷',
    regions: [
      { id: 'KR-SEO', name: '서울', baseLat: 37.5665, baseLng: 126.9780 },
      { id: 'KR-PUS', name: '부산', baseLat: 35.1796, baseLng: 129.0756 },
      { id: 'KR-CJU', name: '제주도', baseLat: 33.4996, baseLng: 126.5312 },
      { id: 'KR-KNG', name: '강릉', baseLat: 37.7519, baseLng: 128.8760 },
      { id: 'KR-GYG', name: '경주', baseLat: 35.8562, baseLng: 129.2247 },
    ]
  },
  {
    id: 'VN', name: '베트남', icon: '🇻🇳',
    regions: [
      { id: 'VN-DAD', name: '다낭', baseLat: 16.0544, baseLng: 108.2022 },
      { id: 'VN-CXR', name: '나트랑', baseLat: 12.2388, baseLng: 109.1967 },
      { id: 'VN-PQC', name: '푸꾸옥', baseLat: 10.2899, baseLng: 103.9840 },
      { id: 'VN-HAN', name: '하노이', baseLat: 21.0285, baseLng: 105.8542 },
      { id: 'VN-SGN', name: '호치민', baseLat: 10.8231, baseLng: 106.6297 },
    ]
  },
  {
    id: 'TH', name: '태국', icon: '🇹🇭',
    regions: [
      { id: 'TH-BKK', name: '방콕', baseLat: 13.7563, baseLng: 100.5018 },
      { id: 'TH-CNX', name: '치앙마이', baseLat: 18.7953, baseLng: 98.9620 },
      { id: 'TH-HKT', name: '푸껫', baseLat: 7.8804, baseLng: 98.3923 },
      { id: 'TH-PYX', name: '파타야', baseLat: 12.9236, baseLng: 100.8825 },
    ]
  },
  {
    id: 'TW', name: '대만', icon: '🇹🇼',
    regions: [
      { id: 'TW-TPE', name: '타이베이', baseLat: 25.0330, baseLng: 121.5654 },
      { id: 'TW-KHH', name: '가오슝', baseLat: 22.6273, baseLng: 120.3014 },
      { id: 'TW-TXG', name: '타이중', baseLat: 24.1477, baseLng: 120.6736 },
    ]
  },
  {
    id: 'US', name: '미국', icon: '🇺🇸',
    regions: [
      { id: 'US-NYC', name: '뉴욕', baseLat: 40.7128, baseLng: -74.0060 },
      { id: 'US-LAX', name: '로스앤젤레스', baseLat: 34.0522, baseLng: -118.2437 },
      { id: 'US-HNL', name: '하와이', baseLat: 21.3069, baseLng: -157.8583 },
      { id: 'US-LAS', name: '라스베이거스', baseLat: 36.1699, baseLng: -115.1398 },
    ]
  },
  {
    id: 'FR', name: '프랑스', icon: '🇫🇷',
    regions: [
      { id: 'FR-PAR', name: '파리', baseLat: 48.8566, baseLng: 2.3522 },
      { id: 'FR-NCE', name: '니스', baseLat: 43.7102, baseLng: 7.2620 },
    ]
  },
  {
    id: 'IT', name: '이탈리아', icon: '🇮🇹',
    regions: [
      { id: 'IT-ROM', name: '로마', baseLat: 41.9028, baseLng: 12.4964 },
      { id: 'IT-FLR', name: '피렌체', baseLat: 43.7696, baseLng: 11.2558 },
      { id: 'IT-VCE', name: '베네치아', baseLat: 45.4408, baseLng: 12.3155 },
      { id: 'IT-MIL', name: '밀라노', baseLat: 45.4642, baseLng: 9.1900 },
    ]
  }
];

export const MOOD_KEYWORDS = [
  { id: 'healing', label: '힐링/휴식', icon: '🍃' },
  { id: 'foodie', label: '먹방/미식', icon: '🍱' },
  { id: 'activity', label: '액티비티', icon: '🏄‍♂️' },
  { id: 'culture', label: '문화/예술', icon: '🖼️' },
  { id: 'shopping', label: '쇼핑', icon: '🛍️' },
  { id: 'nature', label: '대자연', icon: '🏔️' },
  { id: 'insta', label: '인스타감성', icon: '📸' },
  { id: 'citypop', label: '시티팝/레트로', icon: '📻' },
  { id: 'nightlife', label: '나이트라이프', icon: '🍸' },
  { id: 'local', label: '로컬탐험', icon: '🚶‍♂️' }
];
