import React, { useState, useEffect } from "react";
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
import Lineleft from "./Lineleft";
import Linecenter from "./Linecenter";
import Lineright from "./Lineright";
function Panel(props) {
  return (
    <div className="container controlPanel">
      <div className="col-sm row ">
        <FamelyF setfontFm={props.setfontFm} fontsFm={props.fontsFm} ititalTegs={props.ititalTegs} items={props.items} />
        <Fonts setfontPt={props.setfontPt} fonts={props.fonts} ititalTegs={props.ititalTegs} items={props.items} />
        <Headers izmtegs={props.izmtegs} settextbl={props.settextbl} setitemss={props.setitemss} ititalTegs={props.ititalTegs} items={props.items} />
        <div className="row  p-2">
          <div className="col-sm text-left">
            <Lineleft aligns={props.aligns} style={{ height: 'auto' }} ititalTegs={props.ititalTegs} items={props.items} />
          </div>
          <div className="col-sm text-left">
            <Linecenter aligns={props.aligns} style={{ height: 'auto' }} ititalTegs={props.ititalTegs} items={props.items} />
          </div>
          <div className="col-sm text-left">
            <Lineright aligns={props.aligns} style={{ height: 'auto' }} ititalTegs={props.ititalTegs} items={props.items} />
          </div>
          <ListUl listItem={props.listItem} ititalTegs={props.ititalTegs} class="col-sm text-left " />
          <ListOl listItem={props.listItem} ititalTegs={props.ititalTegs} class="col-sm text-left " />
        </div>

        <div className="row p-2">
          <Bold selectedTextAncor={props.selectedTextAncor} selectedTextFocus={props.selectedTextFocus} items={props.items} ititalTegs={props.ititalTegs} selectedtext={props.selectedtext} types={props.types} class="col-sm text-left " />
          <Italic items={props.items} ititalTegs={props.ititalTegs} selectedtext={props.selectedtext} types={props.types} class=" col-sm text-left " />
          <Strikethrough items={props.items} ititalTegs={props.ititalTegs} selectedtext={props.selectedtext} types={props.types} class=" col-sm text-left " />
          <Underline items={props.items} ititalTegs={props.ititalTegs} selectedtext={props.selectedtext} types={props.types} class=" col-sm text-left " />
          <ClinerText items={props.items} ititalTegs={props.ititalTegs} selectedtext={props.selectedtext} types={props.types} class=" col-sm text-left " />

        </div>
      </div>
      {(props.imgdisplay === 'block' && props.cildTeg === 'IMG') ?
        <ImgRemove ititalTegs={props.ititalTegs} items={props.items} setimgdisplay={props.setimgdisplay} setimgFloat={props.setimgFloat} setalign={props.setalign} setimgPadding={props.setimgPadding} setimgWidth={props.setimgWidth} setimgHeight={props.setimgHeight} setimgurls={props.setimgurls} imgurls={props.imgurls} />
        : ''}
    </div>
  );
}
export default Panel;
