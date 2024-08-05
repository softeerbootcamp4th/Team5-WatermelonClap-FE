import { Marquee } from "@service/common/components/Marquee";
import * as style from "./Expectations.css";

export const Expectations = () => {
  return (
    <div css={style.container}>
      <Marquee pauseOnHover>
        {reviews.map((review) => (
          <Marquee.Item>
            <div css={style.expectationCard}>
              <pre className="text">{review}</pre>
            </div>
          </Marquee.Item>
        ))}
      </Marquee>
    </div>
  );
};

const reviews = [
  `강력한 성능과 민첩한 핸들링이라니~
아반떼 N을 타면 즐거운 드라이빙을 할 수 있을 것 같아요!`,
  `아반떼 N! 스포티한 자동차를 눈여겨보고 있었는데
딱 제 취향이에요! 도로에서 자주 보고싶어요~`,
  `아반떼N 너무 예뻐요! 출시되길 기다리고 있었어요
일상형 스포츠카 기대 중입니다 ㅎㅎㅎ`,
  `짧은 기대평`,
];
