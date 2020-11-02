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
import Lincks from "./Lincks";

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
          find={props.find}
          fontPt={props.fontPt}
          setfontPt={props.setfontPt}
          fonts={props.fonts}
          ititalTegs={props.ititalTegs}
          items={props.items}
        />
        <Headers
          setActive={props.setActive}
          active={props.active}
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
            find={props.find}
            listItem={props.listItem}
            ititalTegs={props.ititalTegs}
            items={props.items}
            class="col-sm text-left listItems"
          />
          <ListOl
            find={props.find}
            listItem={props.listItem}
            ititalTegs={props.ititalTegs}
            items={props.items}
            class="col-sm text-left listItems"
          />

          <Lincks
            class=" col-sm text-left listItems"
            gTags={props.gTags}
            setstate={setstate}
          />

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
