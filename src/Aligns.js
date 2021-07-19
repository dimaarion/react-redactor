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
    <table className="aligns">
      <tbody>
        <tr>
          <Lineleft
            find={props.find}
            setActive={props.setActive}
            active={props.active}
            typeStyle={props.typeStyle}
            itemsLine={itemsLine}
            setitemsLine={setitemsLine}
            a={"left"}
            align={props.align}
            aligns={props.aligns}
            style={{ height: "auto" }}
            ititalTegs={props.ititalTegs}
            items={props.items}
            setSelectPanelDicplay={props.setSelectPanelDicplay}
          />
          <Linecenter
            find={props.find}
            setActive={props.setActive}
            active={props.active}
            itemsLine={itemsLine}
            setitemsLine={setitemsLine}
            a={"center"}
            aligns={props.aligns}
            style={{ height: "auto" }}
            ititalTegs={props.ititalTegs}
            items={props.items}
            setSelectPanelDicplay={props.setSelectPanelDicplay}
          />
          <Lineright
            find={props.find}
            setActive={props.setActive}
            active={props.active}
            itemsLine={itemsLine}
            setitemsLine={setitemsLine}
            a={"right"}
            aligns={props.aligns}
            style={{ height: "auto" }}
            ititalTegs={props.ititalTegs}
            items={props.items}
            setSelectPanelDicplay={props.setSelectPanelDicplay}
          />
        </tr>
      </tbody>
    </table>
  );
}
export default Aligns;
