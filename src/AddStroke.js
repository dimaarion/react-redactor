import React, { useEffect, useState } from "react";
import TitlesEl from "./TitlesEl";
import "./css/addstroke.css";
export default function AddStroke(props) {
    const[disp,setDisp]=useState(false);
    useEffect(() => {
        console.log(props.ititalTegs)
    }, [])

    let list = [
        {
            names: "Заголовок 1",
            type:"h1"
        },
        {
            names: "Заголовок 2",
            type:"h2"
        },
        {
            names: "Заголовок 3",
            type:"h3"
        },
        {
            names: "Заголовок 4",
            type:"h4"
        },
        {
            names: "Заголовок 5",
            type:"h5"
        },
        {
            names: "Строка с интервалом",
            type:"p"
        },
        {
            names: "Строка с без интервала",
            type:"div"
        }
    ];
    return (
        <div className={`${props.class} titlesBas`}>
            <TitlesEl type="Добавить" />
            <button type="button" onClick = {()=>setDisp(disp?false:true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" fill="currentColor" className="bi bi-plus-square" viewBox="0 0 16 16">
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
            </button>
           {disp? <div class="list-group add_stroke_list text-left boxes">
                {list.map((x) => <button onClick = {()=>{
                 let baseSelector =   document.querySelector("." + props.baseSelector);
                  let el =  document.createElement(x.type);
                    document.body.appendChild(el);
                    baseSelector.appendChild(el);
                    el.innerHTML = x.names;
                }} type="button" class="list-group-item list-group-item-action">{x.names}</button>)}

            </div>:""}
        </div>
    );
}