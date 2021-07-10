import React, { useEffect } from "react";
import "./css/selectpanel.css";
export default function SelectPanel(props){

let widthMax = 450;
if(props.sizes === false){
    widthMax = 0;
}else{
    widthMax = 450;
}
const STYLES = {
    selectPanel:{
        marginLeft: props.eX - widthMax + "px",
        marginTop: props.eY - 90 + "px",
        position: "absolute",
    }
}
    return (
    <div style={STYLES.selectPanel}>
<table>
    <tr>
        <td></td>
    </tr>
</table>
    </div>);
}