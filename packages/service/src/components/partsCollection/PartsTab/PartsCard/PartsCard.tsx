import { IMyParts, IParts } from "@service/apis/partsEvent/type";
import * as style from "./PartsCard.css";
import { getAccessToken } from "@service/common/utils";
import { apiPatchMyParts } from "@service/apis/partsEvent/apiPatchMyParts";
import { RefetchOptions, QueryObserverResult } from "@tanstack/react-query";

interface IPartsCardProps {
  partsData: IParts;
  refetchGetMyParts: (
    options?: RefetchOptions,
  ) => Promise<QueryObserverResult<IMyParts[], Error>>;
}

export const PartsCard = ({
  partsData,
  refetchGetMyParts,
}: IPartsCardProps) => {
  const handleClickCard = () => {
    apiPatchMyParts(getAccessToken() as string, partsData.partsId).then(() =>
      refetchGetMyParts(),
    );
  };

  return (
    <div css={style.container} onClick={handleClickCard}>
      <div css={style.card(partsData.equipped)}>
        <img
          src={partsData.thumbnailImgSrc}
          css={style.img(partsData.category)}
        />
      </div>
      <span css={style.name}>{partsData.name}</span>
    </div>
  );
};
