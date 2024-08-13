import { Button, ButtonVariant } from "@service/common/components/Button";
import {
  partsPickBackgroundStyle,
  partsPickButtonStyle,
  partsPickModalContentStyle,
} from "./PartsPick.css";
import { PartsCard, PickTitle } from "@service/components/partsPick";
import { Space } from "@service/common/styles/Space";
import { useEffect, useRef, useState } from "react";
import { useModal } from "@watermelon-clap/core/src/hooks";
import { useAuth } from "@watermelon-clap/core/src/hooks";
import { useMobile } from "@service/common/hooks/useMobile";
import { useLocation } from "react-router-dom";
import { apiGetPartsRemain } from "@service/apis/partsEvent";

export const PartsPick = () => {
  const { openModal } = useModal();
  const isMobile = useMobile();
  const [isPickComplete, setIsPickComplete] = useState(false);
  const initPickFlag = useRef(false);
  const [remainChance, setRemainChance] = useState(
    useLocation()?.state?.remainChance,
  );
  const { getIsLogin, login } = useAuth();

  const minusRemainChance = () => {
    if (remainChance < 1) return;
    setRemainChance(remainChance - 1);
  };

  const handleOneMorePickButtonClick = () => {
    if (!isPickComplete && !initPickFlag) return;
    if (remainChance < 1) {
      openModal({
        type: "alert",
        props: {
          title: "내 아반떼 N 뽑기",
          content: (
            <div css={partsPickModalContentStyle}>
              <p>뽑기권이 없습니다.</p>
              <p>내 컬렉션 링크를 통해 친구를 초대해</p>
              <p>뽑기권을 추가로 획득해보세요!</p>
            </div>
          ),
        },
      });
    }
    minusRemainChance();
  };

  const handleSetRemianChance = () => {
    apiGetPartsRemain().then(({ remainChance }) =>
      setRemainChance(!remainChance ? 0 : remainChance - 1),
    );
  };

  useEffect(() => {
    if (!initPickFlag.current) {
      handleOneMorePickButtonClick();
      initPickFlag.current = true;
    }

    // 로그인 안 하고 바로 페이지로 접근할 경우
    if (!getIsLogin()) {
      login().then(handleSetRemianChance);
    }
  }, []);

  return (
    <>
      <div css={partsPickBackgroundStyle}>
        <PickTitle />
        <PartsCard
          backImage="/images/parts/back.svg"
          isMouseOutAnimationEnabled={false}
          remainChance={remainChance}
          setIsPickComplete={setIsPickComplete}
        />
        <Space size={isMobile ? 16 : 32} />
        {(isPickComplete || remainChance < 0) && (
          <>
            <Button
              variant={ButtonVariant.LONG}
              css={partsPickButtonStyle}
              onClick={() => {}}
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
            한 번 더 뽑기 ({remainChance}회)
          </Button>
        )}
      </div>
    </>
  );
};
