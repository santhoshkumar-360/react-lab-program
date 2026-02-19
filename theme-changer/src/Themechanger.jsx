import React, { useState } from "react";

function Themechanger() {
    const[theme,setTheme]=useState("light")
    const toggleTheme=()=>{
        setTheme(theme ==="light"?"dark":"light")
    }
    const containerStyle={
        minHeight:"100vh",
        paddig:"20px",
        backgroundColor:theme==="light"?"black":"white",
        color:theme === "light" ? "white": "black"
    }
  return (
    <div className="main"  style={containerStyle}>
      <h1>THEME TOGGLE EXAMPLE</h1>
      <h3>Click the Button to switch between Light and Dark mode</h3>
      <button className="btn" onClick={toggleTheme}>
        switch to {theme==="light"?"light":"dark"}Mode
      </button>
      <div style={{marginTop: "20px"}}>
      <h3>text color also changes according to the select theme</h3>
      </div>
    </div>
  );
}

export default Themechanger;
