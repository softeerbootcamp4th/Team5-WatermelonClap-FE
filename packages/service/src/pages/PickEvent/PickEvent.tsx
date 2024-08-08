import { JoinInfo } from "@service/components/pickEvent/JoinInfo/JoinInfo";
import * as style from "./PickEvent.css";
import { CardCarousel } from "@service/components/pickEvent/CardCarousel";
import { pickEventTerms, pickEventTermsTitle } from "@service/constants/terms";
import { useNavigate } from "react-router-dom";
import { PrizeContainer } from "@service/components/pickEvent";

export const PickEvent = () => {
  const navigate = useNavigate();

  return (
    <div css={style.bg}>
      <JoinInfo />
      <CardCarousel />

      <button css={style.btn} onClick={() => navigate("/parts-pick")}>
        지금 바로 뽑기
      </button>

      <span css={style.termTitleStyle}>{pickEventTermsTitle}</span>
      <ul css={style.termListStyle}>
        {pickEventTerms.map((term) => (
          <li>{term}</li>
        ))}
      </ul>
      <PrizeContainer />
    </div>
  );
};
