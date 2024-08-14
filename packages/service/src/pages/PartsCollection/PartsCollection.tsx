import { CustomCard } from "@service/components/partsCollection";
import * as style from "./PartsCollection.css";
import { PartsTab } from "@service/components/partsCollection/PartsTab";
import { useQuery } from "@tanstack/react-query";
import { IMyParts } from "@service/apis/partsEvent/type";
import { getAccessToken } from "@service/common/utils";
import { apiGetMyParts } from "@service/apis/partsEvent/apiGetMyParts";
import { useAuth } from "@service/common/hooks/useAuth";
import { useEffect, useState } from "react";
import { ICustomCardProps } from "@service/components/partsCollection/CustomCard/CustomCard";

export const PartsCollection = () => {
  const token = getAccessToken();

  const { getIsLogin, login } = useAuth();

  const [equippedPartsImg, setEquippedPartsImg] = useState<ICustomCardProps>();

  const { data: partsDatas, refetch } = useQuery<IMyParts[]>({
    queryKey: ["myParts", token],
    queryFn: () => apiGetMyParts(token as string),
  });

  useEffect(() => {
    getIsLogin() ||
      login().then(() => {
        refetch();
      });
  }, []);

  useEffect(() => {
    setEquippedPartsImg(getEquippedPartsImg(partsDatas));
  }, [partsDatas]);

  return (
    <div css={style.mainBg}>
      <h1 css={style.pageTitle}>내 아반떼 N 파츠 컬렉션</h1>
      <CustomCard {...equippedPartsImg} />
      <PartsTab partsDatas={partsDatas} refetchGetMyParts={refetch} />
    </div>
  );
};

const getEquippedPartsImg = (partsDatas?: IMyParts[]) => {
  const _equippedPartsImg: ICustomCardProps = {};

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
      }
    }),
  );
  return _equippedPartsImg;
};
