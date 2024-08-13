import { useState } from "react";
import * as style from "./PartsTab.css";
import { IMyParts, PartsCateType } from "@service/apis/partsEvent/type";
import { PartsCard } from "./PartsCard";

interface IPartsTabProps {
  partsData?: IMyParts[];
}
export const PartsTab = ({ partsData }: IPartsTabProps) => {
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
