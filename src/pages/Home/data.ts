//홈화면의 리스트에 출력될
//여러 데이터를 만들기 위해 타입을 선언

type TradeItem = {
  id: string;
  imageUrl: string;
  title: string;
  location: string;
  createdAt: Date;
  updatedAt?: Date;
  price: number;
  chat?: number;
  interest?: number;
};

export const tradeItems: TradeItem[] = [
  {
    id: "1",
    imageUrl:
      "https://w.namu.la/s/9029a4a5a86c93f71db711af4e0971506f8b3e1af25f94af24f9ff0f9a00da9afaa094621c3ee467ece96398fb324690c8eb9b79254511ea402e5d1f7ebd45a4f9fc7a5642923bdeaefa6ec4595ad8fb07bb1fb6c06d8cd3987d56984965334f",
    title: "마라탕",
    location: "인천 미추홀구 주안동",
    createdAt: new Date(),
    updatedAt: new Date(),
    price: 15000,
    chat: 1,
    interest: 3,
  },
  {
    id: "2",
    imageUrl:
      "https://image.msscdn.net/images/goods_img/20210407/1884164/1884164_2_500.jpg",
    title: "스파오 잠옷",
    location: "인천 남동구 구월동",
    createdAt: new Date(),
    updatedAt: new Date(),
    price: 12000,
    chat: 6,
    interest: 3,
  },
  {
    id: "3",
    imageUrl:
      "https://www.google.com/url?sa=i&url=http%3A%2F%2Fm.11st.co.kr%2Fproducts%2Fm%2F893148907&psig=AOvVaw3L4wBqNkB2TArjuoWUXvsh&ust=1641991765239000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLiaoJHeqfUCFQAAAAAdAAAAABAD",
    title: "귀여운 곰인형",
    location: "인천 남동구 만수동",
    createdAt: new Date(),
    updatedAt: new Date(),
    price: 6000,
    chat: 3,
    interest: 12,
  },
  {
    id: "4",
    imageUrl: "http://image.auction.co.kr/itemimage/1c/e5/ca/1ce5cacd86.jpg",
    title: "토끼인형",
    location: "인천 미추홀구 도화동",
    createdAt: new Date(),
    updatedAt: new Date(),
    price: 18000,
    chat: 16,
    interest: 0,
  },
  {
    id: "5",
    imageUrl:
      " https://contents.sixshop.com/thumbnails/uploadedFiles/131878/product/image_1600086359625_750.jpg",
    title: "뚱냥이 인형",
    location: "인천 미추홀구 도화동",
    createdAt: new Date(),
    updatedAt: new Date(),
    price: 18000,
    chat: 0,
    interest: 3,
  },
  {
    id: "6",
    imageUrl:
      "http://img1.tmon.kr/cdn3/deals/2020/04/23/3450640086/front_0335a_1szcm.jpg",
    title: "탁상용 미니선풍기",
    location: "인천 남동구 관교동",
    createdAt: new Date(),
    updatedAt: new Date(),
    price: 18000,
    chat: 1,
    interest: 3,
  },
];
