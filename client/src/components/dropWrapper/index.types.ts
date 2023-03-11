import type { HTMLAttributes } from "react";
import { Status } from "types";

export interface DropWrapperProps {}

export interface Props extends HTMLAttributes<HTMLElement>, DropWrapperProps {
  onDrop: any;
  status: string;
}
