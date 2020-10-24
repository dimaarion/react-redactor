import React, { useState, useEffect } from "react";
import Lineleft from "./Lineleft";
import Linecenter from "./Linecenter";
import Lineright from "./Lineright";
import "./css/line.css";
function Aligns(props) {
  const [itemsLine, setitemsLine] = useState("no");

  useEffect(() => {
    setitemsLine(props.align);
  }, [props.align]);
  return (
    <div className="row  p-2 aligns">
      <Lineleft
        itemsLine={itemsLine}
        setitemsLine={setitemsLine}
        a={"left"}
        align={props.align}
        aligns={props.aligns}
        style={{ height: "auto" }}
        ititalTegs={props.ititalTegs}
        items={props.items}
      />
      <Linecenter
        itemsLine={itemsLine}
        setitemsLine={setitemsLine}
        a={"center"}
        aligns={props.aligns}
        style={{ height: "auto" }}
        ititalTegs={props.ititalTegs}
        items={props.items}
      />
      <Lineright
        itemsLine={itemsLine}
        setitemsLine={setitemsLine}
        a={"right"}
        aligns={props.aligns}
        style={{ height: "auto" }}
        ititalTegs={props.ititalTegs}
        items={props.items}
      />
    </div>
  );
}
export default Aligns;
