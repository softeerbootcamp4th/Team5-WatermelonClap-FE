import styled from "@emotion/styled";

export const Space = styled.div<{ size: number }>`
  margin: ${(p) => p.size}px 0;
`;
