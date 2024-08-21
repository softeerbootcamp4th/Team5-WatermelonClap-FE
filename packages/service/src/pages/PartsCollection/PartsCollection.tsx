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

export const PartsCollection = () => {
  const [equippedParts, setEquippedParts] = useState<ICustomCardProps>();

  const { data: partsDatas, refetch } = useSuspenseQuery<IMyParts[]>({
    queryKey: ["myParts", getAccessToken()],
    queryFn: apiGetMyParts,
  });

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
