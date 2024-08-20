import { FallbackProps } from "react-error-boundary";
import { errorContainerStyle, errorMessageStyle, loginText } from "./Error.css";
import { Button, ButtonVariant } from "@service/common/components/Button";
import { theme } from "@watermelon-clap/core/src/theme";
import { useNavigate } from "react-router-dom";
import { useErrorBoundary } from "react-error-boundary";
import { GlobalNavigationBar } from "@service/common/components/GlobalNavigationBar";
import { Space } from "@service/common/styles/Space";
import { useAuth } from "@watermelon-clap/core/src/hooks";

export const Error = ({ error, resetErrorBoundary }: FallbackProps) => {
  const navigate = useNavigate();
  const { resetBoundary } = useErrorBoundary();
  let errorMessage;

  const { login } = useAuth();

  switch (error.message) {
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

  const handleLogin = () => {
    login().then(() => {
      resetBoundary();
      location.reload();
    });
  };
  const handleHomeRedirect = () => {
    navigate("/");
    resetBoundary();
  };

  return (
    <>
      <GlobalNavigationBar />
      <div role="alert" css={errorContainerStyle}>
        {error.message === "403" ? (
          <div css={theme.flex.column}>
            <h1 css={loginText}>로그인이 필요한 서비스입니다</h1>
            <Space size={20} />
            <Button variant={ButtonVariant.LONG} onClick={handleLogin}>
              로그인
            </Button>
          </div>
        ) : (
          <>
            <pre css={errorMessageStyle}>{errorMessage}</pre>
            <div css={[theme.flex.center, theme.gap.gap24]}>
              <Button onClick={handleHomeRedirect}>홈으로</Button>
              <Button onClick={resetErrorBoundary}>다시 시도</Button>
            </div>
          </>
        )}
      </div>
    </>
  );
};
