import React, { useState, useEffect } from "react";

import FloatImage from "./FloatImage";
function ImgRemove(props) {
  const [urlImj, seturlImj] = useState("");
  const [imgWidthR, setimgWidthR] = useState("");
  const [imgHeightR, setimgHeightR] = useState("");
  const [imgPaddingR, setimgPaddingR] = useState("");
  const [imgFloatR, setimgFloatR] = useState("");
  const [close, setclose] = useState("none");
  const [imgTitle, setimgTitle] = useState("");
  const [imgName, setimgName] = useState("");
  const [imgWidthAtr, setWidthAtr] = useState("px");
  const [imgHeightAtr, setHeightAtr] = useState("px");
  const [imgPadAtr, setPadAtr] = useState("pt");
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

  function sizeImgOpt(name, dVal, onInp, onSel, opt = 'size') {
    function select(opt, onSel) {
      if (opt === 'padding') {
        return (
          <select className="form-select form-control" onChange={(e) => onSel(e.target.value)}>
            <option value="pt">pt</option>
            <option value="px">px</option>
          </select>
        )
      } else {
        return (
          <select className="form-select form-control" onChange={(e) => onSel(e.target.value)}>
            <option value="px">px</option>
            <option value="%">%</option>
            <option value="auto">auto</option>
          </select>
        )
      }
    }
    return (
      <table>
        <thead>
          <tr>
            <td>{name}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                className="form-control"
                style={wtp}
                type="text"
                defaultValue={dVal}
                onChange={(e) => onInp(e.target.value)}
              />
            </td>
            <td>
              {select(opt, onSel)}
            </td>
          </tr>
        </tbody>
      </table>
    )
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
    setPadAtr(imgPadAtr);
  }, [imgPadAtr]);
  useEffect(() => {
    setHeightAtr(imgHeightAtr);
  }, [imgHeightAtr]);
  useEffect(() => {
    setWidthAtr(imgWidthAtr);
  }, [imgWidthAtr]);
  useEffect(() => {
    setimgName(imgName);
  }, [imgName]);
  useEffect(() => {
    setimgTitle(imgTitle);
  }, [imgTitle]);
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
  let wtp = { width: "70px" };
  let u = { width: "400px" };
  if (close === "IMG") {
    return (
      <table className="imgRemove">
        <thead>
          <tr>
            <td><h5>Редактор изображений</h5></td>
          </tr>
        </thead>
        <tbody>
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
              {sizeImgOpt('Ширина', imgWidthR.replace(/[px | %]+/, " "), setimgWidthR, setWidthAtr)}
            </td>
            <td className="text-left">
              {sizeImgOpt('Высота', imgHeightR.replace(/[px | %]+/, " "), setimgHeightR, setHeightAtr)}
            </td>
            <td className="text-left">
              {sizeImgOpt('Отступ', imgPaddingR.replace(/[a-z]+/, " "), setimgPaddingR, setPadAtr, 'padding')}
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
            <td className="text-left">Описание</td>
            <td className="text-left">Название</td>
          </tr>
          <tr>
            <td>
              <textarea
                className="form-control"
                style={u}
                type="text"
                defaultValue={imgTitle}
                onChange={(e) => setimgTitle(e.target.value)}
              />
            </td>
            <td colspan="3">
              <input
                className="form-control"
                style={u}
                type="text"
                defaultValue={imgName}
                onChange={(e) => setimgName(e.target.value)}
              />
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
                    props.find.style.width = imgWidthR + imgWidthAtr;
                    props.find.style.height = imgHeightR + imgHeightAtr;
                    props.find.style.padding = imgPaddingR + imgPadAtr;
                    props.find.style.float = imgFloatR;
                    props.find.title = imgTitle;
                    props.find.alt = imgName;
                    props.setActive(props.active === false ? true : false);
                  }
                }}
                className="col-sm"
              >
                ok
            </button>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>
              <hr></hr>
            </td>
          </tr>
        </tfoot>
      </table>
    );
  } else {
    return <div></div>;
  }
}
export default ImgRemove;
