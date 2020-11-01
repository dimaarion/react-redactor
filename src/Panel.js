import React, { useState } from "react";
import Fonts from "./Fonts";
import Aligns from "./Aligns";
import FamelyF from "./FamelyF";
import ListUl from "./ListUl";
import Headers from "./Headers";
import ImgRemove from "./ImgRemove";
import ListOl from "./ListOl";
import Bold from "./Bold";
import Italic from "./Italic";
import Strikethrough from "./Strikethrough";
import Underline from "./Underline";
import ClinerText from "./ClinerText";
import CloseControl from "./CloseControl";
import LinkRemove from "./LinkRemove";
import Table from "./Table";

function typeStyle(t, g, o) {
  if (o === "button") {
    if (t === g) {
      return { backgroundColor: "#cccccc", border: "none" };
    } else {
      return { border: "none" };
    }
  } else if (o === "svg") {
    if (t === g) {
      return { backgroundColor: "#cccccc" };
    } else {
      return {};
    }
  } else {
    return {};
  }
}

function Panel(props) {
  const [state, setstate] = useState({ link: false });
  return (
    <div className="container controlPanel">
      <div className="row ">
        <FamelyF
          setfontFm={props.setfontFm}
          fontFm={props.fontFm}
          fontsFm={props.fontsFm}
          ititalTegs={props.ititalTegs}
          items={props.items}
        />
        <Fonts
          fontPt={props.fontPt}
          setfontPt={props.setfontPt}
          fonts={props.fonts}
          ititalTegs={props.ititalTegs}
          items={props.items}
        />
        <Headers
          find={props.find}
          typeStyle={typeStyle}
          tegs={props.tegs}
          gTags={props.gTags}
          izmtegs={props.izmtegs}
          settextbl={props.settextbl}
          setitemss={props.setitemss}
          ititalTegs={props.ititalTegs}
          items={props.items}
        />
        <Aligns
          typeStyle={typeStyle}
          align={props.align}
          aligns={props.aligns}
          style={{ height: "auto" }}
          ititalTegs={props.ititalTegs}
          items={props.items}
        />

        <div className="row  p-2 list">
          <ListUl
            listItem={props.listItem}
            ititalTegs={props.ititalTegs}
            items={props.items}
            class="col-sm text-left listItems"
          />
          <ListOl
            listItem={props.listItem}
            ititalTegs={props.ititalTegs}
            items={props.items}
            class="col-sm text-left listItems"
          />
          <div className=" col-sm text-left listItems">
            <svg
              style={
                props.gTags.teg === "A"
                  ? { padding: "2px", backgroundColor: "#cccccc" }
                  : {}
              }
              onClick={() => {
                setstate({ link: true });
              }}
              width="2em"
              viewBox="0 0 16 16"
              className="bi bi-link-45deg linkB"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.715 6.542L3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.001 1.001 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
              <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 0 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 0 0-4.243-4.243L6.586 4.672z" />
            </svg>
          </div>
          <Table
            baseSelector={props.baseSelector}
            items={props.items}
            createTd={props.createTd}
            createTr={props.createTr}
            createTable={props.createTable}
          />
        </div>

        <div className="row p-2">
          <Bold
            gTags={props.gTags}
            selectedTextAncor={props.selectedTextAncor}
            selectedTextFocus={props.selectedTextFocus}
            items={props.items}
            ititalTegs={props.ititalTegs}
            selectedtext={props.selectedtext}
            types={props.types}
            class="col-sm text-left listItems"
          />
          <Italic
            gTags={props.gTags}
            items={props.items}
            ititalTegs={props.ititalTegs}
            selectedtext={props.selectedtext}
            types={props.types}
            class=" col-sm text-left listItems"
          />
          <Strikethrough
            gTags={props.gTags}
            items={props.items}
            ititalTegs={props.ititalTegs}
            selectedtext={props.selectedtext}
            types={props.types}
            class=" col-sm text-left listItems"
          />
          <Underline
            gTags={props.gTags}
            items={props.items}
            ititalTegs={props.ititalTegs}
            selectedtext={props.selectedtext}
            types={props.types}
            class=" col-sm text-left listItems"
          />

          <ClinerText
            cleanerTxt={props.cleanerTxt}
            items={props.items}
            ititalTegs={props.ititalTegs}
            selectedtext={props.selectedtext}
            types={props.types}
            class=" col-sm text-left listItems"
          />

          <CloseControl
            setsizes={props.setsizes}
            sizes={props.sizes}
            setpanelStyle={props.setpanelStyle}
          />
        </div>
      </div>
      {props.imgdisplay === "block" && props.cildTeg === "IMG" ? (
        <ImgRemove
          imgWH={props.imgWH}
          imgWidth={props.imgWidth}
          imgHeight={props.imgHeight}
          imgPadding={props.imgPadding}
          ititalTegs={props.ititalTegs}
          items={props.items}
          setimgdisplay={props.setimgdisplay}
          setimgFloat={props.setimgFloat}
          setalign={props.setalign}
          setimgPadding={props.setimgPadding}
          setimgWidth={props.setimgWidth}
          setimgHeight={props.setimgHeight}
          setimgurls={props.setimgurls}
          imgurls={props.imgurls}
          eX={props.eX}
          eY={props.eY}
          seturlLen={props.seturlLen}
          urlLen={props.urlLen}
          imgFloat={props.imgFloat}
        />
      ) : (
        ""
      )}
      {state.link === true || props.gTags.link ? (
        <LinkRemove
          setstate={setstate}
          gTags={props.gTags}
          setgTags={props.setgTags}
          selectedTextAncor={props.selectedTextAncor}
          selectedTextFocus={props.selectedTextFocus}
          items={props.items}
          ititalTegs={props.ititalTegs}
          selectedtext={props.selectedtext}
          types={props.types}
        />
      ) : (
        ""
      )}
    </div>
  );
}
export default Panel;
