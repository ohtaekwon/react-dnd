import React from "react";
import { useDrag, useDrop, XYCoord } from "react-dnd";
import { ITEM_TYPE } from "types";
import { Props } from "./index.types";
import Window from "components/window";

const Item = ({
  item,
  index,
  moveItem,
  status,
}: React.PropsWithChildren<Props>) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [, drop] = useDrop({
    accept: ITEM_TYPE,
    hover: (item: any, monitor: any) => {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoveredRect = ref.current.getBoundingClientRect();
      const hoverMiddleY = (hoveredRect.bottom - hoveredRect.top) / 2;
      const { x: mouseX, y: mouseY } = monitor.getClientOffset() as XYCoord;
      const hoverClientY = mouseY - hoveredRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      moveItem(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ITEM_TYPE,
    item: { ...item, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(), //isDragging 변수가 현재 드래깅중인지 아닌지를 리턴해주는 부분.
    }),
  });

  const [show, setShow] = React.useState(false);

  const onOpen = () => setShow(false);
  const onClose = () => setShow(false);

  drag(drop(ref));

  return (
    <React.Fragment>
      <div
        ref={ref}
        className="item"
        onClick={onOpen}
        style={{ opacity: isDragging ? 0 : 1 }}
      >
        <div className="color-bar" style={{ backgroundColor: status.color }} />
        <p className="item-title">{item.content}</p>
        <p className="item-status">{item.icon}</p>
      </div>
      <Window item={item} onClose={onClose} show={show} />
    </React.Fragment>
  );
};
export default Item;
