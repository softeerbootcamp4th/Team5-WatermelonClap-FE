import { Button } from "@service/common/components/Button";
import * as style from "./PartsCard.css";
import { apiPatchMyParts } from "@service/apis/partsEvent/apiPatchMyParts";
import { RefetchOptions, QueryObserverResult } from "@tanstack/react-query";
import { IParts, IMyParts } from "@watermelon-clap/core/src/types";
import { getAccessToken } from "@watermelon-clap/core/src/utils";
import { useState } from "react";
import { useModal } from "@watermelon-clap/core/src/hooks";
import { useMobile } from "@service/common/hooks/useMobile";

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
  const [isHovered, setIsHovered] = useState(false);
  const { openModal } = useModal();
  const isMobile = useMobile();

  const handleDescriptionButtonClick = () => {
    openModal({
      type: "description",
      props: {
        src: partsData.thumbnailImgSrc,
        name: partsData.name,
        description: partsData.description,
      },
    });
  };

  const handleClickCard = () => {
    apiPatchMyParts(getAccessToken() as string, partsData.partsId).then(() =>
      refetchGetMyParts(),
    );
  };

  return (
    <div
      css={style.container}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        css={style.card(partsData.equipped)}
        onClick={isMobile ? () => {} : handleClickCard}
      >
        <img
          src={partsData.thumbnailImgSrc}
          css={style.img(partsData.category)}
        />
      </div>
      {isHovered ? (
        <div css={style.buttonWrap}>
          <Button
            css={style.partsDescriptionButton}
            onClick={handleDescriptionButtonClick}
          >
            상세설명
          </Button>
          <Button css={style.partsEquipButton} onClick={handleClickCard}>
            {partsData.equipped ? "장착해제" : "장착하기"}
          </Button>
        </div>
      ) : (
        <span css={style.name}>{partsData.name}</span>
      )}
    </div>
  );
};
