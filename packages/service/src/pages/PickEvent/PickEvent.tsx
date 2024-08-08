import { JoinInfo } from "@service/components/pickEvent/JoinInfo/JoinInfo";
import * as style from "./PickEvent.css";
import { CardCarousel } from "@service/components/pickEvent/CardCarousel";
import { pickEventTerms, pickEventTermsTitle } from "@service/constants/terms";

export const PickEvent = () => {
  return (
    <div css={style.bg}>
      <JoinInfo />
      <CardCarousel />

      <span css={style.termTitleStyle}>{pickEventTermsTitle}</span>
      <ul css={style.termListStyle}>
        {pickEventTerms.map((term) => (
          <li>{term}</li>
        ))}
      </ul>
    </div>
  );
};
