import React, { useState, useEffect } from "react";
import Sizeplus from "../Sizeplus";
import Sizeminus from "../Sizeminus";
import Panel from "../Panel";
import "draft-js/dist/Draft.css";
import "./style.css";
import "./bootstrap.css";
function App() {
  const [sizes, setsizes] = useState(true);
  const [textcont, settextcont] = useState(false);
  const [textbl, settextbl] = useState("");
  const [headerT, setheaderT] = useState("unstyled***");
  const [headerType, setheaderType] = useState("div");
  const [items, setitems] = useState(0);

  function interat(sizesplus, sizesminus, bol) {
    return bol === true ? sizesplus : sizesminus;
  }
  function test(e) {
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
    let text_block = document.querySelector(".text_block");
    let d = Object.values(text_block.getElementsByTagName("div"));
    let f = 1;
    f = f + 1;

    let y = d.map((el, i) => (el.className = "item-" + (i + 1)));
    let c = Object.values(text_block.getElementsByClassName("item-" + items));
    console.log(c)
    d.map((el, i) => (el.onclick = els => setitems(i + 1)));
  }
   
  useEffect(() => {}, [items]);
  return (
    <div className="contentDtext">
      {items}
      <div className={sizes === true ? "cintent_text" : "cintent_text_full"}>
        <div className="row col text-right pt-2 panel">
          <Panel setheaderType={setheaderType} />
          <div
            onClick={() => {
              let text_block = document.querySelector(".text_block");
              let d = Object.values(text_block.getElementsByClassName("item-" + items));
           ( d[0] !== undefined)? d[0].outerHTML = '<h1 class = "item-"'+ items +' >' + d[0].innerText + '</h1>':''
           console.log(d)
            }}
          >
            test
          </div>
          <div
            className="col-sm"
            className="sizes"
            onClick={() => setsizes(sizes === true ? false : true)}
          >
            <div> {sizes === true ? <Sizeplus /> : <Sizeminus />}</div>
          </div>
        </div>

        <div
          className="text_block"
          contentEditable="true"
          onKeyPress={e => test(e)}
        />
      </div>
    </div>
  );
}
export default App;
