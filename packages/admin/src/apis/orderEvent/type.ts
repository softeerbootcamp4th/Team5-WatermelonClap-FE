export interface IAdminPostOrderEvent {
  reward: { name: string };
  winnerCount: number;
  startDate: string;
  endDate: string;
  quiz: { answer: string };
}
export interface IAdminPostOrderEventRequest {
  orderEvent: IAdminPostOrderEvent;
  rewardImage: File;
  quizImage: File;
}
