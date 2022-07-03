import React, { useState } from "react";
import "./App.css";
function App() {
 
 
  // console.log(`rgb(${red},${green},${blue});`)
  let change = () => {
    let body=document.body;
    let red=Math.floor(Math.random()*256);
    let green=Math.floor(Math.random()*256);
    let blue=Math.floor(Math.random()*256);

    var changecolor=`${red},${green},${blue}`
    
    console.log(changecolor)
    // console.log(`rgb(${red},${green},${blue});`)
    body.style.backgroundColor=`rgb(${changecolor})`


    //some for button coloring and styling
    let button = document.querySelector('.btn');
    let changecolor2=`${red-42},${green-42},${blue-42}`
    button.style.backgroundColor=`rgb(${changecolor2})`
    button.style.color="white"
  };

  return (
    <>
      <div className="main">
        <div>Current Color</div>
        <div>
          <button className="btn" onClick={change}>Change color</button>
        </div>
      </div>
    </>
  );
}

export default App;
