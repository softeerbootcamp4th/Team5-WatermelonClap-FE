import { flexStyles } from "./Flex.css";

interface FlexProps {
  flex?: number;
  className?: string;
}
export const Flex = ({ flex = 1, className }: FlexProps) => {
  return <div css={[flexStyles(flex)]} className={className} />;
};
