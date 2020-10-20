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
    <div className = "col">
     <Inputs name = 'Ширина' col = "3" cange = {()=>{}} />
     <Inputs name = 'Высота' col = "3" cange = {()=>{}} />
     </div>
     <div className = "col">
      <Lineleft/>
       <Linecenter/>
        <Lineright/>
     </div>
     </div>
    </div>
  );
}
export default ImgRemove;
