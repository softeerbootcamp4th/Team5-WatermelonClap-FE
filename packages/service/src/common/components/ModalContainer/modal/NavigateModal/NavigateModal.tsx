import Modal from "react-modal";
import { Button, ButtonVariant } from "../../../Button";
import { useScrollStop } from "@watermelon-clap/core/src/hooks";
import { theme } from "@watermelon-clap/core/src/theme";
import {
  navigatgeModalStyles,
  navigatgeModalBodyStyles,
  navigateButtonStyle,
} from "./NavigateModal.css";
import { ReactNode } from "react";
import { DefaultModalProps } from "../../ModalContainer";
import { NEW_CAR_PAGE_ROUTE } from "@service/constants/routes";

export interface NavigateModalProps extends DefaultModalProps {
  title: ReactNode;
  content: ReactNode;
  navigateUrl?: string;
  navigateButtonContent?: string;
}

export const NavigateModal = ({
  isOpen,
  onRequestClose,
  title,
  content,
  navigateUrl = NEW_CAR_PAGE_ROUTE,
  navigateButtonContent = "아반떼 N 페이지로",
}: NavigateModalProps) => {
  useScrollStop(isOpen);

  const handleNavigate = () => {
    window.open(navigateUrl, "_blank");
  };

  return (
    <Modal
      shouldCloseOnEsc
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={navigatgeModalStyles}
      ariaHideApp={false}
    >
      <div css={navigatgeModalBodyStyles}>
        {title}
        <div>{content}</div>
        <div css={[theme.flex.center, theme.gap.gap12]}>
          <Button
            variant={ButtonVariant.SHORT}
            css={navigateButtonStyle}
            onClick={handleNavigate}
          >
            {navigateButtonContent}
          </Button>
          <Button
            variant={ButtonVariant.SHORT}
            css={navigateButtonStyle}
            onClick={onRequestClose}
          >
            확인
          </Button>
        </div>
      </div>
    </Modal>
  );
};
