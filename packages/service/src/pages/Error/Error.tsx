import { FallbackProps } from "react-error-boundary";
import { errorContainerStyle, errorMessageStyle } from "./Error.css";
import { Button } from "@service/common/components/Button";
import { theme } from "@watermelon-clap/core";
import { useNavigate } from "react-router-dom";

export const Error = ({ error, resetErrorBoundary }: FallbackProps) => {
  const navigate = useNavigate();
  let errorMessage;

  switch (error.message) {
    case "403":
      errorMessage = "접근 금지: 이 리소스에 접근할 권한이 없습니다.";
      break;
    case "404":
      errorMessage =
        "페이지를 찾을 수 없습니다: 요청하신 리소스를 찾을 수 없습니다.";
      break;
    case "400":
      errorMessage =
        "잘못된 요청: 요청이 이해되지 않거나 필요한 매개변수가 누락되었습니다.";
      break;
    case "500":
      errorMessage = "서버 오류: 잠시 후 다시 시도해 주세요.";
      break;
    default:
      errorMessage = "예기치 못한 오류가 발생했습니다.";
  }

  const handleHomeRedirect = () => {
    navigate("/");
    window.location.reload();
  };

  return (
    <div role="alert" css={errorContainerStyle}>
      <pre css={errorMessageStyle}>{errorMessage}</pre>
      <div css={[theme.flex.center, theme.gap.gap24]}>
        <Button onClick={handleHomeRedirect}>홈으로</Button>
        <Button onClick={resetErrorBoundary}>다시 시도</Button>
      </div>
    </div>
  );
};
