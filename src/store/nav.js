export const NAV_LIST = [
  {
    title: "공지 - Notice",
    addr: "/admin/notice",
  },
  {
    title: "기술소개 - 인증서",
    addr: "/admin/certificate",
  },
  {
    title: "기술소개 - 검사설비",
    addr: "/admin/inspect",
  },
  {
    title: "제품",
    addr: "/admin/product/circular",
  },
  {
    title: "문의 - Inquiry",
    addr: "/admin/inquiry",
  },
  {
    title: "게시판 - Board",
    addr: "/admin/board",
  },
];

export const NAV_SUB_LIST = [
  {
    contents: [
      {
        title: "공지 리스트",
        addr: "/admin/notice",
      },
      {
        title: "현재 등록 공지",
        addr: "/admin/notice/register",
      },
    ],
  },
  {
    contents: [
      {
        title: "korea",
        addr: "/admin/certificate",
      },
      {
        title: "english",
        addr: "/admin/certificate/eng",
      },
    ],
  },
  {
    contents: [
      {
        title: "korea",
        addr: "/admin/inspect",
      },
      {
        title: "english",
        addr: "/admin/inspect/eng",
      },
    ],
  },
  {
    contents: [
      {
        title: "korea",
        addr: "/admin/product/0",
      },
      {
        title: "english",
        addr: "/admin/product/0/eng",
      },
    ],
  },
];

export const PRODUCT_NAV_LIST = [
  {
    id: "A",
    engName: "circularlock",
    eng: "circular",
    korName: "원형 록",
    number: 0,
  },
  {
    id: "B",
    engName: "dimplelock",
    eng: "dimple",
    korName: "딤플 록",
    number: 1,
  },
  {
    id: "C",
    engName: "disclock",
    eng: "disc",
    korName: "디스크 록",
    number: 2,
  },
  {
    id: "D",
    engName: "switchlock",
    eng: "switch",
    korName: "스위치 록",
    number: 3,
  },
  {
    id: "E",
    engName: "camlock",
    eng: "cam",
    korName: "캠 록",
    number: 4,
  },
  {
    id: "F",
    engName: "saunalock",
    eng: "sauna",
    korName: "사우나 록",
    number: 5,
  },
  {
    id: "G",
    engName: "steellock",
    eng: "steel",
    korName: "철재 록",
    number: 6,
  },
  {
    id: "H",
    engName: "digitallock",
    eng: "digital",
    korName: "디지털 록",
    number: 7,
  },
  {
    id: "I",
    engName: "hinge",
    eng: "hinge",
    korName: "경첩",
    number: 8,
  },
  {
    id: "J",
    engName: "handle",
    eng: "handle",
    korName: "핸들",
    number: 9,
  },
  {
    id: "K",
    engName: "special",
    eng: "special",
    korName: "스페셜",
    number: 10,
  },
  {
    id: "L",
    engName: "etclock",
    eng: "etc",
    korName: "기타",
    number: 11,
  },
  {
    id: "M",
    engName: "customlock",
    eng: "custom",
    korName: "주문제작",
    number: 12,
  },
  {
    id: "N",
    engName: "npartlock",
    eng: "n-part",
    korName: "개발",
    number: 13,
  },
];

export const INQUIRY_LIST = [
  {
    id: 0,
    created_date: "2023.03.16",
    company: "현진 하드웨어",
    name: "김진우",
    email: "rlawlsdn316@gmail.com",
    phone: "010-5321-8681",
    content: "안녕하세요 헤헤",
  },
  {
    id: 1,
    created_date: "2023.03.16",
    company: "샘숭",
    name: "김진우",
    email: "rlawlsdn316@gmail.com",
    phone: "010-5321-8681",
    content:
      "안녕하세요 헤헤안녕하세요 헤헤안녕하세요 헤헤안녕하세요 헤헤안녕하세요 헤헤안녕하세요 헤헤",
  },
  {
    id: 2,
    created_date: "2023.03.16",
    name: "김진우",
    company: "롯데",
    email: "rlawlsdn316@gmail.com",
    phone: "010-5321-8681",
    content:
      "엘롯기엘롯기엘롯기엘롯기엘롯기엘롯기엘롯기엘롯기엘롯기엘롯기엘롯기",
  },
  {
    id: 3,
    created_date: "2023.03.16",
    name: "김진우",
    company: "신세계",
    email: "rlawlsdn316@gmail.com",
    phone: "010-5321-8681",
    content:
      "신세계신세계신세계신세계신세계신세계신세계신세계신세계신세계신세계신세계",
  },
  {
    id: 4,
    created_date: "2023.03.16",
    name: "김진우",
    company: "카카오",
    email: "rlawlsdn316@gmail.com",
    phone: "010-5321-8681",
    content:
      "카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오",
  },
  {
    id: 5,
    created_date: "2023.03.16",
    name: "김진우",
    company: "피파",
    email: "rlawlsdn316@gmail.com",
    phone: "010-5321-8681",
    content:
      "루드 굴리트루드 굴리트루드 굴리트루드 굴리트루드 굴리트루드 굴리트",
  },
];

export const DUMMY_BOARD = [
  {
    id: 1,
    name: "홍길동",
    title: "유튜브 촬영",
    content:
      "안녕하세요. 친구해요안녕하세요. 친구해요안녕하세요. 친구해요안녕하세요. 친구해요안녕하세요. 친구해요안녕하세요. 친구해요안녕하세요. 친구해요안녕하세요. 친구해요",
    created_date: "2023.03.08",
  },
  {
    id: 2,
    name: "홍길동",
    title: "유튜브 촬영",
    content:
      "안녕하세요. 친구해요안녕하세요. 친구해요안녕하세요. 친구해요안녕하세요. 친구해요안녕하세요. 친구해요안녕하세요. 친구해요안녕하세요. 친구해요안녕하세요. 친구해요",
    created_date: "2023.03.08",
  },
  {
    id: 3,
    name: "홍길동",
    title: "유튜브 촬영",
    content:
      "안녕하세요. 친구해요안녕하세요. 친구해요안녕하세요. 친구해요안녕하세요. 친구해요안녕하세요. 친구해요안녕하세요. 친구해요안녕하세요. 친구해요안녕하세요. 친구해요",
    created_date: "2023.03.08",
  },
  {
    id: 4,
    name: "홍길동",
    title: "유튜브 촬영",
    content:
      "안녕하세요. 친구해요안녕하세요. 친구해요안녕하세요. 친구해요안녕하세요. 친구해요안녕하세요. 친구해요안녕하세요. 친구해요안녕하세요. 친구해요안녕하세요. 친구해요",
    created_date: "2023.03.08",
  },
  {
    id: 5,
    name: "홍길동",
    title: "유튜브 촬영",
    content:
      "안녕하세요. 친구해요안녕하세요. 친구해요안녕하세요. 친구해요안녕하세요. 친구해요안녕하세요. 친구해요안녕하세요. 친구해요안녕하세요. 친구해요안녕하세요. 친구해요",
    created_date: "2023.03.08",
  },
];
