import React from "react";
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

function Panel(props) {
  return (
    <div className="container controlPanel">
      <div className="col-sm row ">
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
          tegs={props.tegs}
          izmtegs={props.izmtegs}
          settextbl={props.settextbl}
          setitemss={props.setitemss}
          ititalTegs={props.ititalTegs}
          items={props.items}
        />
        <Aligns
          align={props.align}
          aligns={props.aligns}
          style={{ height: "auto" }}
          ititalTegs={props.ititalTegs}
          items={props.items}
        />

        <div className="row  p-2 ">
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
        </div>

        <div className="row p-2">
          <Bold
            selectedTextAncor={props.selectedTextAncor}
            selectedTextFocus={props.selectedTextFocus}
            items={props.items}
            ititalTegs={props.ititalTegs}
            selectedtext={props.selectedtext}
            types={props.types}
            class="col-sm text-left listItems"
          />
          <Italic
            items={props.items}
            ititalTegs={props.ititalTegs}
            selectedtext={props.selectedtext}
            types={props.types}
            class=" col-sm text-left listItems"
          />
          <Strikethrough
            items={props.items}
            ititalTegs={props.ititalTegs}
            selectedtext={props.selectedtext}
            types={props.types}
            class=" col-sm text-left listItems"
          />
          <Underline
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
        </div>
      </div>
      {props.imgdisplay === "block" ? (
        <ImgRemove
          imgWidth={props.imgWidth}
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
        />
      ) : (
        ""
      )}
    </div>
  );
}
export default Panel;
