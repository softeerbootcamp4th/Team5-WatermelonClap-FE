import Modal from "react-modal";
import { useScrollStop } from "@watermelon-clap/core/src/hooks";
import { theme } from "@watermelon-clap/core/src/theme";
import * as style from "./PendingModal.css";
import { DefaultModalProps } from "../../ModalContainer";
import { css } from "@emotion/react";
import { MODAL_N_QUIZ_TITLE } from "../../content/modalContent";

export const PendingModal = ({ isOpen, onRequestClose }: DefaultModalProps) => {
  useScrollStop(isOpen);

  return (
    <Modal
      shouldCloseOnEsc={false}
      shouldCloseOnOverlayClick={false}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={style.pendingModalStyles}
      ariaHideApp={false}
    >
      <div css={style.pendingModalBodyStyles}>
        {MODAL_N_QUIZ_TITLE}
        <span>
          <p>선착순 이벤트에 참여 중입니다.</p>
          <p>해당 창을 닫으면 참여가 취소됩니다.</p>
        </span>
        <div
          css={css`
            overflow: hidden;
            ${theme.flex.center};
            height: 40px;
          `}
        >
          <img
            css={style.pendingImgStyle}
            src="/images/modal/pending.gif"
            alt="로딩중 이미지"
          />
        </div>
      </div>
    </Modal>
  );
};
