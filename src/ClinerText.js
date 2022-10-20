import React from "react";
import TitlesEl from "./TitlesEl";
function ClinerText(props) {
  return (
    <div className={`${props.class} titlesBas`}>
      <TitlesEl type="Очистить текст" />
      <button type="button">
        <svg
          onClick={() => {
            let arrTag = ["div", "span", "b", "u", "s", "h1", "h2", "h3", "h4", "h5"]
            arrTag.map((tag) => {
              let tagList = Array.from(document.getElementsByClassName(props.baseSelector)[0].getElementsByTagName(tag))
              if (tagList) {
                tagList.map((index) => {
                  if (index) {
                    if (index.getAttribute("style") !== null) {
                      index.removeAttribute("style")
                    }
                    if (index.getAttribute("class") !== null) {
                      index.removeAttribute("class")
                    }
                  }
                })
              }
            })


          }
          }
          xmlns="http://www.w3.org/2000/svg"
          width="210mm"
          height="297mm"
          viewBox="0 0 210 297"
          version="1.1"
          id="svg8"
          style={{ width: "30px", height: "35px" }}
        >
          <defs id="defs2" />
          <g id="layer1">
            <g
              transform="matrix(2.2394478,0,0,2.2560042,-101.09892,-187.15278)"
              id="g17"
            >
              <text
                transform="scale(1.0337762,0.96732737)"
                id="text12"
                y="181.30466"
                x="42.760967"
                style={{
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "98.0053px",
                  lineHeight: "1.25",
                  fontFamily: "sans-serif",
                  fill: "#000000",
                  fillOpacity: 1,
                  stroke: "none",
                  strokeWidth: "2.45014"
                }}
                xmlSpace="preserve"
              >
                <tspan
                  style={{ strokeWidth: "2.45014" }}
                  y="181.30466"
                  x="42.760967"
                  id="tspan10"
                >
                  A
                </tspan>
              </text>
              <rect
                transform="matrix(0.90672582,-0.42172062,-0.42176543,-0.90670498,0,0)"
                y="-206.20215"
                x="1.5753852"
                height="27.986944"
                width="55.562504"
                id="rect30"
                style={{ fill: "#ff7f2a", strokeWidth: "0.280669" }}
              />
              <circle
                r="0.034967165"
                cy="189.70625"
                cx="77.522919"
                style={{
                  fill: "#ff5555",
                  stroke: "#000000",
                  strokeWidth: "0.264583"
                }}
                id="path36"
              />
              <rect
                transform="matrix(0.89472975,-0.44660797,0.43791926,0.89901431,0,0)"
                y="178.27136"
                x="-1.6485484"
                height="28.277071"
                width="14.852448"
                id="rect40"
                style={{ fill: "#ff5555", strokeWidth: "0.316221" }}
              />
            </g>
          </g>
        </svg>
      </button>
      <div className="removeTag">
        <button onClick={()=>{props.find.outerHTML = `${props.find.innerText}`}}>
          <svg xmlns="http://www.w3.org/2000/svg" 
            width="2em"
            viewBox="0 0 16 16" 
            fill="currentColor" 
            className="bi bi-x-lg" >
              <text  
                y="10"
                x="2.6"
                style={{
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "9",
                  lineHeight: "1.25",
                  fontFamily: "sans-serif",
                  fill: "#000000",
                  fillOpacity: 1,
                  stroke: "none",
                  strokeWidth: "2.45014"
                }}>tag</text>
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
          </svg>
        </button>

      </div>
    </div>
  );
}
export default ClinerText;
