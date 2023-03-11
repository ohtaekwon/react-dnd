import type { HTMLAttributes } from "react";

export interface WindowProps {}

export interface Props extends HTMLAttributes<HTMLElement>, WindowProps {
  item: any;
  onClose: () => void;
  show: boolean;
}
