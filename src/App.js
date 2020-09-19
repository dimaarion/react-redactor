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
  const [headerT, setheaderT] = useState("unstyled***");
  const [headerType, setheaderType] = useState("div");
  const [tegs, settegs] = useState("div");
  const [items, setitems] = useState(0);
  const [itemss, setitemss] = useState(0);

  function interat(sizesplus, sizesminus, bol) {
    return bol === true ? sizesplus : sizesminus;
  }

  function izmtegs(settextbl,tegs,items){
             
             
              let text_block = document.querySelector(".text_block");
              let j = Object.values(text_block.children)
                .filter((x, i) => (x.tagName === tegs && i === items))
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

              console.log(j);
            
  }
  function test() {
   
    let text_block = document.querySelector(".text_block");
    let j = Object.values(text_block.children).map(
      (x, i) =>
        (x.onclick = () => {
          setitems(i);
          settegs(x.tagName);
        })
    );
  }
useEffect(()=>{
 onmousemove = (e)=>setx(e.x)
},[])
  useEffect(() => {
    test();
  }, [items, tegs, textbl,xs]);
  useEffect(() => {
    izmtegs(settextbl(textbl),tegs,items)
  }, [ textbl,itemss]);
  return (
    <div className="contentDtext">
      {items +' '+ tegs + ' ' +  textbl}
      <div className={sizes === true ? "cintent_text" : "cintent_text_full"}>
        <div className="row col text-right pt-2 panel">
          <Panel setheaderType={setheaderType}settextbl ={settextbl}setitemss ={setitemss} items ={items} />
          <div
            lassName="col"
            onClick={() => {settextbl('h1');setitemss(items)}}
          >
            h1
          </div>
          <div
            className="col"
            onClick={() => {settextbl('h2');setitemss(items)}}
          >
            h2
          </div>
          <div
            className="col"
            onClick={() => {settextbl('h3');setitemss(items)}}
          >
            div
          </div>
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
          onKeyPress={e => test(e)}
        />
      </div>
    </div>
  );
}
export default App;
