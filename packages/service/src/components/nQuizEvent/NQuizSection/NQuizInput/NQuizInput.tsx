import { useState, ChangeEvent, KeyboardEvent } from "react";
import { Button } from "@service/common/components/Button";
import { nQuizInputStyles, nQuizSubmitButtonStyles } from "./NQuizInput.css";
import { theme } from "@watermelon-clap/core";

export const NQuizInput = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = () => {
    console.log("제출된 답안:", inputValue);
    setInputValue("");
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div css={[theme.flex.between]}>
      <input
        css={nQuizInputStyles}
        placeholder="정답 입력하기"
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyDown}
      />
      <Button css={nQuizSubmitButtonStyles} onClick={handleSubmit}>
        제출하기
      </Button>
    </div>
  );
};
