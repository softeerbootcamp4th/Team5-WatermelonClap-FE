import { useSuspenseQuery } from "@tanstack/react-query";
import { IMyParts } from "@watermelon-clap/core/src/types";
import { getAccessToken } from "@watermelon-clap/core/src/utils";
import { useState, useEffect } from "react";
import * as style from "./Share.css";
import { PartsWrap } from "@service/components/share/PartsTab";
import { CustomCard } from "@service/components/partsCollection";
import { useNavigate, useParams } from "react-router-dom";
import { apiGetSharedParts } from "@service/apis/partsEvent/apiGetSharedParts";
import { Button, ButtonVariant } from "@service/common/components/Button";
import { Space } from "@service/common/styles/Space";
import { MAIN_PAGE_ROUTE } from "@service/constants/routes";
import { PinContainer } from "@service/components/partsCollection/PinContainer";
import { ICustomCardProps } from "@service/components/partsCollection/CustomCard/CustomCard";
import { useMobile } from "@service/common/hooks/useMobile";

export const Share = () => {
  const navigator = useNavigate();
  const [equippedParts, setEquippedParts] = useState<ICustomCardProps>();
  const { linkKey } = useParams();
  const isMobile = useMobile();

  const { data: partsDatas } = useSuspenseQuery<IMyParts[]>({
    queryKey: ["myParts", getAccessToken()],
    queryFn: () => apiGetSharedParts(linkKey),
  });

  useEffect(() => {
    setEquippedParts(getEquippedParts(partsDatas));
  }, [partsDatas]);

  return (
    <div css={style.mainBg}>
      <h1 css={style.pageTitle}>아반떼 N 파츠 컬렉션</h1>

      <div css={style.flexContainer}>
        <div css={style.customCardContainer}>
          <div css={style.customCardWrap}>
            <PinContainer equippedParts={equippedParts}>
              <CustomCard {...equippedParts} />
            </PinContainer>
          </div>
        </div>

        <PartsWrap equippedParts={equippedParts} />
      </div>

      <Space size={isMobile ? 40 : 40} />

      <Button
        onClick={() => navigator(MAIN_PAGE_ROUTE)}
        variant={ButtonVariant.LONG}
        css={style.btn}
      >
        내 아반떼 N 뽑으러가기
      </Button>
    </div>
  );
};

const getEquippedParts = (partsDatas?: IMyParts[]) => {
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
