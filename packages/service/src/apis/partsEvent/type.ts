export interface IParts {
  category: string;
  partsId: number;
  name: string;
  description: string;
  imgSrc: string;
  equipped: boolean;
}

export interface IGetParts {
  category: string;
  parts: IParts[];
}
