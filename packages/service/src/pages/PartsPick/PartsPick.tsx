import { Button, ButtonVariant } from "@service/common/components/Button";
import {
  partsPickBackgroundStyle,
  partsPickButtonStyle,
  partsNameStyle,
} from "./PartsPick.css";
import { PartsCard, PickTitle } from "@service/components/partsPick";
import { Space } from "@service/common/styles/Space";
import { useState } from "react";
import { useModal } from "@watermelon-clap/core/src/hooks";
import { useMobile } from "@service/common/hooks/useMobile";
import { useNavigate } from "react-router-dom";
import { apiGetPartsRemain } from "@service/apis/partsEvent";
import { LOTTER_APPLY_FINISH_PAGE_ROUTE } from "@service/constants/routes";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getAccessToken } from "@watermelon-clap/core/src/utils";
import { IParts } from "@watermelon-clap/core/src/types";
import { ClickInduceIcon } from "@service/common/components/ClickInduceIcon";
import { MODAL_CONTENT_NO_REMAINING_CHANCES } from "@service/common/components/ModalContainer/content/modalContent";
import { Helmet } from "react-helmet";

enum Category {
  REAR = "스포일러",
  COLOR = "색상",
  DRIVE_MODE = "배경",
  WHEEL = "휠",
}

export const PartsPick = () => {
  const { openModal } = useModal();
  const isMobile = useMobile();
  const [isPickComplete, setIsPickComplete] = useState(false);

  const [partsInfo, setPartsInfo] = useState<IParts>();
  const navigate = useNavigate();

  const handleOneMorePickButtonClick = () => {
    if (!isPickComplete) return;
    if (remainChance - 1 < 1) {
      openModal({
        type: "alert",
        props: {
          title: "내 아반떼 N 뽑기",
          content: MODAL_CONTENT_NO_REMAINING_CHANCES,
        },
      });
      return;
    }
    setPartsInfo(undefined);
    refetchRemainChance();
  };

  const {
    data: { remainChance },
    refetch: refetchRemainChance,
  } = useSuspenseQuery({
    queryKey: ["remainChance", getAccessToken()],
    queryFn: apiGetPartsRemain,
  });

  return (
    <>
      <Helmet>
        <title>
          파츠 뽑기 이벤트 | 현대자동차 - 아반떼 N 2024 | 고성능 컴팩트 스포츠카
        </title>
        <meta name="description" content="파츠 뽑기 이벤트 페이지" />
      </Helmet>
      <div css={partsPickBackgroundStyle}>
        <PickTitle />

        <PartsCard
          backImage="/images/parts/back.svg"
          isMouseOutAnimationEnabled={false}
          remainChance={remainChance}
          setIsPickComplete={setIsPickComplete}
          partsInfo={partsInfo}
          setPartsInfo={setPartsInfo}
        />

        {!partsInfo && <ClickInduceIcon text="CLICK" />}

        <Space size={isMobile ? 4 : 6} />
        {isPickComplete && (
          <p css={partsNameStyle}>
            "{partsInfo?.name}" &nbsp;
            {Category[partsInfo?.category as keyof typeof Category]} 당첨!
          </p>
        )}
        <Space size={isMobile ? 16 : 32} />
        {(isPickComplete || remainChance < 0) && (
          <>
            <Button
              variant={ButtonVariant.LONG}
              css={partsPickButtonStyle}
              onClick={() => {
                navigate(LOTTER_APPLY_FINISH_PAGE_ROUTE);
              }}
            >
              URL 공유하고 아반떼 N 받으러 가기
            </Button>
            <Space size={isMobile ? 4 : 12} />
          </>
        )}
        {isPickComplete && (
          <Button
            variant={ButtonVariant.LONG}
            css={partsPickButtonStyle}
            onClick={handleOneMorePickButtonClick}
          >
            한 번 더 뽑기 ({remainChance > 1 ? remainChance - 1 : 0}회)
          </Button>
        )}
      </div>
    </>
  );
};
