import * as style from "./PickTitle.css";

export const PickTitle = () => {
  return (
    <div css={style.pickTitleContainerStyle}>
      <h1 css={style.pickTitleHeaderStyle}>카드를 뽑아주세요!</h1>
      <span css={style.pickTitleSpanStyle}>
        랜덤 확률로 고객님만의 차를 뽑아보세요.
      </span>
    </div>
  );
};
