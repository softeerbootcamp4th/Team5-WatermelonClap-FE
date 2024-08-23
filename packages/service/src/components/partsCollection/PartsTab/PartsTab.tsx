import { useState } from "react";
import * as style from "./PartsTab.css";
import { PartsCard } from "./PartsCard";
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import { IMyParts, PartsCateType } from "@watermelon-clap/core/src/types";
import { Button, ButtonVariant } from "@service/common/components/Button";
import { useNavigate } from "react-router-dom";
import { PICK_EVENT_PAGE_ROUTE } from "@service/constants/routes";
import { Space } from "@service/common/styles/Space";

interface IPartsTabProps {
  partsDatas?: IMyParts[];
  refetchGetMyParts: (
    options?: RefetchOptions,
  ) => Promise<QueryObserverResult<IMyParts[], Error>>;
}
export const PartsTab = ({ partsDatas, refetchGetMyParts }: IPartsTabProps) => {
  const [partsTab, setPartsTab] = useState<PartsCateType>("COLOR");
  const navigate = useNavigate();

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
        {partsDatas?.some(
          (cate) => cate?.category === partsTab && cate?.parts?.length,
        ) ? (
          partsDatas?.map(
            (cate) =>
              cate?.category === partsTab &&
              cate?.parts?.map((partsData) => (
                <PartsCard
                  partsData={partsData}
                  refetchGetMyParts={refetchGetMyParts}
                />
              )),
          )
        ) : (
          <div css={style.alertContentStyle}>
            <h3>해당 카테고리의 보유중인 파츠가 존재하지 않습니다.</h3>
            <h3>지금 바로 파츠를 뽑아보세요!</h3>
            <Space size={10} />
            <Button
              variant={ButtonVariant.LONG}
              onClick={() => {
                navigate(PICK_EVENT_PAGE_ROUTE);
              }}
            >
              파츠 뽑으러 가기
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
