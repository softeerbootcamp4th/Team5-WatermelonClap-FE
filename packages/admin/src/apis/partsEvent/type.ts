export interface IParticipant {
  uid: string;
  link: string;
  remainChance: number;
  rank: number;
}

export interface IGetPartsEventResponse {
  content: IParticipant[];
}

export interface IWinner {
  rank: number;
  reward: string;
  uid: string;
  email: string;
  name: string;
  phoneNumber: string;
  address: string;
  status: "DONE" | "READY";
}

export interface IAdminReward {
  rewardName: string;
  rewardRank: string;
  winnerCount: number | string;
  rewardFile: File | null;
  rewardImageUrl: string | null;
}

export interface IAdminPostPartsEventRequest {
  name: string;
  startTime: string;
  endTime: string;
  rewards: IAdminReward[];
}
