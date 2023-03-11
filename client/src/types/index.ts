export const ITEM_TYPE = "ITEM" as const;

/**
 * Item 타입
 */
export type Status = "open" | "in progress" | "in review" | "done";
export type ItemType = {
  id: number;
  icon: string;
  status: Status;
  title: string;
  content: string;
};

export type StatusesType = {
  status: string;
  icon: string;
  color: string;
};
