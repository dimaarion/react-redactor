import React from "react";
import "./css/bootstrap.css";
import "./css/style.css";
import "./css/listitems.css";
import "./css/error.css";
import Controller from "./Controller";
function App() {
  return (
    <div className="container-fluid">
      <Controller
        baseSelector="text_block2"
        textId="Dtext2"
        textAreraId="#Dredactor2"
      />
    </div>
  );
}
export default App;
