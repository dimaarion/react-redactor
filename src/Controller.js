import React, { useState, useEffect } from "react";
import Panel from "./Panel";
import "./css/bootstrap.css";
import "./css/style.css";
import "./css/listitems.css";
import "./css/table.css";

function Controller(props) {
  const baseSelector = props.baseSelector;
  const textId = props.textId;
  const textAreraId = props.textAreraId;
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
  const [textBox, settextBox] = useState("");
  const [itemsElT, setitemsElT] = useState(0);
  const [windSize, setwindSize] = useState(100);
  const [panelStyle, setpanelStyle] = useState({ position: "relative" });
  const [eX, seteX] = useState(0);
  const [eY, seteY] = useState(0);
  const [urlRemove, seturlRemove] = useState("");
  const [gTags, setgTags] = useState({});

  function ititalTegs() {
    let text_block = document.querySelector("." + baseSelector);
    return Object.values(text_block.children);
  }

  function innerTextBox() {
    return document.querySelector("." + baseSelector).innerHTML;
  }

  function getStart(baseSelector) {
    let bSelector = document.getElementsByClassName(baseSelector)[0];
    bSelector.innerHTML = "<div class='strStart'>text</div>";
    let strStart = document.getElementsByClassName("strStart");
    strStart = Array.from(strStart);
    function integer(e) {
      return (e.target.innerText = "");
    }
    strStart.map((x) => x.addEventListener("click", integer, { once: true }));
  }

  function elMoveUpDown(ititalTegs, baseSelector) {
    let c = 0;
    ititalTegs().map((x) => x.setAttribute("data-d", "1" + c++));
  }
  function izmtegs(ititalTegs, textbl, tegs, items) {
    let dataD = " data-d=1" + items;
    let brackedL = "<";
    let brackedR = ">";
    let brackedS = "</";
    ititalTegs()
      .filter((f, i) => i === items)
      .map(
        (s) =>
          (s.outerHTML =
            brackedL +
            textbl +
            dataD +
            brackedR +
            s.innerHTML +
            brackedS +
            textbl +
            brackedR)
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

  function listItem(ititalTegs, items, list, subList) {
    let c = 0;
    let dataD = " data-d=1" + items;
    let dataS = " data-s=2";
    let brackedL = "<";
    let brackedR = " >";
    let brackedS = "</";
    ititalTegs()
      .filter((x, i) => i === items)
      .map(
        (p) =>
          (p.outerHTML =
            brackedL +
            list +
            dataD +
            brackedR +
            brackedL +
            subList +
            dataS +
            brackedR +
            p.innerHTML +
            brackedS +
            subList +
            brackedR +
            brackedS +
            list +
            brackedR)
      );
  }

  function createTable(bas, it) {
    let bs = document.querySelector("." + bas);
    let div = document.createElement("div");
    let tb = document.createElement("table");
    document.body.appendChild(div);
    document.body.appendChild(tb);
    tb.className = `tb${it} table table-hover`;
    Array.from(bs.children)
      .filter((f, i) => i === it)
      .map((x) => x.appendChild(div));
    div.appendChild(tb);
  }

  function createTr(bs, it, trn) {
    let tb = document
      .getElementsByClassName(bs)[0]
      .getElementsByClassName("tb" + it)[0];
    for (let i = 0; i < trn; i++) {
      let tr = document.createElement("tr");
      tr = document.body.appendChild(tr);
      tr.className = "tableTr" + i;
      tb.appendChild(tr);
    }
  }

  function createTd(bs, trn, tdn) {
    for (let i = 0; i < trn; i++) {
      let tr = document
        .getElementsByClassName(bs)[0]
        .getElementsByClassName("tableTr" + i)[0];
      for (let j = 0; j < tdn; j++) {
        let td = document.createElement("td");
        td = document.body.appendChild(td);
        td.className = "itemsTd";
        tr.appendChild(td);
      }
    }
  }

  function types(
    ititalTegs,
    items,
    selectedtext,
    teg,
    selectedTextAncor = 0,
    selectedTextFocus = 0
  ) {
    if (selectedtext.length > 0) {
      ititalTegs()
        .filter((f, i) => i === items)
        .map(
          (x, i) =>
            (x.innerHTML = x.innerHTML.replace(
              selectedtext,
              "<" + teg + ">" + selectedtext + "</" + teg + ">"
            ))
        );
    }
  }

  function fonts(ititalTegs, items, fontPt) {
    ititalTegs()
      .filter((f, i) => i === items)
      .map((x) => (x.style.fontSize = fontPt + "pt"));
  }
  function fontsFm(ititalTegs, items, fontFm) {
    ititalTegs()
      .filter((f, i) => i === items)
      .map((x) => (x.style.fontFamily = fontFm));
  }
  function aligns(ititalTegs, items, align) {
    ititalTegs()
      .filter((f, i) => i === items)
      .map((x) => (x.style.textAlign = align));
  }

  function cleanerTxt(ititalTegs, items) {
    ititalTegs()
      .filter((f, i) => i === items)
      .map((x) => (x.outerHTML = `<div data-d=1${items}>${x.innerText}</div>`));
  }

  function imgWidthR(ititalTegs, imgurls, imgWidth) {
    ititalTegs().map((x) =>
      Object.values(x.getElementsByTagName("img"))
        .filter(
          (l) =>
            "/" +
              l.src
                .split("/")
                .filter((f, i) => i > 2)
                .join("/") ===
            imgurls
        )
        .map((ed) => (ed.style.width = imgWidth))
    );
  }
  function imgHeightR(ititalTegs, imgurls, imgHeight) {
    ititalTegs().map((x) =>
      Object.values(x.getElementsByTagName("img"))
        .filter(
          (l) =>
            "/" +
              l.src
                .split("/")
                .filter((f, i) => i > 2)
                .join("/") ===
            imgurls
        )
        .map((ed) => (ed.style.height = imgHeight))
    );
  }
  function imgPaddingR(ititalTegs, imgurls, imgPadding) {
    ititalTegs().map((x) =>
      Object.values(x.getElementsByTagName("img"))
        .filter(
          (l) =>
            "/" +
              l.src
                .split("/")
                .filter((f, i) => i > 2)
                .join("/") ===
            imgurls
        )
        .map((ed) => (ed.style.padding = imgPadding))
    );
  }

  function imgFloatR(ititalTegs, imgurls, imgFloat) {
    ititalTegs().map((x) =>
      Object.values(x.getElementsByTagName("img"))
        .filter(
          (l) =>
            "/" +
              l.src
                .split("/")
                .filter((f, i) => i > 2)
                .join("/") ===
            imgurls
        )
        .map((ed) => (ed.style.float = imgFloat))
    );
  }

  function mTop(setwindSize) {
    window.onresize = function (e) {
      setwindSize(window.innerWidth);
    };
  }
  function clicEvEl(setgTags) {
    [
      "div",
      "h1",
      "img",
      "h2",
      "h3",
      "b",
      "i",
      "u",
      "ul",
      "li",
      "ol",
      "s",
      "em",
      "strong",
      "p"
    ].map((x) =>
      Array.from(document.getElementsByClassName(baseSelector)).map((x2) =>
        Array.from(x2.getElementsByTagName(x)).map((x3) =>
          x3.addEventListener("click", (e) => {
            setgTags({ teg: e.target.tagName, link: e.target.href });
          })
        )
      )
    );
  }
  useEffect(() => {
    clicEvEl(setgTags);
    getStart(baseSelector);
  }, []);

  useEffect(() => {
    mTop(setwindSize);
  }, [windSize]);

  useEffect(
    function () {
      imgPaddingR(ititalTegs, imgurls, imgPadding);
    },
    [imgPadding]
  );
  useEffect(
    function () {
      imgWidthR(ititalTegs, imgurls, imgWidth);
    },
    [imgWidth]
  );

  useEffect(
    function () {
      imgHeightR(ititalTegs, imgurls, imgHeight);
    },
    [imgHeight]
  );
  useEffect(
    function () {
      imgFloatR(ititalTegs, imgurls, imgFloat);
    },
    [imgurls, imgFloat]
  );

  useEffect(() => {
    ititalTegs().map((x) =>
      Object.values(x.getElementsByTagName("img")).map(
        (el, ix) =>
          (el.onclick = function (e) {
            setitemsElT(ix);
            setcildTeg(e.target.tagName);
            setimgWidth(e.target.width);
            setimgHeight(e.target.height);
            setimgPadding(
              (e.target.style.padding = e.target.style.padding + "px")
            );
            seteX(e.x);
            seteY(e.y);
            setimgurls(
              "/" +
                e.target.src
                  .split("/")
                  .filter((f, i) => i > 2)
                  .join("/")
            );
            e.target.src =
              "/" +
              e.target.src
                .split("/")
                .filter((f, i) => i > 2)
                .join("/");
            setimgFloat(e.target.style.float);
            setimgdisplay("block");
          })
      )
    );
  }, [
    items,
    itemsElT,
    selectedtext,
    imgWidth,
    imgHeight,
    imgPadding,
    imgFloat,
    itemsElT,
    imgurls
  ]);

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
    settextBox(innerTextBox());
  }, [items, tegs, textbl, xs]);
  function createMarkup(x) {
    return { __html: document.getElementById(x).innerHTML };
  }

  return (
    <div className="contentDtext">
      <div onClick={() => createTd(baseSelector, items)}>td</div>
      <div onClick={() => createTr(baseSelector, items)}>tr</div>
      <div className={sizes === true ? "cintent_text" : "cintent_text_full"}>
        <div
          className="row container text-right p-4  panel"
          style={sizes === true ? { position: "absolute" } : panelStyle}
        >
          <Panel
            settextbl={settextbl}
            setitemss={setitemss}
            setfontPt={setfontPt}
            setfontFm={setfontFm}
            setalign={setalign}
            setimgWidth={setimgWidth}
            setimgHeight={setimgHeight}
            setimgurls={setimgurls}
            selectedtext={selectedtext}
            selectedTextAncor={selectedTextAncor}
            selectedTextFocus={selectedTextFocus}
            setimgPadding={setimgPadding}
            setimgFloat={setimgFloat}
            setimgdisplay={setimgdisplay}
            cildTeg={cildTeg}
            items={items}
            imgurls={imgurls}
            imgdisplay={imgdisplay}
            imgWidth={imgWidth}
            tegs={tegs}
            fontPt={fontPt}
            fontFm={fontFm}
            align={align}
            imgHeight={imgHeight}
            imgPadding={imgPadding}
            fonts={fonts}
            fontsFm={fontsFm}
            ititalTegs={ititalTegs}
            izmtegs={izmtegs}
            aligns={aligns}
            listItem={listItem}
            types={types}
            cleanerTxt={cleanerTxt}
            setsizes={setsizes}
            sizes={sizes}
            setpanelStyle={setpanelStyle}
            eX={eX}
            eY={eY}
            gTags={gTags}
            setgTags={setgTags}
            imgFloat={imgFloat}
            createTable={createTable}
            baseSelector={baseSelector}
            createTr={createTr}
            createTd={createTd}
          />
        </div>

        <div
          style={{ marginTop: 250 + "px", height: "100%" }}
          className={baseSelector}
          contentEditable={true}
          onClick={() => {
            clicEvEl(setgTags);
          }}
          onKeyPress={(e) => {
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
            settextBox(innerTextBox());
            clicEvEl(setgTags);
            elMoveUpDown(ititalTegs, baseSelector);
            //  startEl(baseSelector);
          }}
          dangerouslySetInnerHTML={createMarkup(textId)}
        />
      </div>
      <div className="col-sm">
        <textarea
          style={{ display: "none" }}
          defaultValue={textBox}
          name={document.querySelector(textAreraId).className}
        />
      </div>
    </div>
  );
}
export default Controller;
