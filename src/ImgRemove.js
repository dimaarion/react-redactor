import React, { useState, useEffect } from "react";

import FloatImage from "./FloatImage";
function ImgRemove(props) {
  const [urlImj, seturlImj] = useState("");
  const [imgWidthR, setimgWidthR] = useState("");
  const [imgHeightR, setimgHeightR] = useState("");
  const [imgPaddingR, setimgPaddingR] = useState("");
  const [imgFloatR, setimgFloatR] = useState("");
  const [close, setclose] = useState("none");
  function imgUrlR(src) {
    if (src) {
      return src;
    } else {
      return "Нет изображения";
    }
  }

  function imgRemove(w, options = "px") {
    if (w) {
      let s = w.toString();
      return s + options;
    } else {
      return "auto";
    }
  }

  useEffect(() => {
    seturlImj(imgUrlR(props.find.src));
    setimgWidthR(
      imgRemove(props.find.style !== undefined ? props.find.style.width : "")
    );
    setimgHeightR(
      imgRemove(props.find.style !== undefined ? props.find.style.height : "")
    );
    setclose(props.find.tagName);
    setimgPaddingR(
      imgRemove(props.find.style !== undefined ? props.find.style.padding : "")
    );
    setimgFloatR(
      imgRemove(
        props.find.style !== undefined ? props.find.style.float : "",
        " "
      )
    );
  }, [props.find]);
  useEffect(() => {
    seturlImj(urlImj);
  }, [urlImj]);
  useEffect(() => {
    setimgWidthR(imgWidthR);
  }, [imgWidthR]);
  useEffect(() => {
    setimgHeightR(imgHeightR);
  }, [imgHeightR]);
  useEffect(() => {
    setimgPaddingR(imgPaddingR);
  }, [imgPaddingR]);
  useEffect(() => {
    setimgPaddingR(imgFloatR);
  }, [imgFloatR]);
  let wtp = { width: "100px" };
  let u = { width: "400px" };
  if (close === "IMG") {
    return (
      <table className="imgRemove">
        <tr>
          <td className="text-left">
            url
            <input
              className="form-control"
              style={u}
              type="text"
              defaultValue={urlImj}
              onChange={(e) => seturlImj(e.target.value)}
            />
          </td>
          <td className="text-left">
            Ширина
            <input
              className="form-control"
              style={wtp}
              type="text"
              defaultValue={imgWidthR.replace(/[px]{2}/, "")}
              onChange={(e) => setimgWidthR(e.target.value)}
            />
          </td>
          <td className="text-left">
            Высота
            <input
              className="form-control"
              style={wtp}
              type="text"
              defaultValue={imgHeightR.replace(/[px]{2}/, "")}
              onChange={(e) => setimgHeightR(e.target.value)}
            />
          </td>

          <td className="text-left">
            Отступ
            <input
              className="form-control"
              style={wtp}
              type="text"
              defaultValue={imgPaddingR.replace(/[px]{2}/, "")}
              onChange={(e) => setimgPaddingR(e.target.value)}
            />
          </td>
          <td>
            <svg
              onClick={() => {
                setclose("none");
                props.setActive(props.active === false ? true : false);
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
          </td>
        </tr>
        <tr>
          <td>
            <FloatImage
              setimgFloat={setimgFloatR}
              setalign={props.setalign}
              imgFloat={imgFloatR}
            />
          </td>

          <td>
            <button
              type="button"
              onClick={() => {
                if (props.find.style !== undefined) {
                  props.find.src = urlImj;
                  props.find.style.width = imgWidthR;
                  props.find.style.height = imgHeightR;
                  props.find.style.padding = imgPaddingR;
                  props.find.style.float = imgFloatR;
                  props.setActive(props.active === false ? true : false);
                  props.setSelectPanelDicplay(false);
                }
              }}
              className="col-sm"
            >
              ok
            </button>
          </td>
        </tr>
      </table>
    );
  } else {
    return <div></div>;
  }
}
export default ImgRemove;
