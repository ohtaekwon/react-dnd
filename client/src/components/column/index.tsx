import React from "react";
import { Props } from "./index.types";

const Column = ({ isOver, children }: React.PropsWithChildren<Props>) => {
  const className = isOver ? " highlight-region" : "";

  return <div className={`col${className}`}>{children}</div>;
};
export default Column;
