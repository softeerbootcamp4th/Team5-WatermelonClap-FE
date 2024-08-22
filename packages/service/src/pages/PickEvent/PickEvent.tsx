import { JoinInfo } from "@service/components/pickEvent/JoinInfo/JoinInfo";
import * as style from "./PickEvent.css";
import { CardCarousel } from "@service/components/pickEvent/CardCarousel";
import { pickEventTerms, pickEventTermsTitle } from "@service/constants/terms";
import { useNavigate } from "react-router-dom";
import { PrizeContainer } from "@service/components/pickEvent";
import { theme } from "@watermelon-clap/core/src/theme";
import { css } from "@emotion/react";
import { Space } from "@service/common/styles/Space";
import { useMobile } from "@service/common/hooks/useMobile";
import { useRef } from "react";
import { useInView } from "framer-motion";

export const PickEvent = () => {
  const navigate = useNavigate();
  const isMobile = useMobile();

  const btnRef = useRef(null);
  const btnIsInView = useInView(btnRef);

  const btnEndRef = useRef(null);
  const btnEndIsInView = useInView(btnEndRef);

  return (
    <div css={style.bg}>
      <Space size={80} />
      <div css={style.textWrap}>
        <h1>내 아반떼 N 뽑기</h1>
        <span
          css={css`
            color: ${theme.color.eventSkyblue};
          `}
        >
          {textData.period}
        </span>
        <span>당첨자 발표 {textData.winnerDate}</span>
        <pre>{textData.desc}</pre>
      </div>
      <Space size={!isMobile ? 20 : 50} />

      <CardCarousel />

      <Space size={!isMobile ? 20 : 10} />

      <div className="btn-detect" ref={btnRef} />

      <button
        css={style.btn(btnIsInView, btnEndIsInView)}
        onClick={() => navigate("/parts-pick")}
      >
        지금 바로 뽑기
      </button>
      <Space size={!isMobile ? 200 : 100} />

      <JoinInfo />
      <Space size={!isMobile ? 100 : 100} />
      <PrizeContainer />

      <Space size={30} />

      <div css={style.termWrap}>
        <span css={style.termTitleStyle}>{pickEventTermsTitle}</span>
        <ul css={style.termListStyle}>
          {pickEventTerms.map((term, idx) => (
            <li key={idx}>{term}</li>
          ))}
        </ul>
      </div>
      <div className="btn-detect" ref={btnEndRef} />
    </div>
  );
};

const textData = {
  period: "2024. 08. 19 ~ 09. 08",
  winnerDate: "2024. 09. 16",
  desc: "파츠를 모아 아반떼 N을 완성해 보세요!\n공유하기 링크를 통해 친구가 이벤트에 참여할 경우 추가 뽑기권이 증정됩니다!\n또, 모든 카테고리별 1개 이상의 파츠를 장착하여 추가적인 경품을 노려보세요!",
};
