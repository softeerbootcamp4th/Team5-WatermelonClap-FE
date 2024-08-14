import { Button, ButtonVariant } from "@service/common/components/Button";
import { theme } from "@watermelon-clap/core/src/theme";
import { css } from "@emotion/react";
import { ClipBoardButton } from "@service/common/components/ClipBoardButton";
import { CheckBox } from "@service/common/components/CheckBox";
import { useState } from "react";
import { ReactComponent as ClipBoardIcon } from "public/icons/clipboard.svg";

const ButtonDemoPage = () => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);

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
          theme.flex.center,
          theme.flex.column,
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

        <CheckBox
          isChecked={isChecked1}
          setIsChecked={setIsChecked1}
          text="check box"
        />

        <CheckBox
          isChecked={isChecked2}
          setIsChecked={setIsChecked2}
          text="check box"
          style={{ backgroundColor: "red" }}
        />

        <CheckBox
          isChecked={isChecked3}
          setIsChecked={setIsChecked3}
          text="check box"
          interpolation={{
            labelStyle: css`
              color: blue;
            `,
            checkBoxStyle: (isChecked: boolean) => css`
              background-color: ${isChecked ? "blue" : "transparent"};
              border: 2px solid ${isChecked ? "blue" : "blue"};
            `,
          }}
        />

        <CheckBox
          isChecked={isChecked4}
          setIsChecked={setIsChecked4}
          text="check box"
          interpolation={{
            labelStyle: css`
              font-size: 18px;
              color: #004d40;
            `,
            checkBoxStyle: (isChecked: boolean) => css`
              background-color: ${isChecked ? "#00796b" : "#ffffff"};
              border: 2px solid ${isChecked ? "#004d40" : "#00796b"};
            `,
            svgStyle: css`
              width: 28px;
              height: 28px;
            `,
          }}
          svgIcon={<ClipBoardIcon />}
        />
      </div>
    </div>
  );
};

export default ButtonDemoPage;
