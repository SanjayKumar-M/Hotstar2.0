import React from "react";
import ReactDOM  from "react-dom";
import App from "./App";
const Disney = () =>{

  return(
    <div className = "navigation">
      <App />
    </div>
  )
}

ReactDOM.render(<Disney />,document.getElementById('root'));