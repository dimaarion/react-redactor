import React from "react";
import Inputs from "./Inputs";
function ImgRemove(props) {
  return (
    <div className="col">
    <h2 className = "text-left">Редактирование изображения</h2>
     <Inputs name = 'Ширина' col = "3" cange = {()=>{}} />
     <Inputs name = 'Высота' col = "3" cange = {()=>{}} />
    </div>
  );
}
export default ImgRemove;
