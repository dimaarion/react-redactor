import React, { useState, useEffect } from "react";
import Sizeplus from "../Sizeplus";
import Sizeminus from "../Sizeminus";
import Panel from "../Panel";
import "draft-js/dist/Draft.css";
import "./style.css";
import "./bootstrap.css";
function App() {
  const [sizes, setsizes] = useState(true);
  const [textcont, settextcont] = useState(false);
  const [textbl, settextbl] = useState("");
  const [headerT, setheaderT] = useState("unstyled***");
  const [headerType, setheaderType] = useState("div");
  const [items, setitems] = useState(0);

  function interat(sizesplus, sizesminus, bol) {
    return bol === true ? sizesplus : sizesminus;
  }
useEffect(()=>{
  onkeypress = (e)=>setitems(e.key);
 document.querySelector('.text_block').innerHTML = '<div class = "col text-center">|</div>'
},[])
useEffect(()=>{
  items === 'Enter'?
  Object.values(document.querySelector('.text_block').getElementsByTagName('div')).map((x)=>x.innerHTML =  '<h1>'+ x.innerText + '</h1>')
  :''
  Object.values(document.querySelector('.text_block').getElementsByTagName('div')).map((x)=>console.log( x.innerHTML.replace(/[a-z_0-9]+/,'<h1>' + x.innerText + '</h1>')))
},[items])
  return (
    <div className="contentDtext">
      <div
        className={sizes === true ? "cintent_text" : "cintent_text_full"}
        onClick={() => settextcont(true)}
      >
        <div className="row col text-right pt-2 panel">
          <Panel setheaderType={setheaderType} />
          <div
            className="col-sm"
            className="sizes"
            onClick={() => setsizes(sizes === true ? false : true)}
          >
            <div> {sizes === true ? <Sizeplus /> : <Sizeminus />}</div>
          </div>
        </div>

        <div className="text_block" contentEditable={textcont} />
      </div>
    </div>
  );
}
export default App;
