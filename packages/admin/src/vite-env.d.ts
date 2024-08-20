/// <reference types="vite/client" />

declare module "*.svg" {
  import * as React from "react";

  const ReactComponent: React.FunctionComponent<
    React.ComponentProps<"svg"> & { title?: string }
  >;

  const content: string;

  export { ReactComponent };
  export default content;
}
