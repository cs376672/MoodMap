export interface SpotData {
  name: string;
  lat: number;
  lng: number;
  desc: string;
  keywords: string[];
}

export const REAL_SPOTS: Record<string, SpotData[]> = {
  // === 한국 (KR) ===
  'KR-SEO': [
    { name: '경복궁', lat: 37.5796, lng: 126.9770, desc: '조선 왕조의 으뜸 궁궐로, 한복을 입고 거닐며 인생샷을 남기기 좋습니다.', keywords: ['culture', 'insta'] },
    { name: '북촌 한옥마을', lat: 37.5826, lng: 126.9836, desc: '전통 한옥과 현대적인 카페가 어우러진 서울 최고의 산책 코스입니다.', keywords: ['culture', 'healing', 'insta'] },
    { name: 'N서울타워', lat: 37.5511, lng: 126.9882, desc: '케이블카를 타고 올라가 서울 도심 전체의 아름다운 야경을 감상해보세요.', keywords: ['nightlife', 'insta'] },
    { name: '명동 & 롯데백화점 본점', lat: 37.5636, lng: 126.9827, desc: '글로벌 브랜드와 다채로운 길거리 음식을 즐길 수 있는 쇼핑의 중심지.', keywords: ['shopping', 'foodie'] },
    { name: '광장시장', lat: 37.5700, lng: 126.9996, desc: '빈대떡, 육회, 마약김밥 등 한국의 찐 로컬 먹거리가 가득한 미식 천국.', keywords: ['foodie', 'local'] },
    { name: '성수동 카페거리', lat: 37.5444, lng: 127.0560, desc: '공장을 개조한 힙한 카페와 팝업스토어가 끊임없이 열리는 핫플레이스.', keywords: ['foodie', 'insta', 'citypop'] },
    { name: '한강공원 (반포 달빛무지개분수)', lat: 37.5113, lng: 126.9960, desc: '치맥과 함께 한강의 시원한 바람, 야경을 즐기는 완벽한 휴식.', keywords: ['healing', 'foodie', 'nightlife'] },
    { name: '롯데월드 어드벤처', lat: 37.5111, lng: 127.0982, desc: '도심 속 실내외 대형 테마파크로 스릴 넘치는 놀이기구와 퍼레이드를 즐겨보세요.', keywords: ['activity', 'insta'] },
    { name: '북한산 국립공원', lat: 37.6616, lng: 126.9926, desc: '서울을 둘러싼 웅장한 대자연 속에서 맑은 공기를 마시며 힐링 등산을 할 수 있습니다.', keywords: ['nature', 'healing'] },
    { name: '홍대 걷고싶은거리', lat: 37.5568, lng: 126.9239, desc: '버스킹 공연, 트렌디한 옷가게, 밤새 불타는 클럽들이 모인 젊음과 쇼핑의 거리.', keywords: ['shopping', 'nightlife', 'local'] }
  ],
  'KR-PUS': [
    { name: '해운대 해수욕장', lat: 35.1587, lng: 129.1603, desc: '탁 트인 바다를 보며 힐링하기 좋은 부산의 대표 해변.', keywords: ['nature', 'healing', 'insta'] },
    { name: '광안리 해수욕장 (광안대교 뷰)', lat: 35.1531, lng: 129.1186, desc: '밤이 되면 더욱 빛나는 광안대교 뷰와 야경을 감상할 수 있습니다.', keywords: ['insta', 'nightlife', 'healing'] },
    { name: '감천문화마을', lat: 35.0975, lng: 129.0106, desc: '알록달록한 계단식 집들이 모여있는 한국의 마추픽추.', keywords: ['culture', 'insta', 'local'] },
    { name: '전포 카페거리', lat: 35.1554, lng: 129.0638, desc: '힙하고 트렌디한 감성의 개인 카페와 디저트 샵이 모여있는 곳.', keywords: ['foodie', 'insta', 'citypop'] },
    { name: '자갈치 시장 & 남포동', lat: 35.0970, lng: 129.0305, desc: '싱싱한 해산물과 씨앗호떡 등 생생한 로컬 길거리 음식을 맛볼 수 있습니다.', keywords: ['foodie', 'local'] },
    { name: '더베이101', lat: 35.1566, lng: 129.1523, desc: '화려한 마린시티의 야경을 배경으로 맥주와 피쉬앤칩스를 즐길 수 있는 요트클럽.', keywords: ['nightlife', 'insta', 'foodie'] },
    { name: '해동용궁사', lat: 35.1884, lng: 129.2232, desc: '바다 위 바위에 지어진 신비로운 사찰로 파도 소리가 인상적입니다.', keywords: ['culture', 'nature', 'healing'] },
    { name: '신세계백화점 센텀시티점', lat: 35.1689, lng: 129.1298, desc: '세계 최대 규모의 백화점으로 명품 쇼핑부터 스파, 아이스링크까지 갖추었습니다.', keywords: ['shopping', 'foodie', 'insta'] },
    { name: '부산 스카이라인 루지 & 송정 서핑', lat: 35.1950, lng: 129.2155, desc: '오시리아 관광단지의 짜릿한 루지와 송정 해변의 신나는 서핑 액티비티.', keywords: ['activity', 'nature'] }
  ],
  'KR-CJU': [
    { name: '성산일출봉', lat: 33.4580, lng: 126.9425, desc: '유네스코 세계자연유산으로 지정된 거대한 분화구와 압도적인 일출 장관.', keywords: ['nature', 'insta', 'activity'] },
    { name: '동문재래시장', lat: 33.5118, lng: 126.5264, desc: '제주 흑돼지 꼬치, 회포장 등 다채로운 제주 로컬 먹거리의 성지.', keywords: ['foodie', 'local', 'nightlife'] },
    { name: '함덕 해수욕장', lat: 33.5431, lng: 126.6692, desc: '에메랄드빛 바다와 야자수가 어우러진 이국적인 해변과 감성 카페.', keywords: ['nature', 'healing', 'insta', 'foodie'] },
    { name: '오설록 티 뮤지엄', lat: 33.3059, lng: 126.2895, desc: '끝없이 펼쳐진 녹차밭에서 힐링하고 맛있는 녹차 디저트를 즐길 수 있는 곳.', keywords: ['healing', 'foodie', 'nature'] },
    { name: '우도', lat: 33.5042, lng: 126.9536, desc: '에메랄드 해변을 따라 전기 자전거를 타며 섬 속의 섬을 탐험해보세요.', keywords: ['activity', 'nature', 'healing'] },
    { name: '협재 해수욕장', lat: 33.3937, lng: 126.2396, desc: '비양도가 그림처럼 떠 있는 투명한 옥빛 바다의 환상적인 풍경.', keywords: ['nature', 'healing', 'insta'] },
    { name: '제주 칠성로 쇼핑거리', lat: 33.5134, lng: 126.5244, desc: '제주의 명동이라 불리는 대표 쇼핑 구역이자 현지 소품샵들이 모인 복합 스트리트.', keywords: ['shopping', 'local'] },
    { name: '한라산 국립공원 백록담', lat: 33.3617, lng: 126.5292, desc: '남한 최고봉, 백록담의 압도적인 장관을 마주하는 등산가들의 버킷리스트 명산.', keywords: ['nature', 'activity', 'healing'] }
  ],
  'KR-KNG': [
    { name: '안목해변 카페거리', lat: 37.7715, lng: 128.9463, desc: '바다를 마주하고 줄지어 있는 감성적인 커피 전문점들.', keywords: ['foodie', 'healing', 'insta'] },
    { name: '강릉 중앙시장', lat: 37.7540, lng: 128.8986, desc: '닭강정, 장칼국수, 호떡 등 강릉의 소울푸드가 총집합한 로컬 시장.', keywords: ['foodie', 'local'] },
    { name: '오죽헌', lat: 37.7816, lng: 128.8795, desc: '신사임당과 율곡 이이가 태어난 곳으로 한국적인 전통미가 돋보입니다.', keywords: ['culture', 'healing'] },
    { name: '경포대 & 경포호', lat: 37.7954, lng: 128.8966, desc: '아름다운 호수 둘레길을 자전거로 돌며 자연의 평화로움을 느껴보세요.', keywords: ['nature', 'healing', 'activity'] },
    { name: '하슬라 아트월드', lat: 37.7081, lng: 129.0115, desc: '동해 바다를 바라보는 자연 속의 거대한 조각공원과 인스타 인증샷 포토존 미술관.', keywords: ['culture', 'insta', 'activity'] },
    { name: '소돌 아들바위 공원', lat: 37.8938, lng: 128.8286, desc: '기암괴석들이 늘어선 투명한 해변으로 시원한 파도 소리를 즐기기 좋은 자연 힐링 코스.', keywords: ['nature', 'healing', 'insta'] },
    { name: '정동진역 & 정동진해변', lat: 37.6912, lng: 129.0326, desc: '세계에서 바다와 가장 가까운 역으로, 아름다운 동해 바다와 일출을 한눈에 담을 수 있습니다.', keywords: ['nature', 'healing', 'insta', 'local'] },
    { name: '주문진 수산시장', lat: 37.8920, lng: 128.8290, desc: '동해안 최대 규모의 수산시장으로 신선한 대게와 오징어, 활어회를 저렴하게 맛볼 수 있습니다.', keywords: ['foodie', 'local', 'shopping'] }
  ],
  'KR-GYG': [
    { name: '불국사', lat: 35.7900, lng: 129.3320, desc: '신라 천년의 예술혼이 담긴 한국을 대표하는 가장 아름다운 사찰.', keywords: ['culture', 'nature'] },
    { name: '황리단길', lat: 35.8378, lng: 129.2096, desc: '전통 한옥 건물에 들어선 트렌디한 카페, 레스토레스, 소품샵 골목.', keywords: ['foodie', 'insta', 'shopping'] },
    { name: '동궁과 월지 (안압지)', lat: 35.8340, lng: 129.2268, desc: '밤이 되면 호수에 비친 전각의 모습이 환상적인 신라 시대의 궁궐 터.', keywords: ['nightlife', 'culture', 'insta'] },
    { name: '대릉원 (천마총)', lat: 35.8385, lng: 129.2114, desc: '거대한 고분들이 신비로운 분위기를 자아내는 사진 촬영의 명소.', keywords: ['culture', 'insta', 'healing'] },
    { name: '경주월드', lat: 35.8368, lng: 129.2811, desc: '국내 최고 높이의 드롭 코스터 드라켄 등 짜릿한 어트랙션이 가득한 액티비티 파크.', keywords: ['activity', 'insta'] },
    { name: '경주 국립박물관', lat: 35.8296, lng: 129.2285, desc: '신라의 찬란한 금관부터 성덕대왕신종까지, 역사와 정취가 깃든 문화 공간.', keywords: ['culture', 'healing'] },
    { name: '첨성대', lat: 35.8347, lng: 129.2190, desc: '동양에서 가장 오래된 천문대로, 밤이 되면 은은한 조명이 켜져 산책하기 좋습니다.', keywords: ['culture', 'insta', 'healing'] },
    { name: '경주 석굴암', lat: 35.7950, lng: 129.3490, desc: '토함산 중턱에 자리한 통일신라 시대의 대표 석굴 사찰로 국보이자 유네스코 세계문화유산입니다.', keywords: ['culture', 'nature', 'healing'] }
  ],

  // === 일본 (JP) ===
  'JP-TYO': [
    { name: '시부야 스크램블 교차로', lat: 35.6595, lng: 139.7005, desc: '도쿄의 상징적인 장소. 수많은 인파가 교차하는 압도적인 풍경.', keywords: ['citypop', 'insta', 'local'] },
    { name: '도쿄 타워', lat: 35.6586, lng: 139.7454, desc: '클래식한 감성의 붉은 철탑. 로맨틱한 도쿄의 야경을 즐기기에 완벽합니다.', keywords: ['nightlife', 'insta', 'citypop'] },
    { name: '아사쿠사 센소지', lat: 35.7148, lng: 139.7967, desc: '도쿄에서 가장 오래된 사찰로, 전통적인 일본의 정취를 느낄 수 있습니다.', keywords: ['culture', 'local'] },
    { name: '츠키지 장외시장', lat: 35.6646, lng: 139.7705, desc: '신선한 스시와 해산물 덮밥 등 최고의 로컬 미식을 즐길 수 있는 곳.', keywords: ['foodie', 'local'] },
    { name: '신주쿠 오모이데요코초', lat: 35.6928, lng: 139.6995, desc: '현지인들이 즐겨 찾는 꼬치구이와 생맥주가 있는 감성적인 이자카야 골목.', keywords: ['foodie', 'nightlife', 'local'] },
    { name: '시부야 스카이', lat: 35.6585, lng: 139.7020, desc: '도쿄 도심을 360도로 내려다볼 수 있는 가장 트렌디한 옥상 전망대.', keywords: ['insta', 'healing', 'nightlife'] },
    { name: '오모테산도 & 하라주쿠', lat: 35.6672, lng: 139.7090, desc: '명품 브랜드, 감각적인 카페, 일본 스트릿 패션을 모두 볼 수 있는 거리.', keywords: ['shopping', 'insta', 'foodie'] },
    { name: '신주쿠 교엔', lat: 35.6852, lng: 139.7100, desc: '도심 속 거대한 정원. 벚꽃 및 울창한 숲 속에서 평화로운 힐링을 선사합니다.', keywords: ['nature', 'healing'] },
    { name: '팀랩 플래닛 도쿄', lat: 35.6483, lng: 139.7905, desc: '물속을 걷고 꽃과 하나가 되는 독창적인 미디어 아트 체험 공간.', keywords: ['activity', 'insta', 'culture'] },
    { name: '아키하바라 전자상가', lat: 35.6997, lng: 139.7715, desc: '서브컬처와 오타쿠 문화의 성지. LP바 및 구제 상점과 전자 기기가 가득한 레트로 쇼핑 지구.', keywords: ['shopping', 'citypop', 'local'] },
    { name: '롯폰기 힐즈 모리 타워', lat: 35.6605, lng: 139.7291, desc: '도시적인 전망과 현대미술관, 명품 브랜드가 밀집한 트렌디한 복합 랜드마크 타워.', keywords: ['nightlife', 'insta', 'shopping'] },
    { name: '오다이바 해변공원', lat: 35.6295, lng: 139.7758, desc: '자유의 여신상 복제품과 레인보우 브릿지의 야경이 한눈에 들어오는 인공 해안 공원.', keywords: ['nature', 'healing', 'nightlife'] }
  ],
  'JP-OSA': [
    { name: '도톤보리 & 글리코상', lat: 34.6687, lng: 135.5013, desc: '오사카 먹방의 중심! 타코야키, 오코노미야키 등 수많은 맛집과 화려한 네온사인 거리.', keywords: ['foodie', 'nightlife', 'insta', 'local'] },
    { name: '오사카 성', lat: 34.6873, lng: 135.5262, desc: '일본의 3대 명성 중 하나. 천수각을 배경으로 아름다운 공원을 산책해보세요.', keywords: ['culture', 'healing', 'insta'] },
    { name: '유니버설 스튜디오 재팬 (USJ)', lat: 34.6654, lng: 135.4323, desc: '마리오 카트부터 해리포터까지, 하루 종일 짜릿하게 즐기는 세계 최고의 테마파크.', keywords: ['activity', 'insta'] },
    { name: '우메다 스카이 빌딩', lat: 34.7053, lng: 135.4896, desc: '공중정원 전망대에서 내려다보는 오사카 시내의 황홀한 파노라마 야경.', keywords: ['nightlife', 'insta', 'healing'] },
    { name: '구로몬 시장', lat: 34.6655, lng: 135.5065, desc: '"오사카의 부엌"이라 불리는 곳. 최고급 와규 꼬치와 참치회 등 찐 로컬 미식을 맛보세요.', keywords: ['foodie', 'local'] },
    { name: '신세카이 & 츠텐카쿠', lat: 34.6525, lng: 135.5059, desc: '레트로한 시티팝 감성이 넘치는 거리에서 원조 쿠시카츠(꼬치튀김)와 맥주를 즐겨보세요.', keywords: ['foodie', 'citypop', 'nightlife', 'local'] },
    { name: '신사이바시 스지 & 오렌지 스트리트', lat: 34.6712, lng: 135.4988, desc: '거대한 아케이드 쇼핑가와 힙한 패션 편집숍이 늘어선 오사카의 쇼핑 일번지.', keywords: ['shopping', 'local', 'insta'] },
    { name: '미노오 국립공원', lat: 34.8486, lng: 135.4744, desc: '멋진 미노오 폭포와 함께 가을 단풍 튀김을 맛볼 수 있는 아름다운 자연 계곡 코스.', keywords: ['nature', 'healing'] },
    { name: '햅파이브 대관람차', lat: 34.7041, lng: 135.5003, desc: '쇼핑몰 상단에 위치한 붉은색 대형 관람차로, 탑승하며 붉은 도시 전경과 야경을 즐길 수 있습니다.', keywords: ['activity', 'insta', 'nightlife'] },
    { name: '오사카 아쿠아리움 카이유칸', lat: 34.6545, lng: 135.4289, desc: '거대한 태평양 수조와 고래상어가 있는 세계 최대 규모급의 수족관.', keywords: ['activity', 'nature', 'healing'] },
    { name: '츠루하시 코리아타운', lat: 34.6648, lng: 135.5312, desc: '맛있는 한식 길거리 음식과 삼겹살 식당, 로컬 전통 상점들이 가득한 활기찬 번화가.', keywords: ['foodie', 'local', 'shopping'] },
    { name: '나카노시마 공원', lat: 34.6923, lng: 135.5065, desc: '강 사이에 위치해 붉은 벽돌의 시청 등 도심 속 레트로한 감성을 느끼며 걷기 좋은 공원.', keywords: ['nature', 'healing', 'citypop'] }
  ],
  'JP-FUK': [
    { name: '나카스 야타이(포장마차) 거리', lat: 33.5910, lng: 130.4079, desc: '강변을 따라 길게 늘어선 포장마차에서 돈코츠 라멘과 명란구이에 술 한 잔을 즐겨보세요.', keywords: ['foodie', 'nightlife', 'local', 'citypop'] },
    { name: '오호리 공원', lat: 33.5861, lng: 130.3768, desc: '도심 속 거대한 호수 공원. 여유롭게 자전거를 타거나 감성 카페에서 쉬어가기 좋습니다.', keywords: ['nature', 'healing'] },
    { name: '후쿠오카 타워 & 모모치 해변', lat: 33.5933, lng: 130.3515, desc: '유럽풍의 예쁜 해변과 반짝이는 타워 야경을 동시에 감상할 수 있는 데이트 스팟.', keywords: ['insta', 'nightlife', 'healing'] },
    { name: '캐널시티 하카타', lat: 33.5898, lng: 130.4107, desc: '운하를 품은 거대한 복합 쇼핑몰. 매 시간 열리는 분수쇼와 라멘 스타디움이 유명합니다.', keywords: ['shopping', 'foodie'] },
    { name: '다자이후 텐만구', lat: 33.5215, lng: 130.5349, desc: '학문의 신을 모시는 아름다운 신사. 명물인 매화떡(우메가에모치)을 꼭 맛보세요.', keywords: ['culture', 'foodie', 'healing'] },
    { name: '텐진 지하상가', lat: 33.5895, lng: 130.4005, desc: '19세기 유럽 풍의 철제 장식으로 꾸며진 아치형 지하 쇼핑가로 다양한 로컬 패션 숍들이 있습니다.', keywords: ['shopping', 'local'] },
    { name: '우미노나카미치 해변공원', lat: 33.6644, lng: 130.3705, desc: '바다로 둘러싸인 광활한 국영 공원으로 자전거 트레킹과 다양한 꽃밭, 액티비티를 즐길 수 있습니다.', keywords: ['nature', 'activity', 'healing'] }
  ],
  'JP-SPK': [
    { name: '오도리 공원 & 삿포로 TV 타워', lat: 43.0600, lng: 141.3540, desc: '계절마다 눈 축제와 맥주 축제가 열리는 삿포로의 중심. 타워 야경이 아름답습니다.', keywords: ['nature', 'nightlife', 'insta'] },
    { name: '스스키노 거리', lat: 43.0554, lng: 141.3533, desc: '화려한 니카상 네온사인 앞 인증샷 필수! 징기스칸(양고기)과 미소라멘 맛집이 밀집한 홋카이도 최대의 번화가.', keywords: ['foodie', 'nightlife', 'local'] },
    { name: '삿포로 맥주 박물관', lat: 43.0715, lng: 141.3690, desc: '붉은 벽돌 건물의 클래식한 분위기. 공장에서 갓 뽑은 신선한 생맥주 3종 샘플러를 맛보세요.', keywords: ['foodie', 'culture', 'citypop'] },
    { name: '니조 시장', lat: 43.0581, lng: 141.3585, desc: '성게알(우니), 털게, 연어알 등 홋카이도의 미친 신선도를 자랑하는 해산물 덮밥(카이센동)의 성지.', keywords: ['foodie', 'local'] },
    { name: '시로이 코이비토 파크', lat: 43.0881, lng: 141.2705, desc: '달콤한 초콜릿 과자의 제조 과정을 보고 직접 만들어보는 잉글랜드 풍 테마 정원.', keywords: ['insta', 'activity', 'culture'] },
    { name: '마루야마 공원 & 홋카이도 신궁', lat: 43.0552, lng: 141.3072, desc: '아름다운 야생 조류와 원시림이 살아 숨 쉬는 숲 속의 평화로운 신사 힐링지.', keywords: ['nature', 'healing'] },
    { name: '모이와야마 전망대', lat: 43.0219, lng: 141.3234, desc: '케이블카를 타고 올라가 삿포로 시내의 반짝이는 보석 같은 야경을 360도로 조망할 수 있는 전망대.', keywords: ['nightlife', 'insta', 'healing', 'activity'] },
    { name: '오타루 운하', lat: 43.2017, lng: 141.0076, desc: '가스등이 켜지는 붉은 벽돌 창고 가를 걸으며 낭만적인 시간 여행을 즐기는 아름다운 운하.', keywords: ['culture', 'insta', 'healing', 'local'] }
  ],
  'JP-OKA': [
    { name: '츄라우미 수족관', lat: 26.6943, lng: 127.8779, desc: '세계 최대 규모의 수조에서 압도적인 크기의 고래상어와 쥐가오리를 만날 수 있습니다.', keywords: ['activity', 'nature', 'insta'] },
    { name: '국제거리 (고쿠사이도리)', lat: 26.2168, lng: 127.6845, desc: '오키나와의 특산물, 스테이크 맛집, 이자카야가 즐비한 활기찬 쇼핑과 미식의 거리.', keywords: ['foodie', 'shopping', 'local'] },
    { name: '아메리칸 빌리지', lat: 26.3163, lng: 127.7565, desc: '이국적인 미국 서해안 감성의 테마타운. 관람차와 환상적인 선셋 비치가 어우러진 핫플.', keywords: ['insta', 'shopping', 'nightlife'] },
    { name: '만자모', lat: 26.5049, lng: 127.8502, desc: '코끼리 모양의 기암괴석와 에메랄드빛 바다가 만들어내는 탁 트인 자연 절경.', keywords: ['nature', 'healing'] },
    { name: '헤도 곶 & 아열대 숲 트래킹', lat: 26.8712, lng: 128.2612, desc: '오키나와 최북단의 파도와 거친 해안 절벽, 얀바루 숲의 생태계를 직접 탐험해보세요.', keywords: ['nature', 'activity'] },
    { name: '류큐무라 테마파크', lat: 26.4252, lng: 127.7967, desc: '오키나와의 옛 민가를 보존하고 전통 공연과 민속공예 체험을 즐길 수 있는 전통 로컬촌.', keywords: ['culture', 'local'] },
    { name: '슈리성', lat: 26.2170, lng: 127.7195, desc: '붉은색 기와와 독특한 석축이 어우러진 옛 류큐 왕국의 찬란한 역사와 문화를 간직한 궁궐 터.', keywords: ['culture', 'local'] },
    { name: '비세 가로수길', lat: 26.7042, lng: 127.8825, desc: '울창한 후쿠기 나무 터널 사이로 따사로운 햇살을 받으며 자전거 산책을 즐기는 조용한 해안 마을 길.', keywords: ['nature', 'healing', 'insta'] }
  ],

  // === 베트남 (VN) ===
  'VN-DAD': [
    { name: '미케 비치', lat: 16.0592, lng: 108.2435, desc: '세계 6대 해변 중 하나. 끝없이 펼쳐진 백사장과 저렴하고 맛있는 해산물 식당들.', keywords: ['nature', 'healing', 'foodie'] },
    { name: '바나힐 (골든 브릿지)', lat: 15.9984, lng: 107.9877, desc: '세계 최장 케이블카를 타고 올라가는 유럽풍 테마파크. 거대한 두 손이 받치고 있는 다리에서 인생샷!', keywords: ['activity', 'insta', 'nature'] },
    { name: '호이안 올드타운', lat: 15.8778, lng: 108.3275, desc: '(다낭 근교) 수천 개의 형형색색 등불이 켜지는 로맨틱한 구시가지. 코코넛 배 탑승은 필수.', keywords: ['culture', 'nightlife', 'insta', 'local'] },
    { name: '다낭 한시장', lat: 16.0683, lng: 108.2235, desc: '라탄백, 아오자이 맞춤, 열대과일 등 베트남의 생생한 로컬 쇼핑을 즐길 수 있는 곳.', keywords: ['shopping', 'local'] },
    { name: '다낭 용다리 (드래곤 브릿지)', lat: 16.0611, lng: 108.2275, desc: '주말 밤이 되면 불과 물을 뿜어내는 용 모양의 거대한 다리와 다채로운 야경 푸드 마켓.', keywords: ['nightlife', 'insta', 'local'] },
    { name: '손트라 반도 (원숭이 산)', lat: 16.1154, lng: 108.2805, desc: '거대한 해수관음상과 울창한 대자연에서 다낭 바다를 한눈에 조망할 수 있는 자연 힐링 스팟.', keywords: ['nature', 'healing'] },
    { name: '오행산 (마블 마운틴)', lat: 16.0028, lng: 108.2638, desc: '대리석으로 이루어진 5개의 산으로, 천연 동굴 속 신비로운 불상과 다낭 전망을 볼 수 있습니다.', keywords: ['nature', 'culture', 'activity'] },
    { name: '다낭 대성당 (핑크성당)', lat: 16.0667, lng: 108.2233, desc: '파스텔 톤 핑크빛 외관이 매력적인 프랑스 식민지 시절의 가톨릭 성당으로 최고의 포토존입니다.', keywords: ['insta', 'culture'] }
  ],
  'VN-CXR': [ // 나트랑
    { name: '포나가르 첨탑', lat: 12.2654, lng: 109.1957, desc: '고대 샴족의 유적지로 독특한 양식의 붉은 벽돌 힌두교 탑들이 모여 있는 문화 유적지.', keywords: ['culture', 'local'] },
    { name: '빈원더스 나트랑', lat: 12.2195, lng: 109.2435, desc: '섬 전체가 거대한 어뮤즈먼트 파크로 해변 워터파크와 사파리, 롤러코스터가 있습니다.', keywords: ['activity', 'insta'] },
    { name: '나트랑 해변', lat: 12.2422, lng: 109.1967, desc: '끝없이 뻗어 있는 에메랄드빛 만을 보며 여유를 즐기거나 스노클링을 즐기기 좋습니다.', keywords: ['nature', 'healing'] },
    { name: '혼총 곶', lat: 12.2725, lng: 109.2065, desc: '아름다운 거대 기암괴석 해변과 잔잔한 전통 악기 연주를 감상하는 운치 있는 장소.', keywords: ['nature', 'healing', 'insta'] },
    { name: '담 시장', lat: 12.2533, lng: 109.1905, desc: '건어물, 과일, 캐슈넛, 라탄백 등을 파는 나트랑의 대표적인 전통 쇼핑 시장.', keywords: ['shopping', 'local'] },
    { name: '세일링 클럽 나트랑', lat: 12.2354, lng: 109.1969, desc: '해변 모래사장 위에서 멋진 디제잉 음악과 칵테일, 맛있는 식사를 밤새 즐기는 클럽.', keywords: ['nightlife', 'foodie'] },
    { name: '나트랑 대성당', lat: 12.2474, lng: 109.1895, desc: '언덕 위에 세워진 네오고딕 양식의 고풍스러운 돌 성당으로, 내부의 스테인드글라스가 아름답습니다.', keywords: ['culture', 'insta'] },
    { name: '롱선사', lat: 12.2504, lng: 109.1802, desc: '거대한 백색 좌불상이 시내를 굽어보고 있는 나트랑의 대표적인 불교 사찰.', keywords: ['culture', 'nature', 'healing'] }
  ],
  'VN-PQC': [ // 푸꾸옥
    { name: '사오 비치', lat: 10.0525, lng: 104.0388, desc: '하얗고 부드러운 백사장과 불가사리가 기어 다니는 얕고 맑은 바다의 환상적인 풍경.', keywords: ['nature', 'healing', 'insta'] },
    { name: '빈원더스 푸꾸옥', lat: 10.3344, lng: 103.8612, desc: '베트남 남부 최대의 테마파크로 초대형 수족관과 다채로운 놀이기구가 가득합니다.', keywords: ['activity', 'insta'] },
    { name: '그랜드 월드 푸꾸옥', lat: 10.3255, lng: 103.8645, desc: '베네치아 운하를 모티브로 꾸며진 화려한 조명과 레이저 분수 쇼가 매일 밤 열리는 복합 타운.', keywords: ['culture', 'shopping', 'nightlife', 'insta'] },
    { name: '즈엉동 야시장', lat: 10.2185, lng: 103.9602, desc: '싱싱한 해산물 바베큐와 푸꾸옥 땅콩, 반미 등 다양한 로컬 길거리 음식을 판매합니다.', keywords: ['foodie', 'local', 'nightlife'] },
    { name: '푸꾸옥 케이블카 (혼톰 섬)', lat: 9.9954, lng: 104.0155, desc: '세계 최장 해상 케이블카를 타고 환상적인 바다 풍경을 넘어 워터파크 섬으로 날아갑니다.', keywords: ['activity', 'nature'] },
    { name: '수오이 Tranh 폭포', lat: 10.1551, lng: 104.0195, desc: '울창한 열대우림을 따라 가벼운 트래킹을 하며 만날 수 있는 맑고 시원한 자연 폭포 계곡.', keywords: ['nature', 'healing', 'activity'] },
    { name: '딘꺼 사원', lat: 10.2172, lng: 103.9560, desc: '즈엉동 항구 바위 끝에 지어진 사원으로, 현지 어민들이 풍어를 빌던 곳이자 석양 명소입니다.', keywords: ['culture', 'nature', 'nightlife'] },
    { name: '스타피시 비치', lat: 10.3872, lng: 103.9405, desc: '푸꾸옥 북부의 비밀스러운 해변으로 얕고 맑은 물속에 수많은 붉은 불가사리들이 서식하는 신비로운 장소.', keywords: ['nature', 'healing', 'insta'] }
  ],
  'VN-HAN': [ // 하노이
    { name: '호안끼엠 호수 & 응옥선 사당', lat: 21.0285, lng: 105.8522, desc: '도심 속 평화로운 호수로 붉은 아치교를 지나 전설의 거북이를 기리는 사당을 둘러봅니다.', keywords: ['nature', 'healing', 'culture'] },
    { name: '하노이 기찻길 카페거리', lat: 21.0298, lng: 105.8435, desc: '실제 기차가 지나가는 좁은 골목길 옆 카페에서 전통 코코넛 커피를 마시는 이색 체험.', keywords: ['insta', 'foodie', 'local'] },
    { name: '하노이 성요셉 성당', lat: 21.0282, lng: 105.8488, desc: '고풍스러운 고딕 양식의 성당으로, 하노이에서 가장 사진 찍기 좋은 유럽 풍 명소입니다.', keywords: ['culture', 'insta'] },
    { name: '동쑤언 시장', lat: 21.0378, lng: 105.8495, desc: '하노이에서 가장 큰 실내 도매 시장으로 다양한 의류와 로컬 소품 쇼핑을 즐깁니다.', keywords: ['shopping', 'local'] },
    { name: '타히엔 맥주거리', lat: 21.0345, lng: 105.8528, desc: '길가에 놓인 목욕탕 의자에 앉아 시원한 맥주와 꼬치를 즐기는 세계 여행자들의 아지트.', keywords: ['nightlife', 'foodie', 'local'] },
    { name: '문묘', lat: 21.0287, lng: 105.8354, desc: '공자의 위패를 모시기 위해 세워진 베트남 최초의 대학으로, 조용하고 고풍스러운 전통 정원이 펼쳐집니다.', keywords: ['culture', 'healing'] },
    { name: '하노이 서호 & 진국사', lat: 21.0483, lng: 105.8365, desc: '하노이에서 가장 큰 호수인 서호와 그 위에 떠 있는 듯한 붉은색의 유서 깊은 진국사 탑.', keywords: ['nature', 'healing', 'insta', 'culture'] },
    { name: '바딘 광장 & 호치민 묘소', lat: 21.0368, lng: 105.8346, desc: '베트남의 독립 선언이 이루어진 바딘 광장과 건국 국부 호치민 주석이 영면해 계시는 장엄한 묘소.', keywords: ['culture', 'local'] }
  ],
  'VN-SGN': [ // 호치민
    { name: '벤탄 시장 & 스트리트 푸드 마켓', lat: 10.7725, lng: 106.6980, desc: '호치민 최대 규모의 전통시장. 쌀국수, 반미, 껌승 등 완벽한 로컬 미식 투어의 중심지.', keywords: ['foodie', 'local', 'shopping'] },
    { name: '부이비엔 여행자 거리', lat: 10.7675, lng: 106.6938, desc: '호치민 나이트라이프의 성지. 시원한 사이공 맥주와 화려한 클럽, 펍들이 불야성을 이룹니다.', keywords: ['nightlife', 'local', 'activity'] },
    { name: '호치민 시청 광장 & 카페 아파트먼트', lat: 10.7766, lng: 106.7031, desc: '유럽풍 건축물과 낡은 아파트를 개조한 수십 개의 힙한 카페들이 모여있는 감성 스팟.', keywords: ['insta', 'culture', 'foodie'] },
    { name: '사이공 노트르담 대성당', lat: 10.7798, lng: 106.6990, desc: '프랑스 식민지 시절 붉은 벽돌로 지어진 역사적인 성당으로 평화롭고 고풍스러운 명소입니다.', keywords: ['culture', 'insta'] },
    { name: '호치민 랜드마크 81', lat: 10.7947, lng: 106.7219, desc: '베트남에서 가장 높은 마천루로, 초고층 전망대 야경과 대형 쇼핑 브랜드들이 모인 핫플레이스.', keywords: ['nightlife', 'shopping', 'insta'] },
    { name: '사이공 중앙 우체국', lat: 10.7798, lng: 106.6999, desc: '에펠탑을 설계한 구스타브 에펠의 문하생들이 참여하여 지은 아치형 천장의 아름다운 프랑스식 우체국.', keywords: ['culture', 'insta', 'shopping'] },
    { name: '통일궁', lat: 10.7769, lng: 106.6953, desc: '베트남 전쟁 종식의 역사적 현장인 옛 남베트남 대통령 관저로, 넓고 푸른 정원이 돋보입니다.', keywords: ['culture', 'local'] },
    { name: '전쟁증적박물관', lat: 10.7795, lng: 106.6907, desc: '베트남 전쟁의 역사적 실상과 참상을 사진 및 군 장비 전시를 통해 보여주는 세계적인 박물관.', keywords: ['culture', 'local'] }
  ],

  // === 대만 (TW) ===
  'TW-TPE': [
    { name: '타이베이 101 전망대', lat: 25.0339, lng: 121.5644, desc: '대만의 랜드마크. 초고속 엘리베이터를 타고 올라가 화려한 타이베이의 야경을 감상하세요.', keywords: ['insta', 'nightlife'] },
    { name: '스린 야시장', lat: 25.0879, lng: 121.5241, desc: '지파이, 우육면, 망고빙수! 대만 여행의 꽃인 야시장 먹방 투어의 끝판왕.', keywords: ['foodie', 'local', 'nightlife'] },
    { name: '지우펀 (센과 치히로의 행방불명)', lat: 25.1098, lng: 121.8451, desc: '산비탈을 따라 늘어선 홍등이 켜지면 몽환적인 애니메이션 속 세상이 펼쳐집니다.', keywords: ['culture', 'insta', 'healing'] },
    { name: '융캉제 거리', lat: 25.0315, lng: 121.5293, desc: '딘타이펑 본점, 유명 우육면 맛집, 예쁜 소품샵들이 모여있는 힙하고 여유로운 거리.', keywords: ['foodie', 'shopping', 'local'] },
    { name: '단수이 일몰 & 라오제', lat: 25.1698, lng: 121.4421, desc: '아름다운 강변의 일몰을 바라보며 대왕 카스테라와 밀크티를 즐겨보세요.', keywords: ['healing', 'nature', 'foodie'] },
    { name: '시먼딩 거리', lat: 25.0422, lng: 121.5085, desc: '타이베이의 명동으로 불리며 대만 청소년들의 문화를 엿볼 수 있고, 레트로 상점과 쇼핑 숍이 많습니다.', keywords: ['shopping', 'local', 'citypop'] },
    { name: '양명산 국립공원', lat: 25.1654, lng: 121.5488, desc: '유황 온천과 울창한 계곡, 평화로운 초원 언덕이 있어 대자연을 즐기기 좋은 힐링 코스.', keywords: ['nature', 'healing'] }
  ],
  'TW-KHH': [ // 가오슝
    { name: '보얼 예술 특구', lat: 22.6205, lng: 120.2818, desc: '버려진 부두 창고를 예술적인 조형물, 벽화, 갤러리 및 소품 숍으로 리모델링한 쇼핑 및 문화 단지.', keywords: ['culture', 'insta', 'shopping'] },
    { name: '리우허 야시장', lat: 22.6315, lng: 120.3012, desc: '해산물 튀김과 파파야 우유 등 다양하고 생생한 로컬 미식을 맛볼 수 있는 야시장.', keywords: ['foodie', 'local', 'nightlife'] },
    { name: '용호탑 (롄츠탄)', lat: 22.6802, lng: 120.2922, desc: '용의 입으로 들어가서 호랑이의 입으로 나오면 액운을 피할 수 있다는 신비롭고 거대한 문화 유적지.', keywords: ['culture', 'insta'] },
    { name: '치진섬 자전거 트레킹', lat: 22.6125, lng: 120.2705, desc: '페리를 타고 건너가 자전거를 타며 탁 트인 바다와 석양, 맛있는 해산물을 즐깁니다.', keywords: ['nature', 'activity', 'foodie', 'local'] },
    { name: '아이허 강변 산책로', lat: 22.6255, lng: 120.2912, desc: '강을 따라 흐르는 다채로운 라이트업 야경을 감상하며 노천 바에서 라이브 음악을 즐깁니다.', keywords: ['nightlife', 'healing', 'insta'] },
    { name: '다카오 영국 영사관', lat: 22.6186, lng: 120.2673, desc: '가오슝 항구가 내려다보이는 해안 언덕 위에 붉은 벽돌로 지어진 대만 역사상 최초의 영국 영사관.', keywords: ['culture', 'insta', 'healing'] },
    { name: '가오슝 85타워', lat: 22.6116, lng: 120.3005, desc: '가오슝을 상징하는 건물로 85층 규모의 마천루와 항구 야경을 볼 수 있는 랜드마크 타워.', keywords: ['insta', 'nightlife'] },
    { name: '미려도역 (빛의 돔)', lat: 22.6313, lng: 120.3019, desc: '세계에서 가장 아름다운 지하철역 중 하나로, 거대한 유리 예술 기둥 "빛의 돔"이 장관을 이룹니다.', keywords: ['insta', 'culture', 'local'] }
  ],
  'TW-TXG': [ // 타이중
    { name: '일월담 (선문레이크)', lat: 23.8682, lng: 120.9105, desc: '대만에서 가장 아름다운 호수로 자전거 도로를 따라 웅장한 호수 대자연과 고요함을 즐깁니다.', keywords: ['nature', 'healing', 'activity'] },
    { name: '고미 습지', lat: 24.2582, lng: 120.5512, desc: '대만의 우유니 사막이라 불리며, 거대한 풍력 발전기 아래 갯벌 거울 위로 비치는 환상적인 일몰 인생샷.', keywords: ['nature', 'healing', 'insta'] },
    { name: '봉갑 야시장 (펑자 야시장)', lat: 24.1755, lng: 120.6455, desc: '대만 최대 규모의 야시장으로 다양하고 저렴한 의류 쇼핑과 기발하고 맛있는 먹거리가 넘쳐납니다.', keywords: ['foodie', 'shopping', 'local', 'nightlife'] },
    { name: '무지개 마을', lat: 24.1333, lng: 120.6095, desc: '은퇴한 퇴역 군인이 벽면에 알록달록 동화 같은 그림을 그려 가꾼 매력적인 문화 벽화마을.', keywords: ['culture', 'insta'] },
    { name: '궁원 안과 (미야하라)', lat: 24.1378, lng: 120.6835, desc: '일제강점기 안과 건물을 개조해 고풍스럽게 꾸민 디저트 전문점 및 쇼핑숍.', keywords: ['foodie', 'shopping', 'insta'] },
    { name: '타이중 국가가극원', lat: 24.1627, lng: 120.6405, desc: '세계적인 건축가 토요 이토가 설계한 기둥 없는 유기적인 곡선 구조의 현대적인 극장 겸 문화 예술 센터.', keywords: ['culture', 'insta', 'healing'] },
    { name: '심계신촌 (Audit Village)', lat: 24.1486, lng: 120.6627, desc: '버려진 공무원 관사를 아기자기한 플리마켓, 감성 소품샵, 수제 디저트 카페로 탈바꿈시킨 청년 창업 예술 마을.', keywords: ['shopping', 'insta', 'local', 'foodie'] },
    { name: '타이중 공원', lat: 24.1444, lng: 120.6865, desc: '100년 이상의 역사를 자랑하는 공원으로 호수 위에 지어진 호심정과 평화로운 보트 체험이 가능합니다.', keywords: ['nature', 'healing', 'activity'] }
  ],

  // === 태국 (TH) ===
  'TH-BKK': [
    { name: '카오산 로드', lat: 13.7588, lng: 100.4974, desc: '전 세계 배낭여행자들의 성지. 팟타이, 로티 등 길거리 음식과 밤새 끊이지 않는 파티.', keywords: ['foodie', 'nightlife', 'local', 'activity'] },
    { name: '왓 아룬 (새벽사원)', lat: 13.7437, lng: 100.4889, desc: '짜오프라야 강변에 우뚝 솟은 아름다운 사원. 건너편 레스토랑에서 바라보는 야경이 일품입니다.', keywords: ['culture', 'insta', 'nightlife'] },
    { name: '아이콘시암 & 쑥시암', lat: 13.7265, lng: 100.5097, desc: '실내에 수상시장을 완벽하게 재현해 놓은 초대형 메가 쇼핑몰 겸 미식 천국.', keywords: ['shopping', 'foodie', 'insta'] },
    { name: '쩟페어 (JODD FAIRS) 야시장', lat: 13.7571, lng: 100.5654, desc: '랭쌥(태국식 감자탕)과 땡모반, 세련된 라이브 음악이 있는 가장 트렌디한 야시장.', keywords: ['foodie', 'local', 'nightlife'] },
    { name: '티츄카 (Tichuca) 루프탑 바', lat: 13.7235, lng: 100.5794, desc: '거대한 해파리 조명이 빛나는 방콕에서 가장 힙하고 미래지향적인 루프탑 바.', keywords: ['nightlife', 'insta', 'citypop'] },
    { name: '방콕 왕궁', lat: 13.7502, lng: 100.4912, desc: '금빛으로 번쩍이는 찬란한 태국 전통 건축의 정수와 정교한 에메랄드 불상을 만나는 문화 성지.', keywords: ['culture', 'local'] },
    { name: '짜뚜짝 주말 시장', lat: 13.7997, lng: 100.5505, desc: '만 개 이상의 상점이 모여 있는 태국 최대 규모의 주말 시장으로 온갖 기념품과 의류 쇼핑을 즐깁니다.', keywords: ['shopping', 'local', 'foodie'] }
  ],
  'TH-CNX': [ // 치앙마이
    { name: '왓 프라탓 도이수텝', lat: 18.8049, lng: 98.9215, desc: '산 정상에 세워져 치앙마이 전경이 내려다보이는 황금빛 불탑 사원으로 저녁 노을과 야경이 아름답습니다.', keywords: ['culture', 'nature', 'insta'] },
    { name: '치앙마이 올드타운 & 선데이 마켓', lat: 18.7883, lng: 98.9882, desc: '역사적인 성벽 안 고풍스러운 거리 전체가 주말마다 다채로운 수공예품 쇼핑 시장으로 변합니다.', keywords: ['shopping', 'culture', 'local'] },
    { name: '님만해민 카페거리', lat: 18.7997, lng: 98.9682, desc: '감각적인 인테리어의 카페와 레스토랑, 아기자기한 부티크 숍들이 가득한 힙한 골목.', keywords: ['foodie', 'insta', 'shopping'] },
    { name: '치앙마이 나이트 사파리', lat: 18.7425, lng: 98.9188, desc: '트램을 타고 밤에 활동하는 야생 동물들을 생생하게 관찰하는 이색 자연 액티비티.', keywords: ['activity', 'nature', 'nightlife'] },
    { name: '도이인타논 국립공원', lat: 18.5912, lng: 98.4872, desc: '태국에서 가장 높은 산으로 구름 위를 걷는 듯한 트래킹과 아름다운 폭포, 평화로운 대자연.', keywords: ['nature', 'healing', 'activity'] },
    { name: '원님만', lat: 18.8005, lng: 98.9682, desc: '유럽풍 벽돌 건물 단지에 트렌디한 로컬 브랜드, 푸드코트, 플리마켓이 열리는 복합 예술 쇼핑 광장.', keywords: ['shopping', 'insta', 'foodie', 'local'] },
    { name: '코코넛 마켓', lat: 18.8388, lng: 99.0156, desc: '코코넛 야자수 숲속 수로 위에 조성된 시장으로 자연 친화적인 감성과 맛있는 코코넛 간식들을 즐길 수 있습니다.', keywords: ['local', 'foodie', 'insta', 'nature'] },
    { name: '왓 체디 루앙', lat: 18.7870, lng: 98.9866, desc: '치앙마이 올드타운 중심에 위치한 거대하고 웅장한 반파된 고대 불탑 사원으로 신비로운 아우라를 풍깁니다.', keywords: ['culture', 'local'] }
  ],
  'TH-HKT': [ // 푸껫
    { name: '빠통 비치 & 방라 로드', lat: 7.8938, lng: 98.2982, desc: '해변에서의 신나는 워터 스포츠와 밤이 되면 화려한 음악과 클럽 조명이 가득한 방라 로드.', keywords: ['nightlife', 'activity', 'local'] },
    { name: '피피 섬 해양 투어', lat: 7.7412, lng: 98.7782, desc: '기암절벽과 에메랄드 만으로 둘러싸인 천혜의 해변에서 스노클링과 휴식을 취하는 자연 투어.', keywords: ['nature', 'activity', 'healing', 'insta'] },
    { name: '푸껫 올드타운', lat: 7.8845, lng: 98.3902, desc: '중국과 포르투갈 양식이 조화를 이룬 파스텔톤의 아름다운 거리와 독특한 카페 및 기념품 쇼핑.', keywords: ['culture', 'insta', 'shopping'] },
    { name: '프롬텝 곶', lat: 7.7625, lng: 98.3055, desc: '푸껫 가장 남단에 있는 절벽 곶으로 안다만 해 너머로 넘어가는 일몰이 장엄합니다.', keywords: ['nature', 'healing', 'insta'] },
    { name: '센트럴 푸껫', lat: 7.8912, lng: 98.3688, desc: '현대적인 메가 쇼핑몰로 시원한 실내에서 세계 유수의 브랜드 쇼핑과 현지 푸드 코트를 이용합니다.', keywords: ['shopping', 'foodie'] },
    { name: '와트 찰롱', lat: 7.8465, lng: 98.3365, desc: '푸껫에서 가장 크고 화려한 사찰로 현지인들의 깊은 불교 신앙을 엿볼 수 있는 곳.', keywords: ['culture', 'healing'] },
    { name: '카론 뷰포인트', lat: 7.8208, lng: 98.3005, desc: '카타 노이, 카타, 카론 해변까지 3개의 해변이 반달 모양으로 펼쳐진 절경을 한눈에 감상할 수 있는 전망대.', keywords: ['nature', 'healing', 'insta'] },
    { name: '푸켓 빅부다', lat: 7.8277, lng: 98.3128, desc: '나카케드 산 정상에 우뚝 솟은 45m 높이의 거대 대리석 좌불상으로 푸껫 남부의 360도 오션뷰를 선사합니다.', keywords: ['culture', 'nature', 'insta', 'healing'] }
  ],
  'TH-PYX': [ // 파타야
    { name: '진리의 성전', lat: 12.9725, lng: 100.8892, desc: '바다 옆에 전면 목재 조각으로 지어진 거대한 사원으로, 정교한 신화 속 예술 세계를 엿볼 수 있습니다.', keywords: ['culture', 'insta', 'nature'] },
    { name: '꼬란 섬 (산호섬)', lat: 12.9238, lng: 100.7765, desc: '파타야 앞바다의 맑고 투명한 섬으로 모터보트를 타고 건너가 물놀이와 휴식을 취하기 좋습니다.', keywords: ['nature', 'activity', 'healing'] },
    { name: '파타야 플로팅 마켓', lat: 12.9002, lng: 100.9102, desc: '목조 다리와 보트를 타고 돌며 태국 특산물과 간식을 구경하는 수중 쇼핑 마켓.', keywords: ['culture', 'shopping', 'local'] },
    { name: '파타야 워킹 스트리트', lat: 12.9255, lng: 100.8712, desc: '파타야 최고의 유흥가로 네온사인과 라이브 음악 바, 트렌디한 길거리 버스킹이 넘칩니다.', keywords: ['nightlife', 'activity'] },
    { name: '눙눅 빌리지', lat: 12.7665, lng: 100.9333, desc: '아시아 최대 규모의 열대 식물원과 공룡 정원, 전통 민속 쇼를 관람할 수 있습니다.', keywords: ['nature', 'healing', 'insta'] },
    { name: '황금 절벽 사원 (카오 치 찬)', lat: 12.7645, lng: 100.9560, desc: '거대한 거친 절벽 단면에 황금선으로 새겨진 높이 130m의 웅장한 불상 조각상.', keywords: ['culture', 'nature', 'insta'] },
    { name: '파타야 뷰포인트', lat: 12.9221, lng: 100.8631, desc: '파타야 초승달 해변 만의 전체 스카이라인과 야경을 한눈에 내려다볼 수 있는 곳.', keywords: ['nature', 'insta', 'nightlife', 'healing'] },
    { name: '터미널 21 파타야', lat: 12.9497, lng: 100.8885, desc: '공항 터미널을 콘셉트로 층마다 세계 주요 도시를 형상화한 거대 쇼핑몰 겸 푸드 마켓.', keywords: ['shopping', 'foodie', 'insta'] }
  ],

  // === 미국 (US) ===
  'US-NYC': [
    { name: '타임스 스퀘어', lat: 40.7580, lng: -73.9855, desc: '세계의 교차로. 압도적인 네온사인과 전광판이 뿜어내는 에너지를 느껴보세요.', keywords: ['citypop', 'insta', 'nightlife'] },
    { name: '센트럴 파크', lat: 40.7812, lng: -73.9665, desc: '마천루 숲 속의 거대한 오아시스. 베이글과 커피를 들고 뉴요커처럼 여유로운 피크닉을 즐기세요.', keywords: ['nature', 'healing', 'foodie'] },
    { name: '탑 오브 더 락 (록펠러 센터)', lat: 40.7587, lng: -73.9787, desc: '엠파이어 스테이트 빌딩과 센트럴 파크가 한눈에 들어오는 뉴욕 최고의 전망대.', keywords: ['insta', 'nightlife'] },
    { name: '첼시 마켓 & 하이라인 파크', lat: 40.7420, lng: -74.0048, desc: '과자 공장을 개조한 미식 마켓에서 랍스터를 먹고, 버려진 철도를 개조한 공원을 산책하세요.', keywords: ['foodie', 'healing', 'culture'] },
    { name: '브루클린 브릿지 & 덤보', lat: 40.7061, lng: -73.9969, desc: '영화 포스터 같은 완벽한 스카이라인 뷰와 힙한 브루클린의 빈티지한 골목들.', keywords: ['insta', 'culture', 'local'] },
    { name: '5번가 & 소호 쇼핑 디스트릭트', lat: 40.7248, lng: -73.9982, desc: '명품 스토어부터 소호의 힙한 빈티지 편집숍까지 모인 뉴욕의 심장부 쇼핑 코스.', keywords: ['shopping', 'insta'] },
    { name: '브로드웨이 극장가', lat: 40.7590, lng: -73.9844, desc: '세계 최정상급 뮤지컬 공연들이 상연되는 극장가로 화려한 문화를 생생히 느껴봅니다.', keywords: ['culture', 'nightlife', 'activity'] }
  ],
  'US-LAX': [
    { name: '할리우드 명예의 거리', lat: 34.1016, lng: -118.3267, desc: '수많은 스타들의 이름이 새겨진 별들과 차이니즈 극장이 있는 영화의 중심지.', keywords: ['culture', 'insta'] },
    { name: '산타모니카 해변 & 피어', lat: 34.0092, lng: -118.4971, desc: '루트 66의 끝자락. 관람차와 롤러코스터가 있는 로맨틱한 해변 놀이공원과 일몰.', keywords: ['nature', 'healing', 'activity', 'insta'] },
    { name: '그리피스 천문대', lat: 34.1184, lng: -118.3004, desc: '영화 [라라랜드]의 배경! 로스앤젤레스 전체가 별빛처럼 빛나는 황홀한 야경 명소.', keywords: ['nightlife', 'insta', 'culture'] },
    { name: '비벌리 힐스 로데오 드라이브', lat: 34.0674, lng: -118.4011, desc: '최고급 럭셔리 브랜드들이 늘어선 세계에서 가장 우아하고 화려한 쇼핑 거리.', keywords: ['shopping', 'insta'] },
    { name: '베니스 비치 & 스케이트 파크', lat: 33.9850, lng: -118.4695, desc: '자유분방한 스케이터들과 힙합 스트릿 그래피티, 시원한 바다가 어우러진 로컬 액티비티 핫플.', keywords: ['activity', 'local', 'nature'] },
    { name: '유니버설 스튜디오 할리우드', lat: 34.1381, lng: -118.3533, desc: '실제 영화 촬영 스튜디오 세트장 투어와 테마파크 어트랙션을 함께 즐길 수 있는 최고의 체험.', keywords: ['activity', 'insta'] },
    { name: '게티 센터', lat: 34.0772, lng: -118.4741, desc: '산 정상에 자리한 백색 건축물 단지로 고흐의 작품들과 정원, LA 시내 전망이 환상적입니다.', keywords: ['culture', 'nature', 'healing', 'insta'] },
    { name: '레이크 할리우드 파크', lat: 34.1265, lng: -118.3265, desc: '할리우드 사인(Hollywood Sign)을 가장 가깝고 평화롭게 볼 수 있는 잔디밭 공원.', keywords: ['insta', 'nature', 'healing'] }
  ],
  'US-HNL': [ // 하와이 호놀룰루
    { name: '와이키키 해변', lat: 21.2765, lng: -157.8265, desc: '에메랄드빛 태평양 파도를 보며 일광욕과 서핑 힐링을 즐기는 하와이의 대표 해안.', keywords: ['nature', 'healing', 'activity'] },
    { name: '다이아몬드 헤드 분화구 트래킹', lat: 21.2622, lng: -157.8055, desc: '와이키키 전경이 한눈에 내려다보이는 분화구 등산로로 오르는 아침 액티비티 코스.', keywords: ['nature', 'activity'] },
    { name: '알라모아나 센터', lat: 21.2915, lng: -157.8435, desc: '하와이 최대 규모의 오픈 에어 쇼핑몰로 야자수 아래 명품 브랜드 쇼핑을 즐깁니다.', keywords: ['shopping', 'foodie'] },
    { name: '하나우마 베이 스노클링', lat: 21.2725, lng: -157.6945, desc: '천연 산호초와 수많은 열대어, 바다거북을 눈앞에서 마주하는 하와이 최고의 스노클링 명소.', keywords: ['nature', 'activity', 'healing'] },
    { name: '폴리네시안 문화센터', lat: 21.6397, lng: -157.9238, desc: '하와이, 사모아, 타히티 등 태평양 섬나라들의 민속촌과 화려한 대형 이브닝 쇼.', keywords: ['culture', 'activity'] },
    { name: '진주만 국립 기념관', lat: 21.3682, lng: -157.9392, desc: '제2차 세계대전의 도화선이 된 역사적 진주만 공습의 현장과 애리조나 함 기념관을 투어합니다.', keywords: ['culture', 'local'] },
    { name: '쿠알로아 랜치', lat: 21.5208, lng: -157.8372, desc: '영화 [쥬라기 공원] 촬영지로 유명하며, 웅장한 녹색 산맥 속에서 ATV, 승마 등 짜릿한 아웃도어 투어를 즐깁니다.', keywords: ['activity', 'nature', 'insta'] },
    { name: '누우아누 팔리 전망대', lat: 21.3672, lng: -157.7932, desc: '거센 바람이 부는 절벽 위 전망대로, 호놀룰루 동부 해안과 웅장한 산맥 절경이 한눈에 들어오는 힐링지.', keywords: ['nature', 'healing'] }
  ],
  'US-LAS': [ // 라스베이거스
    { name: '벨라지오 분수 & 라스베가스 스트립', lat: 36.1125, lng: -115.1728, desc: '음악에 맞춰 춤추는 분수와 스트립 도로 주변 세계 각국 테마를 형상화한 거대 리조트들.', keywords: ['insta', 'nightlife', 'shopping'] },
    { name: '프리몬트 스트리트 익스피리언스', lat: 36.1697, lng: -115.1435, desc: '엄청난 길이의 천장 LED 스크린 쇼 아래 짚라인을 타고 비행하는 액티비티와 라이브 버스킹.', keywords: ['nightlife', 'activity', 'local'] },
    { name: '그랜드 캐년 헬기 / 버스 투어', lat: 36.0544, lng: -112.1398, desc: '(라스베이거스 출발) 지구가 깎아낸 수억 년의 경이로운 협곡 대자연을 눈앞에서 마주합니다.', keywords: ['nature', 'activity', 'healing'] },
    { name: '태양의 서커스', lat: 36.1122, lng: -115.1767, desc: '수중 아크로바틱 무대 위에서 펼쳐지는 인간 신체 예술의 극한을 보여주는 대표 문화 공연.', keywords: ['culture', 'activity', 'nightlife'] },
    { name: '라스베가스 노스 프리미엄 아울렛', lat: 36.1625, lng: -115.1585, desc: '야외형 거대 할인매장 단지로 전 세계 유명 브랜드 의류를 저렴한 가격에 득템할 수 있습니다.', keywords: ['shopping'] },
    { name: '세븐 매직 마운틴스', lat: 35.8383, lng: -115.2715, desc: '라스베이거스 근교 사막 한가운데 우뚝 솟은 형형색색의 거대한 돌탑 예술 설치 미술품.', keywords: ['insta', 'nature'] },
    { name: '더 하이 롤러 대관람차', lat: 36.1174, lng: -115.1681, desc: '세계 최고 높이 수준의 초대형 대관람차로, 탑승하여 붉은색 라스베이거스 스트립 야경을 공중에서 감상합니다.', keywords: ['activity', 'nightlife', 'insta'] },
    { name: '라스베이거스 웰컴 사인', lat: 36.0820, lng: -115.1728, desc: '스트립 남쪽에 위치한 역사적인 "Welcome to Fabulous Las Vegas" 사인보드로 여행 기념 인증샷의 필수 코스.', keywords: ['insta', 'local'] }
  ],

  // === 프랑스 (FR) ===
  'FR-PAR': [
    { name: '에펠탑 & 마르스 광장', lat: 48.8584, lng: 2.2945, desc: '파리의 영원한 상징. 잔디밭에 앉아 와인과 크루아상을 즐기거나 밤마다 반짝이는 조명쇼를 감상하세요.', keywords: ['insta', 'healing', 'nightlife', 'foodie'] },
    { name: '루브르 박물관', lat: 48.8606, lng: 2.3376, desc: '모나리자가 숨쉬는 세계 최대의 미술관. 유리 피라미드 앞에서의 인증샷은 필수입니다.', keywords: ['culture', 'insta'] },
    { name: '몽마르트르 언덕 & 사크레쾨르', lat: 48.8867, lng: 2.3431, desc: '수많은 화가들이 사랑한 감성적인 골목과 파리 시내가 한눈에 내려다보이는 뷰포인트.', keywords: ['culture', 'healing', 'local'] },
    { name: '샹젤리제 거리 & 개선문', lat: 48.8738, lng: 2.2950, desc: '럭셔리한 부티크와 노천 카페가 늘어선 세상에서 가장 아름다운 거리.', keywords: ['shopping', 'citypop'] },
    { name: '센 강변 바토무슈 (유람선)', lat: 48.8643, lng: 2.3005, desc: '해 질 녘 유람선을 타고 노트르담 대성당 등 파리의 로맨틱한 풍경을 물 위에서 즐겨보세요.', keywords: ['activity', 'nightlife', 'healing'] },
    { name: '베르사유 궁전 & 정원', lat: 48.8048, lng: 2.1203, desc: '화려함의 극치인 거울의 방과 끝없이 펼쳐진 화려한 왕실 정원을 걷는 문화 대자연 코스.', keywords: ['culture', 'nature', 'insta'] },
    { name: '갤러리 라파예트 백화점', lat: 48.8733, lng: 2.3292, desc: '아름다운 아르누보 돔 천장 아래 최고의 파리 쇼핑과 루프탑 파노라마 뷰를 즐길 수 있습니다.', keywords: ['shopping', 'insta', 'culture'] }
  ],
  'FR-NCE': [ // 니스
    { name: '영국인 산책로', lat: 43.6938, lng: 7.2512, desc: '푸른 지중해 바다와 야자수가 어우러진 해안 산책로를 걸으며 느끼는 남프랑스 힐링의 끝판왕.', keywords: ['nature', 'healing', 'insta'] },
    { name: '살레야 광장 꽃시장', lat: 43.6961, lng: 7.2755, desc: '지중해 꽃과 과일, 수제 비누와 치즈 등 활기찬 로컬 시장 미식을 경험할 수 있습니다.', keywords: ['local', 'shopping', 'foodie'] },
    { name: '캐널 힐', lat: 43.6952, lng: 7.2805, desc: '계단을 따라 오르면 니스의 붉은 지붕들과 천사만의 오렌지색 해변 절경이 그림처럼 펼쳐집니다.', keywords: ['nature', 'healing', 'culture'] },
    { name: '니스 구시가지', lat: 43.6975, lng: 7.2785, desc: '이탈리아 풍의 낡고 좁은 골목길 속에 숨겨진 젤라토 맛집과 소품숍, 고풍스러운 광장들.', keywords: ['culture', 'local', 'shopping'] },
    { name: '마티스 미술관', lat: 43.7192, lng: 7.2762, desc: '니스를 지독히 사랑한 거장 앙리 마티스의 생애와 화려한 색채의 작품들을 전시한 올리브 숲 속 미술관.', keywords: ['culture', 'healing'] },
    { name: '에즈 빌리지', lat: 43.7278, lng: 7.3615, desc: '해발 427m 절벽 위에 요새처럼 지어진 중세 마을로, 좁은 돌길을 따라 오르면 지중해 파노라마 절경이 열립니다.', keywords: ['nature', 'culture', 'insta', 'healing'] },
    { name: '샤갈 미술관', lat: 43.7095, lng: 7.2699, desc: '마르크 샤갈이 성경을 주제로 그린 대작들과 독창적인 스테인드글라스 빛을 감상할 수 있는 미술관.', keywords: ['culture', 'healing'] },
    { name: '빌프랑슈쉬르메르 해변', lat: 43.7042, lng: 7.3115, desc: '파스텔톤 집들이 늘어선 평화롭고 고요한 만으로, 니스보다 조용하게 수영과 휴식을 취하기 좋습니다.', keywords: ['nature', 'healing', 'insta'] }
  ],

  // === 이탈리아 (IT) ===
  'IT-ROM': [
    { name: '콜로세움', lat: 41.8902, lng: 12.4922, desc: '고대 로마 제국의 거대하고 웅장한 원형 투기장. 수천 년의 역사를 직접 마주해보세요.', keywords: ['culture', 'insta'] },
    { name: '트레비 분수', lat: 41.9009, lng: 12.4833, desc: '동전을 던지며 소원을 비는 로맨틱한 분수. 주변의 젤라또 맛집 탐방도 놓치지 마세요.', keywords: ['insta', 'foodie'] },
    { name: '바티칸 시국', lat: 41.9029, lng: 12.4534, desc: '성 베드로 대성당과 미켈란젤로의 걸작을 감상할 수 있는 세계에서 가장 작은 나라.', keywords: ['culture'] },
    { name: '판테온 & 나보나 광장', lat: 41.8986, lng: 12.4769, desc: '완벽한 비율의 고대 신전과 예술가들이 모여드는 노천 카페와 식당이 가득한 광장.', keywords: ['culture', 'healing', 'foodie'] },
    { name: '스페인 계단 & 콘도티 거리', lat: 41.9059, lng: 12.4827, desc: '영화 [로마의 휴일]에 등장한 계단과 로마 최고의 명품 숍 부티크들이 늘어선 번화가.', keywords: ['shopping', 'insta', 'culture'] },
    { name: '보르게세 미술관 & 정원', lat: 41.9131, lng: 12.4920, desc: '푸르른 숲 속 정원과 천재 작가 베르니니의 조각품을 여유롭게 감상할 수 있는 힐링 문화 지대.', keywords: ['nature', 'healing'] },
    { name: '포로 로마노', lat: 41.8925, lng: 12.4853, desc: '고대 로마의 정치, 종교, 상업의 중심지였던 역사적인 신전과 공공 전각들의 거대한 유적지 터.', keywords: ['culture', 'local'] },
    { name: '천사의 성 (카스텔 산탄젤로)', lat: 41.9031, lng: 12.4663, desc: '테베레 강변에 웅장하게 우뚝 선 원형 성채로, 다리 위의 천사 조각상들과 성 꼭대기에서 바라보는 노을이 로맨틱합니다.', keywords: ['culture', 'insta', 'nightlife'] }
  ],
  'IT-FLR': [ // 피렌체
    { name: '피렌체 대성당', lat: 43.7731, lng: 11.2562, desc: '붉은색 거대 돔이 인상적인 르네상스 건축의 최고봉으로 웅장한 피렌체의 얼굴입니다.', keywords: ['culture', 'insta'] },
    { name: '미켈란젤로 광장', lat: 43.7631, lng: 11.2645, desc: '언덕에 올라 피렌체 시내를 가로지르는 아르노 강과 두오모의 노을 야경을 감상하는 최고 명소.', keywords: ['insta', 'nightlife', 'healing'] },
    { name: '우피치 미술관', lat: 43.7686, lng: 11.2555, desc: '보티첼리의 [비너스의 탄생] 등 이탈리아 르네상스 명작들이 한데 모인 미술관.', keywords: ['culture'] },
    { name: '베키오 다리', lat: 43.7681, lng: 11.2531, desc: '다리 위에 귀금속 상점들이 빼곡히 들어선 피렌체에서 가장 오래된 다리로 낭만적인 사진 촬영지.', keywords: ['culture', 'shopping', 'insta'] },
    { name: '산 로렌초 가죽시장', lat: 43.7754, lng: 11.2545, desc: '이탈리아 정통 가죽 제품 가방과 벨트를 흥정하여 저렴하게 쇼핑하고 곱창 버거 등 먹방을 즐깁니다.', keywords: ['shopping', 'local', 'foodie'] },
    { name: '시뇨리아 광장 & 베키오 궁전', lat: 43.7698, lng: 11.2558, desc: '피렌체의 역사적인 정치적 중심지 광장으로, 미켈란젤로의 다비드 모조상 등 웅장한 야외 조각 미술관 같습니다.', keywords: ['culture', 'local', 'insta'] },
    { name: '피티 궁전 & 보볼리 정원', lat: 43.7651, lng: 11.2505, desc: '르네상스식 메디치 가문의 대궁전이자 조각상과 연못이 늘어선 조화롭고 거대한 귀족 정원.', keywords: ['nature', 'healing', 'culture'] },
    { name: '중앙시장 (Mercato Centrale)', lat: 43.7766, lng: 11.2536, desc: '1층의 현지 농산물 전통 매장들과 2층의 현대적이고 활기찬 이탈리안 미식 푸드코트가 공존하는 식도락 명소.', keywords: ['foodie', 'local', 'shopping'] }
  ],
  'IT-VCE': [ // 베네치아
    { name: '산 마르코 광장 & 대성당', lat: 45.4344, lng: 12.3395, desc: '나폴레옹이 "유럽 최고의 응접실"이라 칭한 광장으로 비잔틴 양식의 성당이 돋보입니다.', keywords: ['culture', 'insta'] },
    { name: '리알토 다리', lat: 45.4381, lng: 12.3358, desc: '운하 위를 가로지르는 하얀 석조 아치교로 다리 위 양옆으로 다양한 보석 및 특산품 쇼핑 숍.', keywords: ['culture', 'shopping', 'local'] },
    { name: '부라노 섬', lat: 45.4854, lng: 12.4182, desc: '알록달록 파스텔 톤으로 채색된 예쁜 집들이 가득해 찍는 곳마다 화보가 되는 인생샷 섬.', keywords: ['insta', 'healing', 'nature'] },
    { name: '베네치아 전통 곤돌라 투어', lat: 45.4362, lng: 12.3344, desc: '사공이 노래하는 배를 타고 미로 같은 수로 구석구석을 탐험하며 역사적인 궁전들을 감상합니다.', keywords: ['activity', 'culture', 'healing'] },
    { name: '베네치아 카니발 & 아페롤 바', lat: 45.4354, lng: 12.3375, desc: '전통 가면 축제의 발자취와 이탈리아 대표 식전 주 스프리츠를 현지 펍에서 즐겨보세요.', keywords: ['nightlife', 'local', 'foodie'] },
    { name: '탄식의 다리', lat: 45.4340, lng: 12.3409, desc: '두칼레 궁전과 감옥을 연결하는 다리로, 갇히기 전 죄수들이 한숨을 쉬었다는 낭만적이고 애절한 역사의 장소.', keywords: ['culture', 'insta'] },
    { name: '두칼레 궁전', lat: 45.4337, lng: 12.3404, desc: '고딕 양식의 정수를 보여주는 옛 베네치아 공화국 총독의 관저이자 화려한 중세 행정의 중심 궁전.', keywords: ['culture', 'insta'] },
    { name: '무라노 섬', lat: 45.4578, lng: 12.3555, desc: '수백 년 전통의 유리 공예의 성지로, 장인들의 작업 모습을 관람하고 정교한 유리 장식품을 쇼핑할 수 있습니다.', keywords: ['culture', 'shopping', 'local'] }
  ],
  'IT-MIL': [ // 밀라노
    { name: '밀라노 대성당', lat: 45.4642, lng: 9.1900, desc: '수백 개의 뾰족한 첨탑과 조각상들로 덮여 있는 압도적인 규모의 고딕 양식 성당.', keywords: ['culture', 'insta'] },
    { name: '갤러리아 비토리오 에마누엘레 2세', lat: 45.4658, lng: 9.1895, desc: '화려한 유리 돔 천장의 프라다 본점 등이 입점한 세계에서 가장 우아하고 화려한 쇼핑 회랑.', keywords: ['shopping', 'culture', 'insta'] },
    { name: '산타 마리아 델레 그라지에 성당', lat: 45.4661, lng: 9.1708, desc: '레오나르도 다빈치의 세기의 걸작인 [최후의 만찬] 벽화가 모셔져 있는 문화 유적지.', keywords: ['culture'] },
    { name: '나빌리 지구 운하 산책로', lat: 45.4497, lng: 9.1725, desc: '운하를 따라 개성 있는 빈티지 숍, 멋진 야외 이탈리안 이자카야와 펍이 즐비한 나이트 핫플.', keywords: ['nightlife', 'foodie', 'local'] },
    { name: '몬테나폴레오네 쇼핑 거리', lat: 45.4687, lng: 9.1945, desc: '세계 패션의 메카 밀라노를 대변하는 하이엔드 브랜드들의 럭셔리 쇼핑 패션 지구.', keywords: ['shopping'] },
    { name: '스포르체스코 성', lat: 45.4705, lng: 9.1793, desc: '밀라노의 유서 깊은 거대 붉은 벽돌 요새 성채로 뒤편에 평화로운 셈피오네 공원과 연결되어 산책하기 좋습니다.', keywords: ['culture', 'nature', 'healing'] },
    { name: '셈피오네 공원 & 평화의 문', lat: 45.4745, lng: 9.1745, desc: '밀라노 한복판의 고요한 공원으로 호수 주변을 걷다가 웅장한 나폴레옹 평화의 문 아치를 조망할 수 있는 힐링 스팟.', keywords: ['nature', 'healing', 'insta'] },
    { name: '브레라 미술관 & 브레라 지구', lat: 45.4720, lng: 9.1878, desc: '이탈리아 회화의 명작들이 가득한 박물관과 아기자기한 예술 상점, 분위기 있는 노천 테라스 카페 골목.', keywords: ['culture', 'insta', 'shopping', 'local'] }
  ]
};

// 범용 스팟 생성기 (미리 정의되지 않은 지역에 대한 fallback, 테마 매칭 강화)
export const getGenericSpots = (regionName: string, baseLat: number, baseLng: number): SpotData[] => {
  const genericSpots: SpotData[] = [];
  
  const templates = [
    { name: '미슐랭 가이드 파인다이닝', desc: '전 세계 미식가들이 모이는 곳. 정통 요리부터 퓨전 다이닝까지 미식의 향연이 펼쳐집니다.', keywords: ['foodie', 'insta'] },
    { name: '전통 로컬 스트리트 푸드 마켓', desc: '현지인들의 삶을 엿볼 수 있는 시장. 다양한 길거리 음식과 현지 식재료를 맛보세요.', keywords: ['foodie', 'local', 'shopping'] },
    { name: '핫플레이스 디저트 카페 거리', desc: '최고급 원두 커피와 감각적인 인테리어, 달콤한 디저트를 자랑하는 카페 골목.', keywords: ['foodie', 'insta', 'healing'] },
    { name: '로컬 해산물 바베큐 스팟', desc: '신선한 재료를 불향 가득 구워내는 현지인 찐맛집. 시원한 생맥주는 필수입니다.', keywords: ['foodie', 'local', 'nightlife'] },
    { name: '전통 요리 원조 노포 식당', desc: '수십 년의 역사를 간직한 찐 로컬 맛집. 현지 특유의 깊은 맛을 느껴보세요.', keywords: ['foodie', 'local'] },
    
    { name: '야경 명소 럭셔리 루프탑 바', desc: '도심의 야경을 감상하며 시그니처 칵테일과 함께 로맨틱한 밤을 즐기세요.', keywords: ['nightlife', 'insta'] },
    { name: '라이브 재즈 라운지 바', desc: '수준 높은 라이브 음악이 연주되는 감성적인 바에서 와인을 즐겨보세요.', keywords: ['nightlife', 'culture', 'citypop'] },
    { name: '네온사인 클럽 거리', desc: '젊음의 열기가 가득한 곳. 최신 트렌드의 음악과 함께 춤을 즐길 수 있습니다.', keywords: ['nightlife', 'activity'] },
    
    { name: '리버사이드 피크닉 공원', desc: '물가를 따라 조성된 평화로운 공원. 가벼운 피크닉이나 자전거 산책 코스로 완벽합니다.', keywords: ['nature', 'healing'] },
    { name: '히든 네이처 힐링 트레일', desc: '맑은 공기를 마시며 대자연 속에서 트레킹을 즐기며 몸과 마음을 정화하세요.', keywords: ['nature', 'healing', 'activity'] },
    { name: '파노라마 오션뷰 비치', desc: '황홀한 에메랄드빛 바다와 부드러운 모래사장. 해변에 누워 완벽한 휴식을 취하세요.', keywords: ['nature', 'healing', 'insta'] },
    
    { name: '올드타운 역사 지구', desc: '이 도시의 역사적인 중심지입니다. 고풍스러운 건축물을 둘러보며 여유를 즐겨보세요.', keywords: ['culture', 'healing', 'local'] },
    { name: '국립 현대 아트 뮤지엄', desc: '독특하고 현대적인 예술 작품들이 전시된 거대한 문화 공간.', keywords: ['culture', 'insta'] },
    { name: '인디 예술가 골목', desc: '지역 신진 작가들의 독창적인 예술 작품과 소품을 구매할 수 있는 예술 거리.', keywords: ['culture', 'shopping', 'local'] },
    
    { name: '스카이 파노라마 전망대', desc: '도심을 한눈에 내려다볼 수 있는 아찔한 높이의 뷰포인트. 일몰 시간대 방문을 추천합니다.', keywords: ['insta', 'healing'] },
    { name: '하이엔드 쇼핑 부티크 스트리트', desc: '글로벌 럭셔리 브랜드와 트렌디한 편집샵이 밀집해 있는 쇼핑 명소.', keywords: ['shopping', 'insta'] },
    { name: '복합 어뮤즈먼트 테마파크', desc: '어른과 아이 모두 짜릿하게 즐길 수 있는 대규모 놀이시설과 엔터테인먼트 파크.', keywords: ['activity', 'insta'] },
    { name: '레트로 LP바 & 시티팝 거리', desc: '아날로그 감성이 물씬 풍기는 구제 옷가게와 LP바들이 모여있는 감성 스팟.', keywords: ['citypop', 'shopping', 'insta'] }
  ];

  for (let i = 0; i < 300; i++) {
    const template = templates[i % templates.length];
    
    const latOffset = (Math.random() - 0.5) * 0.15;
    const lngOffset = (Math.random() - 0.5) * 0.15;
    
    genericSpots.push({
      name: `${regionName} ${template.name} ${Math.floor(i/templates.length) > 0 ? (Math.floor(i/templates.length) + 1) : ''}`.trim(),
      lat: baseLat + latOffset,
      lng: baseLng + lngOffset,
      desc: template.desc,
      keywords: template.keywords
    });
  }
  
  return genericSpots;
};
