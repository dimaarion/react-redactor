import React from "react";
import {titlesContents} from "./action/index";
export default function TitlesEl(props){

   return <div className = "titlesEl" style={{position:"absolute"}}>{titlesContents(props)}</div>
}