import { Marquee } from "@service/common/components/Marquee";
import * as style from "./Expectations.css";
import { apiGetExpectation } from "@service/apis/expectation/apiGetExpectation";
import { useSuspenseQuery } from "@tanstack/react-query";
import { IExpectation } from "@service/apis/expectation/type";

export const Expectations = () => {
  const { data: reviews } = useSuspenseQuery<IExpectation[]>({
    queryKey: ["reviews"],
    queryFn: () => apiGetExpectation(),
  });

  return (
    <div css={style.container}>
      <Marquee pauseOnHover>
        {reviews.map((review) => (
          <Marquee.Item key={review.expectationId}>
            <div css={style.expectationCard}>
              <pre className="text">{review.expectation}</pre>
            </div>
          </Marquee.Item>
        ))}
      </Marquee>
    </div>
  );
};
