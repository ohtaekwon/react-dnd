import React, { ReactElement } from "react";
import { useDrop } from "react-dnd";
import { ItemType, ITEM_TYPE } from "types";
import { statuses } from "data";
import { Props } from "./index.types";

const DropWrapper = ({
  onDrop,
  status,
  children,
}: React.PropsWithChildren<Props>) => {
  const [{ isOver }, dropRef] = useDrop<any, void, { isOver: boolean }>({
    accept: ITEM_TYPE,
    canDrop:
      /**
       * boolean 값으로 반환을 한다.
       */
      (item: ItemType, monitor) => {
        const itemIndex = statuses.findIndex((si) => si.status === item.status);
        const statusIndex = statuses.findIndex((si) => si.status === status);
        return [itemIndex + 1, itemIndex - 1, itemIndex].includes(statusIndex);
      },
    drop: (item, monitor) => {
      onDrop(item, monitor, status);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div ref={dropRef} className="drop-wrapper">
      {React.cloneElement(children as ReactElement, { isOver })}
    </div>
  );
};
export default DropWrapper;
