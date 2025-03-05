import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectedItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectedItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  function emptyCheck() {
    if (items.length === 0) {
      return <h1>no data</h1>;
    } else {
      return (
        <>
          <h1>{heading}</h1>
          <ul className="list-group">
            {items.map((name, index) => {
              return (
                <li
                  key={index}
                  className={
                    selectedIndex === index
                      ? "list-group-item active"
                      : "list-group-item"
                  }
                  onClick={() => {
                    setSelectedIndex(index);
                    onSelectedItem(name);
                  }}
                >
                  {name}
                </li>
              );
            })}
          </ul>
        </>
      );
    }
  }

  return <>{emptyCheck()}</>;
}

export default ListGroup;
