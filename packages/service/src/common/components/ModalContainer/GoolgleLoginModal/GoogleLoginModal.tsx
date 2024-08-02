import Modal from "react-modal";
import { Button, ButtonVariant } from "../../Button";
import { useScrollStop } from "@service/common/hooks/useScrollStop";
import { useAuth } from "@service/common/hooks/useAuth";
import { theme } from "@watermelon-clap/core";
import {
  googleLoginModalStyles,
  googleLoginModalBodyStyles,
} from "./GoogleLoginModal.css";

export interface GoogleLoginModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const GoogleLoginModal = ({
  isOpen,
  onRequestClose,
}: GoogleLoginModalProps) => {
  const { login } = useAuth();

  useScrollStop(isOpen);

  return (
    <Modal
      shouldCloseOnEsc
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={googleLoginModalStyles}
      ariaHideApp={false}
    >
      <div css={googleLoginModalBodyStyles}>
        <h2 css={theme.font.pretend.bold.titleB28}>로그인하기</h2>
        <span>
          <p css={theme.font.pretend.medium.bodyM20}>
            Google 로그인을 진행해야
          </p>
          <p css={theme.font.pretend.medium.bodyM20}>
            뽑기를 진행하실 수 있습니다.
          </p>
        </span>
        <Button variant={ButtonVariant.SHORT} onClick={login}>
          Google 로그인하기
        </Button>
      </div>
    </Modal>
  );
};
