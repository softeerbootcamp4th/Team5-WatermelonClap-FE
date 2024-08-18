export interface IParticipant {
  uid: string;
  link: string;
  remainChance: number;
  rank: number;
}

export interface IGetPartsEventResponse {
  content: IParticipant[];
}
