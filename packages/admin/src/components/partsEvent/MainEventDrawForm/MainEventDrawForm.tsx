import { RewardInfo } from "../RewardInfo";

export const MainEventDrawForm = () => {
  return (
    <>
      <RewardInfo rank={1} winnerCount={1} reward="아반떼 N" />
      <RewardInfo
        rank={2}
        winnerCount={2}
        reward="현대셀렉션 : 아반떼 N 3개월 구독권"
      />
      <RewardInfo
        rank={3}
        winnerCount={3}
        reward="현대셀렉션 : 아반떼 N 1개월 구독권"
      />
      <RewardInfo
        rank={4}
        winnerCount={50}
        reward="N컬렉션 : 현대 N 기어봉 우산"
      />
      <RewardInfo rank={5} winnerCount={100} reward="N컬렉션: 미니 손선풍기" />
    </>
  );
};
