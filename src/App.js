import React, { useState, useEffect } from "react";
import Sizeplus from "./Sizeplus";
import Sizeminus from "./Sizeminus";
import Panel from "./Panel";
import "./css/bootstrap.css";
import "./css/style.css";
import "./css/listitems.css";
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
  const [fontPt, setfontPt] = useState(14);
  const [fontFm, setfontFm] = useState("Georgia");
  const [align, setalign] = useState("left");
  const [cildTeg, setcildTeg] = useState("");
  const [imgWidth, setimgWidth] = useState("auto");
  const [imgHeight, setimgHeight] = useState("auto");
  const [imgPadding, setimgPadding] = useState("0");
  const [imgdisplay, setimgdisplay] = useState("none");
  const [imgurls, setimgurls] = useState("");
  const [imgFloat, setimgFloat] = useState("none");

  function interat(sizesplus, sizesminus, bol) {
    return bol === true ? sizesplus : sizesminus;
  }

  function ititalTegs() {
    let text_block = document.querySelector(".text_block");
    return Object.values(text_block.children);
  }

  function izmtegs(ititalTegs, textbl, tegs, items) {
    ititalTegs()
      .filter((x, i) => i === items)
      .map(
        (s) =>
          (s.outerHTML =
            "<" +
            textbl +
            ' class = "' +
            s.className +
            '" >' +
            s.innerHTML +
            "</" +
            textbl +
            ">")
      );
  }
  function updateElements(
    ititalTegs,
    setselectedtext,
    setSelectedTextLen,
    setSelectedTextAncor,
    setSelectedTextFocus,
    setitems,
    settegs,
    setfontPt,
    setfontFm,
    setalign
  ) {
    ititalTegs().map(
      (x, i) =>
        (x.onclick = () => {
          setitems(i);
          settegs(x.tagName);
          setfontPt(
            x.style.fontSize.replace(/[a-z]+/, "") === ""
              ? 14
              : x.style.fontSize.replace(/[a-z]+/, "")
          );
          setfontFm(x.style.fontFamily ? x.style.fontFamily : "Georgia");
          setalign(x.style.textAlign ? x.style.textAlign : "left");
          x.tabIndex = 0;
        })
    );
    ititalTegs().map(
      (x, i) =>
        (x.onmousemove = () => {
          setselectedtext(window.getSelection().toString());
          setSelectedTextLen(window.getSelection().toString().length);
          setSelectedTextAncor(window.getSelection().anchorOffset);
          setSelectedTextFocus(window.getSelection().focusOffset);
        })
    );
  }

  function focusText(items, selectedtext) {
    let text_block = document.querySelector(".text_block");
    Object.values(text_block.children)
      .filter((x, i) => i === items)
      .map((s) => selectedtext);
  }

  function listItem(ititalTegs, items, list) {
    ititalTegs()
      .filter((x, i) => i === items)
      .map(
        (p) =>
          (p.innerHTML =
            "<" + list + "><li>" + p.innerHTML + "</" + list + "></ul>")
      );
  }

  function types(
    ititalTegs,
    items,
    selectedtext,
    teg,
    selectedTextAncor = 0,
    selectedTextFocus = 0
  ) {
    ititalTegs().map((x, i) =>
      i === items
        ? console.log(
            (x.innerHTML = x.innerHTML.replace(
              selectedtext,
              "<" + teg + ">" + selectedtext + "</" + teg + ">"
            ))
          )
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
      i === items ? (x.style.fontFamily = fontFm) : ""
    );
  }
  function aligns(ititalTegs, items, align) {
    ititalTegs().map((x, i) =>
      i === items ? (x.style.textAlign = align) : ""
    );
  }

  function cleanerTxt(ititalTegs, items) {
    ititalTegs().map((x, i) =>
      i === items ? (x.outerHTML = "<div>" + x.innerText + "</div>") : ""
    );
  }

  useEffect(() => {
    focusText(items, selectedtext);
    ititalTegs().map((x) =>
      Object.values(x.children).map(
        (el) =>
          (el.onclick = function (e) {
            setcildTeg(e.target.tagName);
            e.target.style.width = imgWidth + "px";
            e.target.style.height = imgHeight + "px";
            setimgurls(e.target.src);
            e.target.style.padding = imgPadding + "px";
            e.target.style.float = imgFloat;
            setimgdisplay("block");
          })
      )
    );
    //imgCreate(ititalTegs, items, imgurls)
  }, [items, selectedtext, imgWidth, imgHeight, imgPadding, imgFloat]);
  //
  useEffect(() => {
    onmousemove = (e) => setx(e.x);
  }, []);

  useEffect(() => {
    updateElements(
      ititalTegs,
      setselectedtext,
      setSelectedTextLen,
      setSelectedTextAncor,
      setSelectedTextFocus,
      setitems,
      settegs,
      setfontPt,
      setfontFm,
      setalign
    );
  }, [items, tegs, textbl, xs]);

  return (
    <div className="contentDtext">
      <div className={sizes === true ? "cintent_text" : "cintent_text_full"}>
        <div className="row col text-right pt-2 panel">
          <Panel
            settextbl={settextbl}
            setitemss={setitemss}
            setfontPt={setfontPt}
            setfontFm={setfontFm}
            setalign={setalign}
            setimgWidth={setimgWidth}
            setimgHeight={setimgHeight}
            setimgurls={setimgurls}
            items={items}
            imgurls={imgurls}
            imgdisplay={imgdisplay}
            cildTeg={cildTeg}
            selectedtext={selectedtext}
            selectedTextAncor={selectedTextAncor}
            selectedTextFocus={selectedTextFocus}
            tegs={tegs}
            fontPt={fontPt}
            fontFm={fontFm}
            align={align}
            setimgPadding={setimgPadding}
            setimgFloat={setimgFloat}
            setimgdisplay={setimgdisplay}
            fonts={fonts}
            fontsFm={fontsFm}
            ititalTegs={ititalTegs}
            izmtegs={izmtegs}
            aligns={aligns}
            listItem={listItem}
            types={types}
            cleanerTxt={cleanerTxt}
          />

          <div
            className="col-sm sizes"
            onClick={() => setsizes(sizes === true ? false : true)}
          >
            <div> {sizes === true ? <Sizeplus /> : <Sizeminus />}</div>
          </div>
        </div>

        <div
          className="text_block"
          contentEditable="true"
          onKeyPress={(e) => {
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
