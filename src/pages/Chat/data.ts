//채팅 데이터 작성

type ChatType = {
  id: string;
  sender: string;
  message: string;
  sendedAt: Date;
};

export const messages: ChatType[] = [
  {
    id: "1",
    sender: "me",
    message: "혹시 물건 팔렸나요,,?",
    sendedAt: new Date(),
  },
  {
    id: "2",
    sender: "u",
    message: "아니요! 아직 안팔렸어요~~",
    sendedAt: new Date(),
  },
  {
    id: "3",
    sender: "me",
    message: "헉,,! 제가 사고 싶은데 ",
    sendedAt: new Date(),
  },
  {
    id: "4",
    sender: "me",
    message: "직거래로 가능할까요!?",
    sendedAt: new Date(),
  },
  {
    id: "5",
    sender: "u",
    message: "네넵! 가능합니다. 그 역 2번 출구 어떠세요?",
    sendedAt: new Date(),
  },
  {
    id: "6",
    sender: "me",
    message: "감사합니다! ㅎㅎ 그러면 한 17시까지 괜찮으세요?",
    sendedAt: new Date(),
  },
  {
    id: "7",
    sender: "u",
    message: "네네 그 쪽에서 기다리겠습니다!",
    sendedAt: new Date(),
  },
  {
    id: "8",
    sender: "me",
    message: "혹시 도착하셨나요?",
    sendedAt: new Date(),
  },
  {
    id: "9",
    sender: "me",
    message: "저 휠라 롱패딩 입고 서있는데,,",
    sendedAt: new Date(),
  },
  {
    id: "10",
    sender: "u",
    message: "앗! 넵 발견했습니다! 잠시만요!!",
    sendedAt: new Date(),
  },
];
