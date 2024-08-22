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
