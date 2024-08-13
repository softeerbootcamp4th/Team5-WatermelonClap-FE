export type EventStatusType = "UPCOMING" | "OPEN" | "CLOSED" | "END";
export type OrderEventResultType = "WRONG" | "CLOSED" | "SUCCESS";

export interface IReward {
  rewardId: string;
  imgSrc: string;
  name: string;
}

export interface IQuiz {
  quizId: string;
  imgSrc: string;
  answer: string;
}

export interface IOrderEvent {
  eventId: string;
  reward: IReward;
  startDate: string;
  endDate: string;
  status: EventStatusType;
  quiz?: IQuiz | null;
}

export interface IPostOrderEventRequest {
  answer: string;
  eventId: string;
  quizId: string;
}

export interface IPostOrderEventResponse {
  result: OrderEventResultType;
  ApplyTicket?: string;
}
