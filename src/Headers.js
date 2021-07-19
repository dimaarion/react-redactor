import React, { useState, useEffect } from "react";
import "./css/headers.css";
import Htype from "./Htype";
import { selectedStyles } from "./action";
function Headers(props) {
  const [tegsLocal, settegsLocal] = useState("div");

  useEffect(() => {
    settegsLocal(props.tegs);
    settegsLocal(props.gTags.teg);
  }, [props.gTags.teg, props.tegs]);

  const H = [
    {
      t: "H1",
      n: 1,
      svg: (
        <path d="M8.637 13V3.669H7.379V7.62H2.758V3.67H1.5V13h1.258V8.728h4.62V13h1.259zm5.329 0V3.669h-1.244L10.5 5.316v1.265l2.16-1.565h.062V13h1.244z" />
      ),
      names: "Заголовок 1"
    },
    {
      t: "H2",
      n: 2,
      svg: (
        <path d="M7.638 13V3.669H6.38V7.62H1.759V3.67H.5V13h1.258V8.728h4.62V13h1.259zm3.022-6.733v-.048c0-.889.63-1.668 1.716-1.668.957 0 1.675.608 1.675 1.572 0 .855-.554 1.504-1.067 2.085l-3.513 3.999V13H15.5v-1.094h-4.245v-.075l2.481-2.844c.875-.998 1.586-1.784 1.586-2.953 0-1.463-1.155-2.556-2.919-2.556-1.941 0-2.966 1.326-2.966 2.74v.049h1.223z" />
      ),
      names: "Заголовок 2"
    },
    {
      t: "H3",
      n: 3,
      svg: (
        <path d="M7.637 13V3.669H6.379V7.62H1.758V3.67H.5V13h1.258V8.728h4.62V13h1.259zm3.625-4.272h1.018c1.142 0 1.935.67 1.949 1.674.013 1.005-.78 1.737-2.01 1.73-1.08-.007-1.853-.588-1.935-1.32H9.108c.069 1.327 1.224 2.386 3.083 2.386 1.935 0 3.343-1.155 3.309-2.789-.027-1.51-1.251-2.16-2.037-2.249v-.068c.704-.123 1.764-.91 1.723-2.229-.035-1.353-1.176-2.4-2.954-2.385-1.873.006-2.857 1.162-2.898 2.358h1.196c.062-.69.711-1.299 1.696-1.299.998 0 1.695.622 1.695 1.525.007.922-.718 1.592-1.695 1.592h-.964v1.074z" />
      ),
      names: "Заголовок 3"
    },
    {
      t: "H4",
      n: 4,
      svg: (
        <text
          transform="scale(1.5,1.4)"
          y="9"
          x="0"
          style={{
            fontSize: "9px",
            fill: "#000000"
          }}
        >
          H4
        </text>
      ),
      names: "Заголовок 4"
    },
    {
      t: "H5",
      n: 5,
      svg: (
        <text
          transform="scale(1.5,1.4)"
          y="9"
          x="0"
          style={{
            fontSize: "9px",
            fill: "#000000"
          }}
        >
          H5
        </text>
      ),
      names: "Заголовок 5"
    },
    {
      t: "P",
      n: 6,
      svg: (
        <text
          transform="scale(1.0095382,0.99055193)"
          y="14"
          x="4"
          style={{
            fontSize: "15px",
            fill: "#000000"
          }}
        >
          P
        </text>
      ),
      names: "Обычный текст с интервалом"
    },
    {
      t: "div",
      n: 7,
      svg: (
        <text
          transform="scale(1.0095382,0.99055193)"
          y="12"
          x="0"
          style={{
            fontSize: "12px",
            fill: "#000000"
          }}
        >
          div
        </text>
      ),
      names: "Обычный текст без интервала"
    }
  ];
  if (props.type === "block") {
    return (
      <table className="headers">
        <tbody>
          <tr>
            {H.map((x, i) => (
              <Htype
                key={i * 4}
                setActive={props.setActive}
                active={props.active}
                svg={x.svg}
                t={x.t}
                n={x.n}
                find={props.find}
                tegsLocal={tegsLocal}
                settegsLocal={settegsLocal}
                izmtegs={props.izmtegs}
                typeStyle={props.typeStyle}
                ititalTegs={props.ititalTegs}
                items={props.items}
                selectedtext={props.selectedtext}
                gTags={props.gTags}
                setIconTags={props.setIconTags}
                setSelectPanelDicplay={props.setSelectPanelDicplay}
              />
            ))}
          </tr>
        </tbody>
      </table>
    );
  } else if (props.type === "select") {
    return (
      <div>
        <select
          className="form-select pb-2"
          onChange={(e) => selectedStyles(props, e.target.value)}
        >
          <option>Заголовок</option>
          {H.map((x, i) => (
            <option value={x.t} key={x.t}>
              {x.names}
            </option>
          ))}
        </select>
      </div>
    );
  } else {
    return <div></div>;
  }
}
export default Headers;
