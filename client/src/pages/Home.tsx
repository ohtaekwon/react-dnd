import React from "react";
import Item from "components/item";
import DropWrapper from "components/dropWrapper";
import Column from "components/column";
import { data, statuses } from "data";

const HomePage = () => {
  const [items, setItems] = React.useState(data);

  const onDrop = (item: any, monitor: any, status: any) => {
    const mapping = statuses.find((si) => si.status === status);
    setItems((prevState) => {
      const newItem = prevState
        .filter((i) => i.id !== item.id)
        .concat({ ...item, status, icon: mapping?.icon });

      return [...newItem];
    });
  };
  const moveItem = (dragIndex: number, hoverIndex: number) => {
    const item = items[dragIndex];
    setItems((prevState) => {
      const newItems = prevState.filter((i, idx) => idx !== dragIndex);
      newItems.splice(hoverIndex, 0, item);
      return [...newItems];
    });
  };

  return (
    <div className="row">
      {statuses.map((s) => {
        return (
          <div key={s.status} className="col-wrapper">
            <h2 className="col-header">{s.status.toUpperCase()}</h2>
            <DropWrapper onDrop={onDrop} status={s.status}>
              <Column isOver={false}>
                {items
                  .filter((i) => i.status === s.status)
                  .map((i, idx) => (
                    <Item
                      key={i.id}
                      index={idx}
                      item={i}
                      moveItem={moveItem}
                      status={s}
                    />
                  ))}
              </Column>
            </DropWrapper>
          </div>
        );
      })}
    </div>
  );
};

export default HomePage;
