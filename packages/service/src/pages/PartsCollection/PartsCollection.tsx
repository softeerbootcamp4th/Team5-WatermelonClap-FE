import { CustomCard } from "@service/components/partsCollection";
import * as style from "./PartsCollection.css";
import { PartsTab } from "@service/components/partsCollection/PartsTab";
import { apiGetMyParts } from "@service/apis/partsEvent/apiGetMyParts";
import { useEffect, useState } from "react";
import { ICustomCardProps } from "@service/components/partsCollection/CustomCard/CustomCard";
import { IMyParts } from "@watermelon-clap/core/src/types";
import { getAccessToken } from "@watermelon-clap/core/src/utils";
import { PinContainer } from "@service/components/partsCollection/PinContainer";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import { Space } from "@service/common/styles/Space";
import { useMobile } from "@service/common/hooks/useMobile";
import { Button, ButtonVariant } from "@service/common/components/Button";
import { useNavigate } from "react-router-dom";
import { LOTTER_APPLY_INFO_PAGE_ROUTE } from "@service/constants/routes";

export const PartsCollection = () => {
  const [equippedParts, setEquippedParts] = useState<ICustomCardProps>();
  const isMobile = useMobile();
  const navigate = useNavigate();

  const { data: partsDatas, refetch } = useSuspenseQuery<IMyParts[]>({
    queryKey: ["myParts", getAccessToken()],
    queryFn: apiGetMyParts,
  });

  useEffect(() => {
    setEquippedParts(getEquippedPartsImg(partsDatas));
  }, [partsDatas]);

  return (
    <>
      <Helmet>
        <title>
          내 컬렉션 | 현대자동차 - 아반떼 N 2024 | 고성능 컴팩트 스포츠카
        </title>
        <meta name="description" content="내 컬렉션 페이지" />
      </Helmet>
      <div css={style.mainBg}>
        <h1 css={style.pageTitle}>내 아반떼 N 파츠 컬렉션</h1>
        <div css={style.partsContainer}>
          <div css={style.customCardContainer}>
            <PinContainer equippedParts={equippedParts}>
              <CustomCard {...equippedParts} />
            </PinContainer>
          </div>

          <PartsTab partsDatas={partsDatas} refetchGetMyParts={refetch} />
        </div>
        <Space size={isMobile ? 20 : 12} />
        <Button
          variant={ButtonVariant.LONG}
          css={style.moveButton}
          onClick={() => {
            navigate(LOTTER_APPLY_INFO_PAGE_ROUTE);
          }}
        >
          내 아반떼 N 자랑하기
        </Button>
        <Space size={isMobile ? 4 : 12} />
      </div>
    </>
  );
};

const getEquippedPartsImg = (partsDatas?: IMyParts[]) => {
  const _equippedParts: ICustomCardProps = {};

  partsDatas?.map((cate) =>
    cate.parts.map((parts) => {
      if (parts.equipped) {
        switch (parts.category) {
          case "DRIVE_MODE":
            _equippedParts.bgParts = parts;
            break;
          case "COLOR":
            _equippedParts.colorParts = parts;
            break;
          case "REAR":
            _equippedParts.spoilerParts = parts;
            break;
          case "WHEEL":
            _equippedParts.wheelParts = parts;
            break;
        }
      }
    }),
  );
  return _equippedParts;
};
