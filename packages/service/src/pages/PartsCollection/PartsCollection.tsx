import { CustomCard } from "@service/components/partsCollection";
import * as style from "./PartsCollection.css";
import { PartsTab } from "@service/components/partsCollection/PartsTab";
import { useQuery } from "@tanstack/react-query";
import { IMyParts, PartsCateType } from "@service/apis/partsEvent/type";
import { getAccessToken } from "@service/common/utils";
import { apiGetMyParts } from "@service/apis/partsEvent/apiGetMyParts";
import { useAuth } from "@service/common/hooks/useAuth";
import { useEffect, useState } from "react";

export const PartsCollection = () => {
  const token = getAccessToken();

  const { getIsLogin, login } = useAuth();
  const [equippedPartsImg, setEquippedPartsImg] = useState<IEquippedPartsImg>();

  const { data: partsData, refetch } = useQuery<IMyParts[]>({
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
    const imgs = getEquippedImg(partsData) as string[];

    setEquippedPartsImg({
      DRIVE_MODE: imgs[2],
      COLOR: imgs[0],
      REAR: imgs[1],
      WHEEL: imgs[3],
    });
  }, [partsData]);

  return (
    <div css={style.mainBg}>
      <h1 css={style.pageTitle}>내 아반떼 N 파츠 컬렉션</h1>
      <CustomCard
        bgImg={equippedPartsImg?.DRIVE_MODE}
        colorImg={equippedPartsImg?.COLOR}
        spoilerImg={equippedPartsImg?.REAR}
        wheelImg={equippedPartsImg?.WHEEL}
      />
      <PartsTab partsData={partsData} />
    </div>
  );
};

const getEquippedImg = (data?: IMyParts[]) => {
  return data?.flatMap((category) =>
    category.parts.filter((part) => part.equipped).map((part) => part.imgSrc),
  );
};

interface IEquippedPartsImg {
  DRIVE_MODE: string;
  COLOR: string;
  REAR: string;
  WHEEL: string;
}
