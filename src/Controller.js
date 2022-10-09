import React, { useState, useEffect } from "react";
import Panel from "./Panel";
import "./css/bootstrap.css";
import "./css/style.css";
import "./css/listitems.css";
import "./css/table.css";
import "./css/titlesel.css";
import "./css/colorpanel.css";

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
  const [selectedTest, setSelectedTest] = useState("");
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
  const [selectPanelDicplay, setSelectPanelDicplay] = useState(false);
  const [iconTags, setIconTags] = useState("div");
  const [countClick, setCountClick] = useState(0);
  const [displayTextarera, setDisplayTextarera] = useState({ display: "none" });
  const [stateCode, setStateCode] = useState(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  function ititalTegs(bs = false) {
    let text_block = document.querySelector("." + baseSelector);
    function textChildren(text_block) {
      if (text_block !== null && text_block.children !== null) {
        if (text_block !== undefined) {
          if (text_block.children !== undefined) {
            return Object.values(text_block.children);
          }
        }
      }
    }
    if (bs === true) {
      return text_block;
    } else {
      return textChildren(text_block);
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function innerTextBox() {
    let s = document.querySelector("." + baseSelector);
    if (s !== null) {
      return s.innerHTML;
    }
  }

  function getStart(baseSelector) {
    let bSelector = document.getElementsByClassName(baseSelector)[0];
    if (bSelector.innerHTML === "") {
      bSelector.innerHTML = "<div class='strStart'>Текст</div>";
    }
  }

  function elMoveUpDown(ititalTegs, baseSelector) {
    let c = 0;
    if (ititalTegs() !== undefined) {
      ititalTegs().map((x) => {
        return x.setAttribute("data-d", "1" + c++);
      });
    }
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
    if (ititalTegs() !== undefined) {
      ititalTegs().map(
        (x, i) =>
          (x.onclick = (e) => {
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
    }

    if (ititalTegs() !== undefined) {
      ititalTegs().map(
        (x, i) =>
          (x.onmousemove = (e) => {
            if (window.getSelection().toString().length > 0) {
              setselectedtext(window.getSelection().toString());
              setSelectedTextLen(window.getSelection().toString().length);
              setSelectedTextAncor(window.getSelection().anchorOffset);
              setSelectedTextFocus(window.getSelection().focusOffset);
              setSelectedTest(window.getSelection().focusNode);
            }
          })
      );
    }
  }

  function listItem(ititalTegs, items, list, subList) {
    let oldteg = document.createElement(list);
    let dataD = "list";

    function att(o, d) {
      return o.setAttribute("class", d);
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

  function createTable(bas, it, w = "100%", f = "none", r = 0) {
    let bs = document.querySelector("." + bas);
    let div = document.createElement("div");
    let tb = document.createElement("table");
    document.body.appendChild(div);
    document.body.appendChild(tb);
    tb.className = `tb${it} tbl`;
    tb.setAttribute(
      "style",
      "width:" +
        w +
        ";float:" +
        f +
        ";border-collapse:separate;border-spacing: " +
        r +
        "px " +
        r +
        "px;"
    );
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
        td.setAttribute("data-count", j + 1);
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

  function fontsFm(props, fontFm) {
    if (props.find !== undefined) {
      if (props.find.style !== undefined) {
        props.find.style.fontFamily = fontFm;
      }
    }
  }

  function aligns(ititalTegs, items, align) {
    if (ititalTegs.style !== undefined) {
      ititalTegs.style.textAlign = align;
    }
  }

  function cleanerTxt(ititalTegs, items) {
    if (ititalTegs() !== undefined) {
      ititalTegs()
        .filter((f, i) => i === items)
        .map((x) => (x.outerHTML = `<div>${x.innerText}</div>`));
    }
  }

  function imgWidthR(ititalTegs, imgurls, imgWidth) {
    if (ititalTegs() !== undefined) {
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
  }
  function imgHeightR(ititalTegs, imgurls, imgHeight) {
    if (ititalTegs() !== undefined) {
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
  }
  function imgPaddingR(ititalTegs, imgurls, imgPadding) {
    if (ititalTegs() !== undefined) {
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
  }

  function imgFloatR(ititalTegs, imgurls, imgFloat) {
    if (ititalTegs() !== undefined) {
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
  }

  function mTop(setwindSize) {
    window.onresize = function (e) {
      setwindSize(window.innerWidth);
    };
  }

  useEffect(() => {
    getStart(baseSelector);
  }, [baseSelector]);

  useEffect(() => {
    mTop(setwindSize);
  }, [windSize]);

  useEffect(
    function () {
      imgPaddingR(ititalTegs, imgurls, imgPadding);
    },
    [ititalTegs, imgurls, imgPadding]
  );
  useEffect(
    function () {
      imgWidthR(ititalTegs, imgurls, imgWidth);
    },
    [ititalTegs, imgurls, imgWidth]
  );

  useEffect(
    function () {
      imgHeightR(ititalTegs, imgurls, imgHeight);
    },
    [imgHeight, ititalTegs, imgurls]
  );
  useEffect(
    function () {
      imgFloatR(ititalTegs, imgurls, imgFloat);
    },
    [imgurls, imgFloat, ititalTegs]
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
  }, [items, tegs, textbl, xs, ititalTegs, innerTextBox, stateCode]);

  function createMarkup(x, x2) {
    return {
      __html: !stateCode
        ? (document.getElementById(x).innerHTML = x2)
        : document.getElementById(x).innerHTML
    };
  }
  useEffect(() => {
    settextBox(innerTextBox());
  }, [textBox, find, active, innerTextBox, stateCode]);

  return (
    <div className="contentDtext container-fluid">
      <div className="contentDtext ">
        <div className={sizes === true ? "cintent_text" : "cintent_text_full"}>
          <div
            className={
              sizes === true
                ? "content_min row container text-right p-4  panel"
                : "content_full row container-fluid text-right p-4  panel"
            }
          >
            <Panel
              panelStyle={panelStyle}
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
              setIconTags={setIconTags}
              setActive={setActive}
              setSelectPanelDicplay={setSelectPanelDicplay}
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
              active={active}
              countClick={countClick}
              setDisplayTextarera={setDisplayTextarera}
              setStateCode={setStateCode}
            />
          </div>

          <div
            className={baseSelector + " main"}
            contentEditable={true}
            onClick={(e) => {
              setfind(e.target);
              setActive(false);
              setCountClick(countClick + 1);
              if (window.getSelection().toString().length > 0) {
                seteY(e.clientY);
                seteX(e.clientX);
              }
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

              //elMoveUpDown(ititalTegs, baseSelector);
            }}
            dangerouslySetInnerHTML={createMarkup(textId, textBox)}
          />
        </div>

        <div className="col-sm">
          {stateCode ? (
            <textarea
            onChange={(e) => {
                settextBox(e.target.value);
                
              }}
              style={displayTextarera}
              value={textBox}
              name={document.querySelector(textAreraId).className}
            />
          ) : (
            <textarea
              onChange={(e) => {
                settextBox(e.target.value);
                
              }}
              style={displayTextarera}
              defaultValue={textBox}
              name={document.querySelector(textAreraId).className}
            />
          )}
        </div>
      </div>
    </div>
  );
}
export default Controller;
