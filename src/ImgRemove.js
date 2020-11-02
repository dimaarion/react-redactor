import React, { useState, useEffect } from "react";
import Inputs from "./Inputs";
import FloatImage from "./FloatImage";
function ImgRemove(props) {
  const [state, setstate] = useState("");
  useEffect(() => {
    setstate(props.imgurls);
  }, [props.imgurls]);
  useEffect(() => {
    console.log(props.find.tagName);
  }, []);
  return (
    <div
      className="imgRemove"
      style={{
        marginLeft: props.eX - 400 + "px",
        marginTop: props.eY - 200 + "px"
      }}
    >
      <div className="row">
        <div className="col-sm">
          <h5 className="text-left pl-3">Редактирование изображения</h5>
        </div>
        <div className="col-sm text-right mt-1">
          <svg
            onClick={() => {
              props.setimgdisplay("none");
              Array.from(
                document.getElementsByTagName("img") !== undefined
                  ? document.getElementsByTagName("img")
                  : [1, 2]
              ).filter(
                (f) =>
                  "/" +
                    f.src
                      .split("/")
                      .filter((f, i) => i > 2)
                      .join("/") ===
                  props.imgurls
              )[1].src = state;
            }}
            width="2em"
            viewBox="0 0 16 16"
            className="bi bi-x"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </div>
      </div>
      <Inputs
        title={props.imgurls}
        name="Путь к изображению"
        style={{ textAlign: "center" }}
        value={props.imgurls}
        id="width"
        col="sm"
        c="text-center"
        cange={setstate}
      />
      <div className="col-sm">
        <Inputs
          value={props.imgWidth + "px"}
          name="Ширина"
          style={{ textAlign: "center" }}
          id="width"
          col="sm"
          c="text-center"
          cange={props.setimgWidth}
        />
        <Inputs
          value={props.imgHeight + "px"}
          name="Высота"
          style={{ textAlign: "center" }}
          id="height"
          col="sm"
          c="text-center"
          cange={props.setimgHeight}
        />
        <Inputs
          value={props.imgPadding.replace(/px/, "")}
          style={{ textAlign: "center" }}
          name="Отступ"
          id="padding"
          col="sm"
          c="text-center"
          cange={props.setimgPadding}
        />
        <FloatImage
          setimgFloat={props.setimgFloat}
          setalign={props.setalign}
          imgFloat={props.imgFloat}
        />
      </div>
    </div>
  );
}
export default ImgRemove;
