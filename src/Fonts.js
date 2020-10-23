import React, {useState,useEffect} from "react";
import './css/fonts.css';
function Fonts(props) {
  const [nf, setnf] = useState(14);
 
  let n = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
  useEffect(() => {
    setnf(props.fontPt)
   
  }, [props.fontPt]);
  return (
    <div className="col-sm text-left" >
      <ul id = "fontsTxt">
        <li>{nf}
        <ul>
            {n.map((x) => <li key={x} onClick={() => { props.fonts(props.ititalTegs, props.items, x);setnf(x)}}>{x}</li>)}
        </ul>
        </li>
      </ul>
    </div>
  );
}
export default Fonts;
