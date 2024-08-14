export interface IParts {
  category: string;
  partsId: number;
  name: string;
  description: string;
  imgSrc: string;
  equipped: boolean;
  thumbnailImgSrc: string;
}

export interface IGetParts {
  category: string;
  parts: IParts[];
}

export type PartsCateType = "COLOR" | "REAR" | "DRIVE_MODE" | "WHEEL";

export interface IMyParts {
  category: PartsCateType;
  parts: IParts[];
}
