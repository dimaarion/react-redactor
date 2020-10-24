import React from "react";
import Inputs from "./Inputs";
import Lineleft from "./Lineleft";
import Linecenter from "./Linecenter";
import Lineright from "./Lineright";
import FloatImage from "./FloatImage";
function ImgRemove(props) {
  return (
    <div className="imgRemove">
      <div className="row col">
        <div className="col">
          <h2 className="text-left">Редактирование изображения</h2>
        </div>
        <div className="col">
          <div className="col">
            <div className="mt-3">
              <svg
                onClick={() => props.setimgdisplay("none")}
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
        </div>
      </div>
      <Inputs
        name="Путь к изображению"
        style={{ textAlign: "center" }}
        value={props.imgurls}
        id="width"
        col="sm"
        c="text-center"
        cange={props.setimgurls}
      />
      <div className="row">
        <div className="col-sm">
          <Inputs
            name="Ширина"
            style={{ textAlign: "center" }}
            id="width"
            col="sm"
            c="text-center"
            cange={props.setimgWidth}
          />
          <Inputs
            name="Высота"
            style={{ textAlign: "center" }}
            id="height"
            col="sm"
            c="text-center"
            cange={props.setimgHeight}
          />
          <Inputs
            style={{ textAlign: "center" }}
            name="Отступ"
            id="padding"
            col="sm"
            c="mt-4 pt-2 text-center"
            cange={props.setimgPadding}
          />
        </div>
        <div className="col-sm mt-5">
          <FloatImage
            setimgFloat={props.setimgFloat}
            setalign={props.setalign}
          />
        </div>
      </div>
    </div>
  );
}
export default ImgRemove;
