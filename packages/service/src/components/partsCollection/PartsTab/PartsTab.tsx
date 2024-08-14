import { useState } from "react";
import * as style from "./PartsTab.css";
import { PartsCard } from "./PartsCard";
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import { IMyParts, PartsCateType } from "@watermelon-clap/core/src/types";

interface IPartsTabProps {
  partsDatas?: IMyParts[];
  refetchGetMyParts: (
    options?: RefetchOptions,
  ) => Promise<QueryObserverResult<IMyParts[], Error>>;
}
export const PartsTab = ({ partsDatas, refetchGetMyParts }: IPartsTabProps) => {
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

  return (
    <div css={style.container}>
      <div css={style.tabWrap}>
        {tabBtn.map((tab, idx) => (
          <button
            css={style.tabBtn(partsTab === tab.value)}
            onClick={tab.onClick}
            key={idx}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div css={style.partsCardWrap}>
        {partsDatas?.map(
          (cate) =>
            cate?.category === partsTab &&
            cate?.parts?.map((partsData) => (
              <PartsCard
                partsData={partsData}
                refetchGetMyParts={refetchGetMyParts}
              />
            )),
        )}
      </div>
    </div>
  );
};
