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
import TableColRedactor from "./TableColRedactor";

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
          setActive={props.setActive}
          active={props.active}
          setfontFm={props.setfontFm}
          fontFm={props.fontFm}
          fontsFm={props.fontsFm}
          ititalTegs={props.ititalTegs}
          items={props.items}
          setSelectPanelDicplay = {props.setSelectPanelDicplay}
        />
        <Fonts
          setActive={props.setActive}
          active={props.active}
          find={props.find}
          fontPt={props.fontPt}
          setfontPt={props.setfontPt}
          fonts={props.fonts}
          ititalTegs={props.ititalTegs}
          items={props.items}
          setSelectPanelDicplay = {props.setSelectPanelDicplay}
        />
        <Headers
          type = {"block"}
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
          selectedtext={props.selectedtext}
          setIconTags = {props.setIconTags}
          setSelectPanelDicplay = {props.setSelectPanelDicplay}
        />
        <Aligns
          find={props.find}
          setActive={props.setActive}
          active={props.active}
          typeStyle={typeStyle}
          align={props.align}
          aligns={props.aligns}
          style={{ height: "auto" }}
          ititalTegs={props.ititalTegs}
          items={props.items}
          setSelectPanelDicplay = {props.setSelectPanelDicplay}
        />

        <div className="row  p-2 list">
          <ListUl
            setActive={props.setActive}
            active={props.active}
            find={props.find}
            listItem={props.listItem}
            ititalTegs={props.ititalTegs}
            items={props.items}
            class="col-sm text-left listItems"
            setSelectPanelDicplay = {props.setSelectPanelDicplay}
          />
          <ListOl
            setActive={props.setActive}
            active={props.active}
            find={props.find}
            listItem={props.listItem}
            ititalTegs={props.ititalTegs}
            items={props.items}
            class="col-sm text-left listItems"
            setSelectPanelDicplay = {props.setSelectPanelDicplay}
          />

          <Table
            setActive={props.setActive}
            active={props.active}
            baseSelector={props.baseSelector}
            items={props.items}
            createTd={props.createTd}
            createTr={props.createTr}
            createTable={props.createTable}
            setSelectPanelDicplay = {props.setSelectPanelDicplay}
            find={props.find}
          /> 

          
        </div>

        <div className="row p-2">
        <Headers
          type = {"select"}
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
          selectedtext={props.selectedtext}
          setIconTags = {props.setIconTags}
          setSelectPanelDicplay = {props.setSelectPanelDicplay}
        />
          <Lincks
            setActive={props.setActive}
            active={props.active}
            class=" col-sm text-left listItems"
            gTags={props.gTags}
            setstate={setstate}
            setSelectPanelDicplay = {props.setSelectPanelDicplay}
          />
        
          <Bold
            setActive={props.setActive}
            active={props.active}
            gTags={props.gTags}
            selectedTextAncor={props.selectedTextAncor}
            selectedTextFocus={props.selectedTextFocus}
            items={props.items}
            ititalTegs={props.ititalTegs}
            selectedtext={props.selectedtext}
            types={props.types}
            class="col-sm text-left listItems"
            setSelectPanelDicplay = {props.setSelectPanelDicplay}
          />
          <Italic
            setActive={props.setActive}
            active={props.active}
            gTags={props.gTags}
            items={props.items}
            ititalTegs={props.ititalTegs}
            selectedtext={props.selectedtext}
            types={props.types}
            selectedTextFocus={props.selectedTextFocus}
            selectedTextAncor={props.selectedTextAncor}
            class=" col-sm text-left listItems"
            setSelectPanelDicplay = {props.setSelectPanelDicplay}
          />
          <Strikethrough
            setActive={props.setActive}
            active={props.active}
            gTags={props.gTags}
            items={props.items}
            ititalTegs={props.ititalTegs}
            selectedtext={props.selectedtext}
            types={props.types}
            class=" col-sm text-left listItems"
            setSelectPanelDicplay = {props.setSelectPanelDicplay}
          />
          <Underline
            setActive={props.setActive}
            active={props.active}
            gTags={props.gTags}
            items={props.items}
            ititalTegs={props.ititalTegs}
            selectedtext={props.selectedtext}
            types={props.types}
            class=" col-sm text-left listItems"
            setSelectPanelDicplay = {props.setSelectPanelDicplay}
          />

          <ClinerText
            setActive={props.setActive}
            active={props.active}
            cleanerTxt={props.cleanerTxt}
            items={props.items}
            ititalTegs={props.ititalTegs}
            selectedtext={props.selectedtext}
            types={props.types}
            class=" col-sm text-left listItems"
            setSelectPanelDicplay = {props.setSelectPanelDicplay}
          />

          <CloseControl
            setActive={props.setActive}
            active={props.active}
            setsizes={props.setsizes}
            sizes={props.sizes}
            setpanelStyle={props.setpanelStyle}
            setSelectPanelDicplay = {props.setSelectPanelDicplay}
          />
           
        </div>
        
      </div>

      <ImgRemove
        setActive={props.setActive}
        active={props.active}
        find={props.find}
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
        setSelectPanelDicplay = {props.setSelectPanelDicplay}
      />

      {state.link === true || props.gTags.link ? (
        <LinkRemove
          setActive={props.setActive}
          active={props.active}
          setstate={setstate}
          gTags={props.gTags}
          setgTags={props.setgTags}
          selectedTextAncor={props.selectedTextAncor}
          selectedTextFocus={props.selectedTextFocus}
          items={props.items}
          ititalTegs={props.ititalTegs}
          selectedtext={props.selectedtext}
          types={props.types}
          setSelectPanelDicplay = {props.setSelectPanelDicplay}
        />
      ) : (
        ""
      )}
     
    </div>
  );
}
export default Panel;
