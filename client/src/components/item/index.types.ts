import type { HTMLAttributes } from "react";
import { StatusesType } from "types";

export interface ItemProps {}

export interface Props extends HTMLAttributes<HTMLElement>, ItemProps {
  item: any;
  index: number;
  moveItem: (dragIndex: number, hoverIndex: number) => void;
  status: StatusesType;
}
