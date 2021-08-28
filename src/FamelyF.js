import React, { useState, useEffect } from "react";
import "./css/fontsFamely.css";
import {
  storageBd,
  storageBdInsert,
  arrayFonts,
  replaceFontsTextarera
} from "./action/index";
import TitlesEl from "./TitlesEl";
function FamelyF(props) {
  let n = ["Georgia", "Roboto", "Arial", "Montserrat", "Krona One"];
  const [nf, setnf] = useState("Georgia");
  const [storageFonts, setStorageFonts] = useState({
    key: "fonts",
    content: ""
  });
  const [disp, setDisp] = useState(false);
  const [dispPan, setDispPan] = useState(false);
  const [getFonts, setGetFonts] = useState("");
  const [getFontsObj, setGetFontsObj] = useState({});
 
  let host = window.location.host;
  if(window.location.host === "localhost:3000"){
    host = "adminpanel";
  }else{
    host = window.location.host;
  }
  let storObj = {
    url: "http://"+ host +"/adminpanel/editor/",
    urlFonts: "http://"+ host +"/adminpanel/editor/fonts.php",
    setGetFonts: setGetFonts,
    getFonts: getFonts,
    content: storageFonts.content,
    setGetFontsObj: setGetFontsObj,
    n: n
  };
  useEffect(() => {
    setnf(props.fontFm);
  }, [props.fontFm]);

  useEffect(() => {
    if (storageFonts.content.length > 0) {
      setDisp(true);
    }
  }, [storageFonts]);

  useEffect(() => {
    storageBd(storObj);
  }, [getFonts]);

  n = arrayFonts(storObj);

  const STYLES = {
    table: {
      position: "absolute",
      zIndex: 10000
    },
    save: {
      marginTop: "0px"
    },
    add: {
      position: "absolute",
      zIndex: 10000,
      marginTop: "-26px",
      width: "200px"
    }
  };

  return (
    <div className="col-sm-2 form-group text-left p-0 fontsFm">
      <div className={"listItems fontsAdd"} style={STYLES.add}>
        <div className="titlesBas">
          <TitlesEl type="Добавить шрифт" />
          <button
            type="button"
            onClick={() => {
              setDispPan(true);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              fill="currentColor"
              className="bi bi-plus-square"
              viewBox="0 0 16 21"
            >
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
          </button>
        </div>
        <div className="titlesBas">
          <TitlesEl type="Перейти на сайт Googl Fonts" />
          <button
            type="button"
            onClick={() => {
              document.location = "https://fonts.google.com/";
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              fill="currentColor"
              className="bi bi-plus-square"
              viewBox="0 0 16 21"
            >
              <text x="2" y="13">
                G
              </text>
            </svg>
          </button>
        </div>
      </div>
      {dispPan === true ? (
        <table style={STYLES.table}>
          <tbody>
            <tr>
              <td colSpan="2">
                <textarea
                  rows="5"
                  cols="20"
                  defaultValue={replaceFontsTextarera(storObj)}
                  onChange={(e) =>
                    setStorageFonts({ key: "fonts", content: e.target.value })
                  }
                />
              </td>
            </tr>
            <tr>
              <td>
                <div style={STYLES.save}>
                  {disp === true ? (
                    <button
                      className={"btn btn-primary"}
                      type="button"
                      onClick={() => {
                        storageBdInsert(storObj);
                      }}
                    >
                      Сохранить
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </td>
              <td className="text-right">
                <button
                  className={"btn btn-primary"}
                  type="button"
                  onClick={() => {
                    setDispPan(false);
                  }}
                >
                  Закрыть
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        ""
      )}
      <ul id="fontsTxtFamely">
        <li>
          {nf}
          <ul>
            {n.map((x, i) => (
              <li
                key={x + i}
                onClick={() => {
                  props.fontsFm(props, x);
                  setnf(x);
                  props.setActive(props.active === false ? true : false);
                  props.setSelectPanelDicplay(false);
                }}
              >
                {x}
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
export default FamelyF;
