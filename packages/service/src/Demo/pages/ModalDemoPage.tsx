import { useModal } from "@watermelon-clap/core/src/hooks";
import { Button } from "@service/common/components/Button";

export const ModalDemoPage = () => {
  const { openModal } = useModal();

  const onClickButton1 = () => {
    openModal({ type: "login" });
  };

  return (
    <div>
      <Button onClick={onClickButton1}>Click Me !</Button>
    </div>
  );
};
