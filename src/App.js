import React, { useState, useEffect } from "react";
import Sizeplus from "../Sizeplus";
import Sizeminus from "../Sizeminus";
import Panel from "../Panel";
import "draft-js/dist/Draft.css";
import "./style.css";
import "./bootstrap.css";
function App() {
  const [sizes, setsizes] = useState(true);
  const [xs, setx] = useState(0);
  const [textbl, settextbl] = useState("div");
  const [selectedtext, setselectedtext] = useState("");
  
  const [tegs, settegs] = useState("div");
  const [items, setitems] = useState(0);
  const [itemss, setitemss] = useState(0);

  function interat(sizesplus, sizesminus, bol) {
    return bol === true ? sizesplus : sizesminus;
  }

  function izmtegs(settextbl, tegs, items, selecttedtext) {
    let arrteds = ['div','h1','h2']
    let fg = selecttedtext
    let text_block = document.querySelector(".text_block");
   /* let j = Object.values(text_block.children)
      .filter((x, i) => x.tagName === tegs && i === items)
      .map(
        s =>
          (s.outerHTML =
            "<" +
            textbl +
            ' class = "' +
            s.className +
            '" >' +
            s.innerText +
            "</" +
            textbl +
            ">")
      );
      */
      
      //text_block.innerHTML = text_block.innerHTML.replace('<div>' + fg + '<br></div>','<'+textbl+'>' + fg + '</'+textbl+'>');
     //text_block.innerHTML = text_block.innerHTML.replace('<div>' + fg + '</div>','<'+textbl+'>' + fg + '</'+textbl+'>');
   
     

      
}
  function updateElements() {
    let text_block = document.querySelector(".text_block");
    let j = Object.values(text_block.children).map(
      (x, i) =>
        (x.onclick = () => {
          setitems(i);
          settegs(x.tagName);
          x.tabIndex = 0
        },x.onmousemove = ()=>setselectedtext(window.getSelection().toString()))
    );
  }

function focusText(e){
 
}

  useEffect(() => {
    onmousemove = e => setx(e.x);
  }, []);
  useEffect(() => {
    updateElements();
  }, [items, tegs, textbl, xs]);
  useEffect(() => {
    izmtegs(settextbl(textbl), tegs, items,selectedtext);
  }, [textbl, itemss]);
  return (
    <div className="contentDtext">
      {items + " " + tegs + " " + textbl}
      <div className={sizes === true ? "cintent_text" : "cintent_text_full"}>
        <div className="row col text-right pt-2 panel">
          <Panel
            settextbl={settextbl}
            setitemss={setitemss}
            items={items}
          />
          {selectedtext}
          <div
            className="col-sm"
            className="sizes"
            onClick={() => setsizes(sizes === true ? false : true)}
          >
            <div> {sizes === true ? <Sizeplus /> : <Sizeminus />}</div>
          </div>
        </div>

        <div
          className="text_block"
          contentEditable="true"
          onKeyPress={e => {updateElements(e)}}
          
        />
      </div>
    </div>
  );
}
export default App;
