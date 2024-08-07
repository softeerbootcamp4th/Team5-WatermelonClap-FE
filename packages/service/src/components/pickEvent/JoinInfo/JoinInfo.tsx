import * as style from "./JoinInfo.css";
import { useMobile } from "@service/common/hooks/useMobile";

export const JoinInfo = () => {
  const isMobile = useMobile();

  return (
    <div>
      <h1 css={style.title}>참여 안내</h1>

      {isMobile ? (
        <>
          <div css={style.iconWrap}>
            {joinIconPath.slice(0, 5).map((path, idx) => (
              <img src={path} key={idx} css={style.icon(idx)} />
            ))}
          </div>
          <div css={style.iconWrap}>
            {joinIconPath.slice(6).map((path, idx) => (
              <img src={path} key={idx} css={style.icon(idx)} />
            ))}
          </div>
        </>
      ) : (
        <div css={style.iconWrap}>
          {joinIconPath.map((path, idx) => (
            <img src={path} key={idx} css={style.icon(idx)} />
          ))}
        </div>
      )}
    </div>
  );
};

const joinIconPath = Array.from(
  { length: 9 },
  (_, i) =>
    `images/pickEvent/joinInfo/${i % 2 === 0 ? `join-info-${Math.floor(i / 2) + 1}` : "arrow"}.svg`,
);
