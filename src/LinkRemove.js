import React, { useState,useEffect } from "react";
import Inputs from "./Inputs";
import './css/link.css'
function LinkRemove(props) {
    const [links, setlinks] = useState('');
   
    return (
        <div className="col-sm text-right">
            <Inputs type="text" col = "sm-8" value={props.gTags.link} c="link" cange={setlinks}/>
            <div onClick={() => { props.types(props.ititalTegs, props.items, props.selectedtext, 'a href="' + links + '"', props.selectedTextAncor, props.selectedTextFocus); props.setstate({ "link": false })}} style = {{cursor:'pointer'}} >ok</div>
        </div>
    );
}
export default LinkRemove;