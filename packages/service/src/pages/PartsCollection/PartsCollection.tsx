import { CustomCard } from "@service/components/partsCollection";
import * as style from "./PartsCollection.css";
import { PartsTab } from "@service/components/partsCollection/PartsTab";
import { useQuery } from "@tanstack/react-query";
import { IMyParts } from "@service/apis/partsEvent/type";
import { getAccessToken } from "@service/common/utils";
import { apiGetMyParts } from "@service/apis/partsEvent/apiGetMyParts";
import { useAuth } from "@service/common/hooks/useAuth";
import { useEffect } from "react";

export const PartsCollection = () => {
  const token = getAccessToken();

  const { getIsLogin, login } = useAuth();
  useEffect(() => {
    getIsLogin() ||
      login().then(() => {
        refetch();
      });
  }, []);

  const { data: partsData, refetch } = useQuery<IMyParts[]>({
    queryKey: ["myParts", token],
    queryFn: () => apiGetMyParts(token as string),
  });

  return (
    <div css={style.mainBg}>
      <h1 css={style.pageTitle}>내 아반떼 N 파츠 컬렉션</h1>
      <CustomCard />
      <PartsTab partsData={partsData} />
    </div>
  );
};
