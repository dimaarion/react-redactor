import React, { useState, useEffect } from "react";
import Sizeplus from "../Sizeplus";
import Sizeminus from "../Sizeminus";
import Panel from "../Panel";
import "draft-js/dist/Draft.css";
import "./style.css";
import "./bootstrap.css";
function App() {
  const [sizes, setsizes] = useState(true);
  const [xs, setx] = useState(0);
  const [textbl, settextbl] = useState("div");
  const [selectedtext, setselectedtext] = useState("");
  const [tegs, settegs] = useState("div");
  const [items, setitems] = useState(0);
  const [itemss, setitemss] = useState(0);
  const [selectedTextLen, setSelectedTextLen] = useState(0);
  const [selectedTextAncor, setSelectedTextAncor] = useState(0);
  function interat(sizesplus, sizesminus, bol) {
    return bol === true ? sizesplus : sizesminus;
  }

  function ititalTegs() {
    let text_block = document.querySelector(".text_block");
    return Object.values(text_block.children);
  }

  function izmtegs(ititalTegs, textbl, tegs, items, selecttedtext = "") {
    let fg = selecttedtext;
    ititalTegs()
      .filter((x, i) => x.tagName === tegs && i === items)
      .map(s => {
        s.outerHTML =
          "<" +
          textbl +
          ' class = "' +
          s.className +
          '" >' +
          s.innerText +
          "</" +
          textbl +
          ">";
      });

    //text_block.innerHTML = text_block.innerHTML.replace('<div>' + fg + '<br></div>','<'+textbl+'>' + fg + '</'+textbl+'>');
    //text_block.innerHTML = text_block.innerHTML.replace('<div>' + fg + '</div>','<'+textbl+'>' + fg + '</'+textbl+'>');
  }
  function updateElements(ititalTegs,setselectedtext,setSelectedTextLen,setSelectedTextAncor) {
    ititalTegs().map(
      (x, i) => (
        (x.onclick = () => {
          setitems(i);
          settegs(x.tagName);
          x.tabIndex = 0;
        }),
        (x.onmousemove = () =>
          {
            setselectedtext(window.getSelection().toString());
            setSelectedTextLen(window.getSelection().toString().length);
            setSelectedTextAncor(window.getSelection().anchorOffset);
          }
          
          )
      )
    );
  }

  function focusText(items, selectedtext) {
    let text_block = document.querySelector(".text_block");
    let j = Object.values(text_block.children)
      .filter((x, i) => i === items)
      .map(s => selectedtext);
  }

  function test(ititalTegs, items,t,selectedtext) {
   
    ititalTegs().map((x, i) =>
      i === items
        ? (x.innerHTML =  x.innerText.replace(selectedtext,'<'+ t +'>' + selectedtext + '</'+ t +'>'))
        : ""
    );
  }

  useEffect(() => {
    focusText(items, selectedtext);
  }, [items, selectedtext]);

  useEffect(() => {
    onmousemove = e => setx(e.x);
  }, []);
  useEffect(() => {
    updateElements(ititalTegs,setselectedtext,setSelectedTextLen,setSelectedTextAncor);
  }, [items, tegs, textbl, xs]);
  useEffect(() => {
    izmtegs(ititalTegs, textbl, tegs, items, selectedtext);
  }, [textbl, itemss]);
  return (
    <div className="contentDtext">
      {items + " " + tegs + " " + textbl}
      <div className={sizes === true ? "cintent_text" : "cintent_text_full"}>
        <div className="row col text-right pt-2 panel">
          <div
            onClick={() => test(ititalTegs,items,'b',selectedtext)}
          >
            test
          </div>
          <Panel settextbl={settextbl} setitemss={setitemss} items={items} />
          {selectedtext + selectedTextLen}
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
          onKeyPress={e => {
            updateElements(ititalTegs,setselectedtext,setSelectedTextLen,setSelectedTextAncor);
          }}
        />
      </div>
    </div>
  );
}
export default App;
