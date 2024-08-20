import Modal from "react-modal";
import { Button } from "../../../Button";
import { useScrollStop, useAuth } from "@watermelon-clap/core/src/hooks";
import { theme } from "@watermelon-clap/core/src/theme";
import {
  googleLoginModalStyles,
  googleLoginModalBodyStyles,
} from "./GoogleLoginModal.css";
import { DefaultModalProps } from "../../ModalContainer";

export const GoogleLoginModal = ({
  isOpen,
  onRequestClose,
}: DefaultModalProps) => {
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
        <h2 css={theme.font.preB28}>로그인하기</h2>
        <span>
          <p css={theme.font.preM20}>Google 로그인을 진행해야</p>
          <p css={theme.font.preM20}>뽑기를 진행하실 수 있습니다.</p>
        </span>
        <Button onClick={login}>Google 로그인하기</Button>
      </div>
    </Modal>
  );
};
