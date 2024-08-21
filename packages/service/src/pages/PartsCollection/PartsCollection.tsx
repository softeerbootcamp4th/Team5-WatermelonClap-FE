import { CustomCard } from "@service/components/partsCollection";
import * as style from "./PartsCollection.css";
import { PartsTab } from "@service/components/partsCollection/PartsTab";
import { useQuery } from "@tanstack/react-query";
import { apiGetMyParts } from "@service/apis/partsEvent/apiGetMyParts";
import { useEffect, useState } from "react";
import { ICustomCardProps } from "@service/components/partsCollection/CustomCard/CustomCard";
import { useAuth } from "@watermelon-clap/core/src/hooks";
import { IMyParts } from "@watermelon-clap/core/src/types";
import { getAccessToken } from "@watermelon-clap/core/src/utils";
import { PinContainer } from "@service/components/partsCollection/PinContainer";

export const PartsCollection = () => {
  const { getIsLogin, login, handleTokenError } = useAuth();

  const [equippedParts, setEquippedParts] = useState<ICustomCardProps>();

  const getPartsData = () =>
    apiGetMyParts().catch(handleTokenError) as Promise<IMyParts[]>;

  const { data: partsDatas, refetch } = useQuery<IMyParts[]>({
    queryKey: ["myParts", getAccessToken()],
    queryFn: getPartsData,
  });

  useEffect(() => {
    getIsLogin() ||
      login().then(() => {
        refetch();
      });
  }, []);

  useEffect(() => {
    setEquippedParts(getEquippedPartsImg(partsDatas));
  }, [partsDatas]);

  return (
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
    </div>
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
