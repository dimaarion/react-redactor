import React from "react";
import Inputs from "./Inputs";
import Lineleft from "./Lineleft";
import Linecenter from "./Linecenter";
import Lineright from "./Lineright";
function ImgRemove(props) {
  return (
    <div className="col">
    <h2 className = "text-left">Редактирование изображения</h2>
    <div className = "row">
    <div className = "col-3">
     <Inputs name = 'Ширина' id = "width" col = "sm" cange = {()=>{}} />
     <Inputs name = 'Высота' id = "height" col = "sm" cange = {()=>{}} />
     </div>
     <div className = "col-2 text-left row mt-4">
     <div className = "col">
      <Lineleft/>
      </div>
      <div className = "col">
      <Linecenter/>
        </div>
      <div className = "col">
      <Lineright/>
        </div>
     </div>
     </div>
    </div>
  );
}
export default ImgRemove;
