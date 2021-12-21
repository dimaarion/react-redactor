import React, { useState } from "react";
import TitlesEl from "./TitlesEl";
import "./css/headingsvg.css";
import { selectedStyles } from "./action";
export default function HeadingSvg(props) {
    const [stylesEl, setStylesEl] = useState("");
    return (
        <div className={`${props.class} titlesBas headingBtn`}>
            <TitlesEl type="Стиль элемента" />
            <button
                style={
                    props.gTags.teg === "B"
                        ? { backgroundColor: "#cccccc", border: "none" }
                        : { border: "none" }
                }
                onClick={() => {
                    selectedStyles(props, "b");
                    props.setActive(props.active === false ? true : false);
                    props.setSelectPanelDicplay(false);
                    if (props.find.tagName !== undefined) {
                        if (props.find.getAttribute("style") != null) {
                            setStylesEl(props.find.getAttribute("style"));
                        }
                    }

                }}
                type="button"
                className={"bi bi-justify-left " + props.itemsLine + "-iteml"}
            >
                <svg width="2em"
                    viewBox="0 0 16 16"
                    className="bi bi-type-bold"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg">

                    <text x={0} y={11} style={{ fontSize: "9pt", color: "#000" }}>css</text>
                </svg>
            </button>
            <div className="boxes cssElements" contenteditable="true">
                {stylesEl}
                <button contenteditable="false" className="cssElementsBtn form-control col-5">Сохранить</button>
            </div>
        </div>
    )
}