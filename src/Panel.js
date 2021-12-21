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
import LiterSelectColor from "./LiterSelectColor";
import "./css/controlpanel.css";
import TableColRedactor from "./TableColRedactor";
import LiterBgColor from "./LiterBgColor";
import LiterLineSelectBgColor from "./LiterLineSelectBgColor";
import { typeStyle } from "./action/index";
import AddStroke from "./AddStroke";
import HeadingSvg from "./HeadingSvg";

function Panel(props) {
  const [state, setstate] = useState({ link: false });
  return (
    <div className="container controlPanel">
      <table>
        <tbody>
          <tr>
            <td colSpan="2">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <FamelyF
                        setActive={props.setActive}
                        active={props.active}
                        setfontFm={props.setfontFm}
                        fontFm={props.fontFm}
                        fontsFm={props.fontsFm}
                        ititalTegs={props.ititalTegs}
                        items={props.items}
                        setSelectPanelDicplay={props.setSelectPanelDicplay}
                        find={props.find}
                      />
                    </td>
                    <td>
                      <Fonts
                        setActive={props.setActive}
                        active={props.active}
                        find={props.find}
                        fontPt={props.fontPt}
                        setfontPt={props.setfontPt}
                        fonts={props.fonts}
                        ititalTegs={props.ititalTegs}
                        items={props.items}
                        setSelectPanelDicplay={props.setSelectPanelDicplay}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>

            <td colSpan="3">
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
                setSelectPanelDicplay={props.setSelectPanelDicplay}
              />
            </td>
            <td colSpan="4">
              <Headers
                type={"block"}
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
                setIconTags={props.setIconTags}
                setSelectPanelDicplay={props.setSelectPanelDicplay}
                countClick = {props.countClick}
              />
            </td>
            <td>
              <ListUl
                setActive={props.setActive}
                active={props.active}
                find={props.find}
                listItem={props.listItem}
                ititalTegs={props.ititalTegs}
                items={props.items}
                class="text-center listItems"
                setSelectPanelDicplay={props.setSelectPanelDicplay}
              />
            </td>
            <td>
              <ListOl
                setActive={props.setActive}
                active={props.active}
                find={props.find}
                listItem={props.listItem}
                ititalTegs={props.ititalTegs}
                items={props.items}
                class="text-center listItems"
                setSelectPanelDicplay={props.setSelectPanelDicplay}
              />
            </td>
            <td>
              <Table
                setActive={props.setActive}
                active={props.active}
                baseSelector={props.baseSelector}
                items={props.items}
                createTd={props.createTd}
                createTr={props.createTr}
                createTable={props.createTable}
                setSelectPanelDicplay={props.setSelectPanelDicplay}
                find={props.find}
              />
            </td>
          </tr>
          <tr>
            <td>
              <Headers
                type={"select"}
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
                setIconTags={props.setIconTags}
                setSelectPanelDicplay={props.setSelectPanelDicplay}
              />
            </td>
            <td>
              <Lincks
                setActive={props.setActive}
                active={props.active}
                class="text-center listItems"
                gTags={props.gTags}
                setstate={setstate}
                setSelectPanelDicplay={props.setSelectPanelDicplay}
              />
            </td>
            <td>
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
                class="text-center listItems"
                setSelectPanelDicplay={props.setSelectPanelDicplay}
              />
            </td>
            <td>
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
                class="text-center listItems"
                setSelectPanelDicplay={props.setSelectPanelDicplay}
              />
            </td>
            <td>
              <Strikethrough
                setActive={props.setActive}
                active={props.active}
                gTags={props.gTags}
                items={props.items}
                ititalTegs={props.ititalTegs}
                selectedtext={props.selectedtext}
                types={props.types}
                class="text-center listItems"
                setSelectPanelDicplay={props.setSelectPanelDicplay}
              />
            </td>
            <td>
              <Underline
                setActive={props.setActive}
                active={props.active}
                gTags={props.gTags}
                items={props.items}
                ititalTegs={props.ititalTegs}
                selectedtext={props.selectedtext}
                types={props.types}
                class="text-center listItems"
                setSelectPanelDicplay={props.setSelectPanelDicplay}
              />
            </td>
            <td>
              <ClinerText
                setActive={props.setActive}
                active={props.active}
                cleanerTxt={props.cleanerTxt}
                items={props.items}
                ititalTegs={props.ititalTegs}
                selectedtext={props.selectedtext}
                types={props.types}
                class="text-center listItems"
                setSelectPanelDicplay={props.setSelectPanelDicplay}
              />
            </td>
            <td>
              <LiterSelectColor
                setActive={props.setActive}
                active={props.active}
                gTags={props.gTags}
                items={props.items}
                ititalTegs={props.ititalTegs}
                selectedtext={props.selectedtext}
                types={props.types}
                selectedTextFocus={props.selectedTextFocus}
                selectedTextAncor={props.selectedTextAncor}
                class="text-center listItems"
                setSelectPanelDicplay={props.setSelectPanelDicplay}
              />
            </td>
            <td>
              <LiterBgColor
                setActive={props.setActive}
                active={props.active}
                gTags={props.gTags}
                items={props.items}
                ititalTegs={props.ititalTegs}
                selectedtext={props.selectedtext}
                types={props.types}
                selectedTextFocus={props.selectedTextFocus}
                selectedTextAncor={props.selectedTextAncor}
                class="text-center listItems"
                setSelectPanelDicplay={props.setSelectPanelDicplay}
              />
            </td>
            <td>
              <LiterLineSelectBgColor
                setActive={props.setActive}
                active={props.active}
                gTags={props.gTags}
                items={props.items}
                ititalTegs={props.ititalTegs}
                selectedtext={props.selectedtext}
                types={props.types}
                selectedTextFocus={props.selectedTextFocus}
                selectedTextAncor={props.selectedTextAncor}
                class="text-center listItems"
                setSelectPanelDicplay={props.setSelectPanelDicplay}
              />
            </td>
            <td><AddStroke ititalTegs={props.ititalTegs} baseSelector = {props.baseSelector} class="text-center listItems" /></td>
            <td>
              <CloseControl
                setActive={props.setActive}
                active={props.active}
                setsizes={props.setsizes}
                sizes={props.sizes}
                setpanelStyle={props.setpanelStyle}
                setSelectPanelDicplay={props.setSelectPanelDicplay}
                class="text-center listItems"
              />
            </td>
          </tr>
          <tr>
            <td><HeadingSvg
           find={props.find}
           setActive={props.setActive}
           active={props.active}
           gTags={props.gTags}
           selectedTextAncor={props.selectedTextAncor}
           selectedTextFocus={props.selectedTextFocus}
           items={props.items}
           ititalTegs={props.ititalTegs}
           selectedtext={props.selectedtext}
           types={props.types}
           class="text-center listItems"
           setSelectPanelDicplay={props.setSelectPanelDicplay}
            /></td>
          </tr>
        </tbody>
      </table>
      <div className="row "></div>

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
        setSelectPanelDicplay={props.setSelectPanelDicplay}
        countClick = {props.countClick}
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
          setSelectPanelDicplay={props.setSelectPanelDicplay}
        />
      ) : (
        ""
      )}
    </div>
  );
}
export default Panel;
