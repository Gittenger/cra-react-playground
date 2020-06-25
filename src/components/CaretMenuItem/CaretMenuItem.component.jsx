import React, { useState } from "react";

import { ReactComponent as CaretClosed } from "../../assets/caret-right.svg";
import { ReactComponent as CaretOpen } from "../../assets/caret-down.svg";
import { CaretMenuItemContainer } from "./CaretMenuItem.styles.jsx";

const CaretMenuItem = () => {
  const [menuActive, setMenuActive] = useState(false);

  const Caret = (function () {
    return menuActive ? CaretOpen : CaretClosed;
  })();

  return (
    <CaretMenuItemContainer className={menuActive ? "active" : ""}>
      <Caret />
      <button onClick={() => setMenuActive(!menuActive)}>
        <h4>Title</h4>
      </button>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
      </ul>
    </CaretMenuItemContainer>
  );
};

export default CaretMenuItem;
