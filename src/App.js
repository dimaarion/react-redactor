import React, { useState, useEffect } from "react";
import Sizeplus from "./Sizeplus";
import Sizeminus from "./Sizeminus";
import Panel from "./Panel";
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
  const [selectedTextFocus, setSelectedTextFocus] = useState(0);
  const [fontPt, setfontPt] = useState(9);
  const [fontFm, setfontFm] = useState("Georgia, serif");
 
  function interat(sizesplus, sizesminus, bol) {
    return bol === true ? sizesplus : sizesminus;
  }

  function ititalTegs() {
    let text_block = document.querySelector(".text_block");
    return Object.values(text_block.children);
  }

  function izmtegs(ititalTegs, textbl, tegs, items) {
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
  function updateElements(
    ititalTegs,
    setselectedtext,
    setSelectedTextLen,
    setSelectedTextAncor,
    setSelectedTextFocus
  ) {
    ititalTegs().map(
      (x, i) => (
        (x.onclick = () => {
          setitems(i);
          settegs(x.tagName);
          x.tabIndex = 0;
        }),
        (x.onmousemove = () => {
          setselectedtext(window.getSelection().toString());
          setSelectedTextLen(window.getSelection().toString().length);
          setSelectedTextAncor(window.getSelection().anchorOffset);
          setSelectedTextFocus(window.getSelection().focusOffset);
        })
      )
    );
  }

  function focusText(items, selectedtext) {
    let text_block = document.querySelector(".text_block");
    let j = Object.values(text_block.children)
      .filter((x, i) => i === items)
      .map(s => selectedtext);
  }

  function test(ititalTegs, items, t, selectedtext) {
    let re = new RegExp(
      selectedtext + "{1," + (selectedTextAncor + 1) + "}",
      "i"
    );
    ititalTegs().map((x, i) =>
      i === items
        ? (x.innerHTML = x.innerText.replace(
            re,
            "<" + t + ">" + selectedtext + "</" + t + ">"
          ))
        : ""
    );
  }

  function fonts(ititalTegs, items, fontPt) {
    ititalTegs().map((x, i) =>
      i === items ? (x.style.fontSize = fontPt + "pt") : ""
    );
  }
  function fontsFm(ititalTegs, items, fontFm) {
    ititalTegs().map((x, i) =>
      i === items ? (x.style.fontFamily = fontFm + ', sans-serif') : ""
    );
  }
  useEffect(() => {
    fonts(ititalTegs, items, fontPt);
  }, [fontPt]);
  useEffect(() => {
    fontsFm(ititalTegs, items, fontFm);
  }, [fontFm]);
  useEffect(() => {
    focusText(items, selectedtext);
  }, [items, selectedtext]);

  useEffect(() => {
    onmousemove = e => setx(e.x);
   
  }, []);
  useEffect(() => {
    document.head.appendChild(document.createElement('Link')).setAttribute('href','https://fonts.googleapis.com/css2?family=Commissioner:wght@100;200;300;400;500;600;900&family=Montserrat:wght@100&family=Open+Sans:wght@300&family=Roboto:wght@100&display=swap" rel="stylesheet')
  }, []);
  useEffect(() => {
    updateElements(
      ititalTegs,
      setselectedtext,
      setSelectedTextLen,
      setSelectedTextAncor,
      setSelectedTextFocus
    );
  }, [items, tegs, textbl, xs]);
  useEffect(() => {
    izmtegs(ititalTegs, textbl, tegs, items, selectedtext);
  }, [textbl, itemss]);
  return (
    <div className="contentDtext">
      {items + " " + tegs + " " + textbl}
      <div className={sizes === true ? "cintent_text" : "cintent_text_full"}>
        <div className="row col text-right pt-2 panel">
          <div onClick={() => test(ititalTegs, items, "h1", selectedtext)}>
            test
          </div>
          <Panel
            settextbl={settextbl}
            setitemss={setitemss}
            items={items}
            setfontPt={setfontPt}
            setfontFm={setfontFm}
          />

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
            updateElements(
              ititalTegs,
              setselectedtext,
              setSelectedTextLen,
              setSelectedTextAncor,
              setSelectedTextFocus
            );
          }}
        />
      </div>
    </div>
  );
}
export default App;
