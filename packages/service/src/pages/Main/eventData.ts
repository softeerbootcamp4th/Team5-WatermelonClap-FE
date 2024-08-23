export interface IEventData {
  id: number;
  eventType: string;
  title: string;
  subTitle: string;
  img: string;
  desc: string;
}

export const eventData: IEventData[] = [
  {
    id: 1,
    eventType: "추첨 이벤트",
    title: "내 아반떼 N 뽑기",
    subTitle: `나만의 아반떼 N을 뽑고 응모하면
   아반떼 N을 0원에 준다?`,
    img: "images/main/event-card-1.webp",
    desc: `새로 무장해서 돌아온 아반떼 N,
온라인 상에서만 만날 수 있는 
특별한 디자인과 스펙을 확인해보세요!`,
  },
  {
    id: 2,
    eventType: "선착순 이벤트",
    title: "N 퀴즈",
    subTitle: `매일매일 선착순 200명에게
선물을 드립니다!`,
    img: "images/main/event-card-2.webp",
    desc: `아반떼 N이 뭐야? N 시리즈가 뭐야?
항상 궁금해하셨던 여러분을 위해 준비한,
5일간의 선착순 퀴즈 이벤트!`,
  },
];
