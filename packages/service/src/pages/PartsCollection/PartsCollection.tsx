import { CustomCard } from "@service/components/partsCollection";
import * as style from "./PartsCollection.css";

export const PartsCollection = () => {
  return (
    <div css={style.mainBg}>
      <h1 css={style.pageTitle}>내 아반떼 N 파츠 컬렉션</h1>
      <CustomCard />
    </div>
  );
};
