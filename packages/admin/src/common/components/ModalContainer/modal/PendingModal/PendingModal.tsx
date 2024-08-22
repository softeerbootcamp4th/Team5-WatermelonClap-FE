import Modal from "react-modal";
import { useScrollStop } from "@watermelon-clap/core/src/hooks";
import { theme } from "@watermelon-clap/core/src/theme";
import {
  pendingModalStyles,
  pendingModalBodyStyles,
  pendingImgStyle,
} from "./PendingModal.css";
import { DefaultModalProps } from "../../ModalContainer";
import { css } from "@emotion/react";

export const PendingModal = ({ isOpen, onRequestClose }: DefaultModalProps) => {
  useScrollStop(isOpen);

  return (
    <Modal
      shouldCloseOnEsc={false}
      shouldCloseOnOverlayClick={false}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={pendingModalStyles}
      ariaHideApp={false}
    >
      <div css={pendingModalBodyStyles}>
        <h2>당첨자 추첨</h2>
        <span>
          <p>당첨자를 추첨중입니다.</p>
          <p>잠시만 기다려주세요.</p>
        </span>
        <div
          css={css`
            overflow: hidden;
            ${theme.flex.center};
            height: 40px;
          `}
        >
          <img
            css={pendingImgStyle}
            src="/images/modal/pending.gif"
            alt="로딩중 이미지"
          />
        </div>
      </div>
    </Modal>
  );
};
