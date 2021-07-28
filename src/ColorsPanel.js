import React from "react";
import {countArray} from "./action/index";
export default function ColorsPanel(props) {
  let colorDf = 200;
  let widthDf = "100px";
  let heightDf = "0.2px";
  let Colors = {
    rgb:[1,0,0]
  }
  return (<div>
{countArray(255).map((color)=><div key = {color + "r" } style = {{width:widthDf,height:"0.2px", backgroundColor:`rgb(${color},${colorDf},${colorDf})`}}></div>)}
{countArray(255).map((color)=><div key = {color + "g" } style = {{width:widthDf,height:"1px", backgroundColor:`rgb(${colorDf},${color},${colorDf})`}}></div>)}
{countArray(255).map((color)=><div key = {color + "b" } style = {{width:widthDf,height:"1px", backgroundColor:`rgb(${colorDf},${colorDf},${color})`}}></div>)}
{countArray(255).map((color)=><div key = {color + "j" } style = {{width:widthDf,height:"1px", backgroundColor:`rgb(${color},${color},${colorDf})`}}></div>)}
{countArray(255).map((color)=><div key = {color + "w" } style = {{width:widthDf,height:"1px", backgroundColor:`rgb(${color},${colorDf},${color})`}}></div>)}
  </div>);
  
}
