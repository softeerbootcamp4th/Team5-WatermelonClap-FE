import { useEffect, useState } from "react";
import * as style from "./PartsTab.css";
import { IMyParts, PartsCateType } from "@service/apis/partsEvent/type";
import { apiGetMyParts } from "@service/apis/partsEvent/apiGetMyParts";
import { useQuery } from "@tanstack/react-query";
import { getAccessToken } from "@service/common/utils";
import { useAuth } from "@service/common/hooks/useAuth";
import { PartsCard } from "./PartsCard";

export const PartsTab = () => {
  const [partsTab, setPartsTab] = useState<PartsCateType>("COLOR");

  const tabBtn = [
    {
      label: "색상",
      value: "COLOR",
      onClick: () => {
        setPartsTab("COLOR");
      },
    },
    {
      label: "모드",
      value: "DRIVE_MODE",
      onClick: () => {
        setPartsTab("DRIVE_MODE");
      },
    },
    {
      label: "휠",
      value: "WHEEL",
      onClick: () => {
        setPartsTab("WHEEL");
      },
    },
    {
      label: "스포일러",
      value: "REAR",
      onClick: () => {
        setPartsTab("REAR");
      },
    },
  ];

  const { getIsLogin, login } = useAuth();
  useEffect(() => {
    getIsLogin() ||
      login().then(() => {
        refetch();
      });
  }, []);

  const token = getAccessToken();

  const {
    data: partsData,
    error,
    refetch,
  } = useQuery<IMyParts[]>({
    queryKey: ["myParts", token?.slice(0, 10)],
    queryFn: () => apiGetMyParts(token as string),
  });

  if (error) {
    login().then(() => {
      refetch();
    });
  }

  return (
    <div css={style.container}>
      <div css={style.tabWrap}>
        {tabBtn.map((tab) => (
          <button
            css={style.tabBtn(partsTab === tab.value)}
            onClick={tab.onClick}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div css={style.partsCardWrap}>
        {partsData?.map(
          (it) =>
            it?.category === partsTab &&
            it?.parts?.map((partsData) => <PartsCard partsData={partsData} />),
        )}
      </div>
    </div>
  );
};
