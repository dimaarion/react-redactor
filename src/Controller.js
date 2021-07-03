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
  const [windSize, setwindSize] = useState(100);
  const [panelStyle, setpanelStyle] = useState({ position: "relative" });
  const [eX, seteX] = useState(0);
  const [eY, seteY] = useState(0);
  const [gTags, setgTags] = useState({});
  const [find, setfind] = useState({});
  const [active, setActive] = useState(false);

  function ititalTegs(bs = false) {
    let text_block = document.querySelector("." + baseSelector);
    function textChildren(text_block) {
      return Object.values(text_block.children);
    }
    if (bs === true) {
      return text_block;
    } else {
      return textChildren(text_block);
    }
  }

  function innerTextBox() {
    return document.querySelector("." + baseSelector).innerHTML;
  }

  function getStart(baseSelector) {
    let bSelector = document.getElementsByClassName(baseSelector)[0];
    if (bSelector.innerHTML === "") {
      bSelector.innerHTML = "<div class='strStart'>Текст</div>";
    }
  }

  function elMoveUpDown(ititalTegs, baseSelector) {
    let c = 0;
    ititalTegs().map((x) => {
      return x.setAttribute("data-d", "1" + c++);
    });
  }
  function izmtegs(textbl, tegs, items) {
    let dataD = "1" + items;
    let oldteg = document.createElement(textbl);
    if (tegs.className !== "text_block") {
      rCild(oldteg, tegs, textbl);
      att(oldteg, dataD);
    }

    function att(o, d) {
      o.setAttribute("data-d", d);
      o.style.fontSize = "auto";
    }
    function rCild(o, t, te) {
      if (t.parentNode) {
        if (
          t.parentNode.tagName === "TR" ||
          t.parentNode.tagName === "UL" ||
          t.parentNode.tagName === "OL"
        ) {
          t.innerHTML = "<" + te + ">" + t.innerHTML + "</" + te + ">";
        } else {
          t.parentNode.replaceChild(o, t);

          o.innerHTML = t.innerHTML;
        }
      }
    }
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
    let oldteg = document.createElement(list);
    let dataD = "1" + items;

    function att(o, d) {
      return o.setAttribute("data-d", d);
    }
    function rCild(b, n, l, s) {
      if (b.parentNode) {
        if (b.tagName === "LI" || b.tagName === "OL") {
          b.innerHTML =
            "<" + l + "><" + s + ">" + b.innerHTML + "</" + s + "></" + l + ">";
        } else {
          b.parentNode.replaceChild(n, b);
          let li = document.body.appendChild(document.createElement(s));
          n.appendChild(li);
          li.innerHTML = b.innerHTML;
        }
      }
    }

    rCild(ititalTegs, oldteg, list, subList);
    att(oldteg, dataD);
  }

  function createTable(bas, it, w = "100%", f = "none") {
    let bs = document.querySelector("." + bas);
    let div = document.createElement("div");
    let tb = document.createElement("table");
    document.body.appendChild(div);
    document.body.appendChild(tb);
    tb.className = `tb${it} tbl`;
    tb.setAttribute("style", "width:" + w + ";float:" + f + ";");
    div.className = "divTable";
    Array.from(bs.children)
      .filter((f, i) => i === it)
      .map((x) => x.appendChild(div));
    div.appendChild(tb);
  }

  function createTr(bs, it, script, trn) {
    let tb = document
      .getElementsByClassName(bs)[0]
      .getElementsByClassName("tb" + it)[0];
    for (let i = 0; i < trn; i++) {
      let tr = document.createElement("tr");
      tr = document.body.appendChild(tr);
      tr.className = "tableTr" + i + it + script[it];
      tb.appendChild(tr);
    }
  }

  function createTd(bs, it, script, trn, tdn) {
    for (let i = 0; i < trn; i++) {
      let tr = document
        .getElementsByClassName(bs)[0]
        .getElementsByClassName("tableTr" + i + it + script[it])[0];
      for (let j = 0; j < tdn; j++) {
        let td = document.createElement("td");
        td = document.body.appendChild(td);
        td.className = "itemsTd";
        tr.appendChild(td);
      }
    }
  }

  function types(l) {
    document.execCommand("createLink", false, l);
  }

  function fonts(ititalTegs, items, fontPt) {
    return (ititalTegs.style.fontSize = fontPt + "pt");
  }
  function fontsFm(ititalTegs, items, fontFm) {
    ititalTegs()
      .filter((f, i) => i === items)
      .map((x) => (x.style.fontFamily = fontFm));
  }
  function aligns(ititalTegs, items, align) {
    ititalTegs.style.textAlign = align;
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

  useEffect(() => {
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
  useEffect(() => {
    settextBox(innerTextBox());
  }, [textBox, find, active]);
  return (
    <div className="contentDtext">
      <div className={sizes === true ? "cintent_text" : "cintent_text_full"}>
        {selectedTextFocus + " / " + items}
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
            find={find}
            setActive={setActive}
            active={active}
          />
        </div>

        <div
          style={{ marginTop: 250 + "px", height: "100%" }}
          className={baseSelector}
          contentEditable={true}
          onClick={(e) => {
            setfind(e.target);
            setActive(false);
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

            elMoveUpDown(ititalTegs, baseSelector);
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
