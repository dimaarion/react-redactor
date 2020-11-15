import React from "react";
import "./css/bootstrap.css";
import "./css/style.css";
import "./css/listitems.css";
import Controller from "./Controller";
function App() {
  return (
    <div className="container-fluid">
      <Controller
        baseSelector="text_block"
        textId="Dtext"
        textAreraId="#Dredactor"
      />
    </div>
  );
}
export default App;
