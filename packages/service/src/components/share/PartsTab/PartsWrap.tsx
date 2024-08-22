import * as style from "./PartsWrap.css";
import { PartsCard } from "./PartsCard";
import { ICustomCardProps } from "@service/components/partsCollection/CustomCard/CustomCard";

export interface IPartsWrapProps {
  equippedParts?: ICustomCardProps | undefined;
}

export const PartsWrap = ({ equippedParts }: IPartsWrapProps) => {
  return (
    <div css={style.partsCardWrap}>
      {equippedParts?.colorParts && (
        <PartsCard
          partsData={equippedParts.colorParts}
          key={equippedParts.colorParts.partsId}
        />
      )}
      {equippedParts?.wheelParts && (
        <PartsCard
          partsData={equippedParts.wheelParts}
          key={equippedParts.wheelParts.partsId}
        />
      )}
      {equippedParts?.bgParts && (
        <PartsCard
          partsData={equippedParts.bgParts}
          key={equippedParts.bgParts.partsId}
        />
      )}
      {equippedParts?.spoilerParts && (
        <PartsCard
          partsData={equippedParts.spoilerParts}
          key={equippedParts.spoilerParts.partsId}
        />
      )}
    </div>
  );
};
