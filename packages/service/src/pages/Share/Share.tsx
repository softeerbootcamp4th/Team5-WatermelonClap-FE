import { useSuspenseQuery } from "@tanstack/react-query";
import { IMyParts, IParts } from "@watermelon-clap/core/src/types";
import { getAccessToken } from "@watermelon-clap/core/src/utils";
import { useState, useEffect } from "react";
import * as style from "./Share.css";
import { PartsWrap } from "@service/components/share/PartsTab";
import {
  CustomCard,
  ICustomCardProps,
} from "@service/components/share/CustomCard/CustomCard";
import { useNavigate, useParams } from "react-router-dom";
import { apiGetSharedParts } from "@service/apis/partsEvent/apiGetSharedParts";
import { Button, ButtonVariant } from "@service/common/components/Button";
import { Space } from "@service/common/styles/Space";
import { MAIN_PAGE_ROUTE } from "@service/constants/routes";

export const Share = () => {
  const navigator = useNavigate();

  const [equippedPartsImg, setEquippedPartsImg] = useState<ICustomCardProps>();
  const [equippedPartsData, setEquippedPartsData] = useState<IParts[]>();

  const { linkKey } = useParams();

  const { data: partsDatas } = useSuspenseQuery<IMyParts[]>({
    queryKey: ["myParts", getAccessToken()],
    queryFn: () => apiGetSharedParts(linkKey),
  });

  useEffect(() => {
    setEquippedPartsImg(getEquippedParts(partsDatas)._equippedPartsImg);
    setEquippedPartsData(getEquippedParts(partsDatas)._equippedPartsData);
  }, [partsDatas]);

  return (
    <div css={style.mainBg}>
      <h1 css={style.pageTitle}>아반떼 N 파츠 컬렉션</h1>
      <CustomCard {...equippedPartsImg} />
      <PartsWrap equippedPartsData={equippedPartsData} />
      <Space size={80} />
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
  const _equippedPartsImg: ICustomCardProps = {};
  const _equippedPartsData: IParts[] = [];

  partsDatas?.map((cate) =>
    cate.parts.map((parts) => {
      if (parts.equipped) {
        switch (parts.category) {
          case "DRIVE_MODE":
            _equippedPartsImg.bgImg = parts.imgSrc;
            break;
          case "COLOR":
            _equippedPartsImg.colorImg = parts.imgSrc;
            break;
          case "REAR":
            _equippedPartsImg.spoilerImg = parts.imgSrc;
            break;
          case "WHEEL":
            _equippedPartsImg.wheelImg = parts.imgSrc;
            break;
        }
        _equippedPartsData.push(parts);
      }
    }),
  );

  return {
    _equippedPartsImg: _equippedPartsImg,
    _equippedPartsData: _equippedPartsData,
  };
};
