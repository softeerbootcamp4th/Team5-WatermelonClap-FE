import { Button, ButtonVariant } from "@service/common/components/Button";
import { baseStyles } from "@watermelon-clap/core";
import { css } from "@emotion/react";
import { ClipBoardButton } from "@service/common/components/ClipBoardButton";

const ButtonDemoPage = () => {
  return (
    <div
      css={css`
        height: 100vh;
        width: 100vw;
        padding: 20px;
        background-color: #585858;
      `}
    >
      <div
        css={[
          baseStyles.flex.center,
          baseStyles.flex.column,
          css`
            gap: 20px;
          `,
        ]}
      >
        <Button
          variant={ButtonVariant.LONG}
          onClick={() => console.log("LONG")}
        >
          button
        </Button>

        <Button
          variant={ButtonVariant.SHORT}
          onClick={() => console.log("SHORT")}
        >
          button
        </Button>
        <Button disabled variant={ButtonVariant.SHORT}>
          button
        </Button>

        <Button
          variant={ButtonVariant.SMALL_DARK}
          onClick={() => console.log("SMALL_DARK")}
        >
          button1
        </Button>
        <Button
          variant={ButtonVariant.SMALL_LIGHT}
          onClick={() => console.log("SMALL_LIGHT")}
        >
          button2
        </Button>

        <Button
          variant={ButtonVariant.HUGE}
          onClick={() => console.log("HUGE")}
        >
          button
        </Button>

        <ClipBoardButton />
      </div>
    </div>
  );
};

export default ButtonDemoPage;
