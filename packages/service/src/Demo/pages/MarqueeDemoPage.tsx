import { css } from "@emotion/react";
import { Marquee } from "@service/common/components/Marquee";

interface ReviewCardProps {
  img: string;
  name: string;
  username: string;
  body: string;
}

const ReviewCard = ({ img, name, username, body }: ReviewCardProps) => {
  const cardStyles = css`
    width: 20rem;
    cursor: pointer;
    overflow: hidden;
    border-radius: 1rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 1rem;
    background: rgba(0, 0, 0, 0.01);
    &:hover {
      background: rgba(0, 0, 0, 0.05);
    }
    .dark & {
      border-color: rgba(255, 255, 255, 0.1);
      background: rgba(255, 255, 255, 0.1);
      &:hover {
        background: rgba(255, 255, 255, 0.15);
      }
    }
  `;

  const headerStyles = css`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    img {
      border-radius: 50%;
    }
  `;

  const textStyles = css`
    display: flex;
    flex-direction: column;
    figcaption {
      font-size: 0.875rem;
      font-weight: 500;
    }
    p {
      font-size: 0.75rem;
      font-weight: 500;
      color: rgba(255, 255, 255, 0.4);
    }
  `;

  const bodyStyles = css`
    margin-top: 0.5rem;
    font-size: 0.875rem;
  `;

  return (
    <figure css={cardStyles}>
      <div css={headerStyles}>
        <img src={img} alt="" width="32" height="32" />
        <div css={textStyles}>
          <figcaption>{name}</figcaption>
          <p>{username}</p>
        </div>
      </div>
      <blockquote css={bodyStyles}>{body}</blockquote>
    </figure>
  );
};

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

export const MarqueeDemoPage = () => {
  return (
    <div
      css={css`
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        border-radius: 0.5rem;
        border: 1px solid gainsboro;
        background: var(--background, #fff);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        @media (min-width: 768px) {
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        }
      `}
    >
      <Marquee pauseOnHover>
        {reviews.map((review) => (
          <Marquee.Item>
            <ReviewCard key={review.username} {...review} />
          </Marquee.Item>
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover>
        {reviews.map((review) => (
          <Marquee.Item>
            <ReviewCard key={review.username} {...review} />
          </Marquee.Item>
        ))}
      </Marquee>
      <Marquee>
        {reviews.map((review) => (
          <Marquee.Item>
            <ReviewCard key={review.username} {...review} />
          </Marquee.Item>
        ))}
      </Marquee>
    </div>
  );
};
