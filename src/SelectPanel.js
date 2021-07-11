import React, { useEffect, useState } from "react";
import {countArray} from "./action"
import "./css/selectpanel.css";
export default function SelectPanel(props){
const [topMax, settopMax] = useState(0);

const [headers, setheaders] = useState({size:12,name:"Заголовок"});
let n = 400
let widthMax = n;

if(props.sizes === false){
    widthMax = 0;
}else{
    widthMax = n;
}
useEffect(()=>{
    if(props.baseSelector === "text_block"){
        settopMax(90);
    }else{
        settopMax(200);
    }



},[props.baseSelector])
const STYLES = {
    selectPanel:{
        marginLeft: props.eX  + "px",
        marginTop: props.eY  + "px",
        position: "absolute",
    },
    heeaders:{
      fontSize: headers.size + "pt",
      cursor:"pointer"
    },
    headersList:{
        fontSize: 12 + "pt",
        cursor:"pointer"
    }
}



    return (
    <div style={STYLES.selectPanel} className = "selectpanel">
<table>
    <tr>
        <td>
            <ul>
                <li><div style={STYLES.heeaders}>{headers.name}</div>
                <ul>
                    {countArray(5).map((h)=> <li key = {h}><div style={STYLES.headersList}>Заголовок {h + 1}</div></li>)}
                    <li><div style={STYLES.headersList}>Обычный</div></li>
                    <li><div style={STYLES.headersList}>Обычный <br/>с интервалом</div></li>
                </ul>
                </li>
            </ul>
        </td>
        <td>fewwes<p></p></td>
        <td>fewwes2<p></p></td>
    </tr>
</table>
    </div>);
}