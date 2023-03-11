import type { HTMLAttributes, ReactNode } from "react";

export interface ColumnProps {}

export interface Props extends HTMLAttributes<HTMLElement>, ColumnProps {
  isOver: boolean;
}
