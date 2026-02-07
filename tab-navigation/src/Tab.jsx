import React, { useState } from "react";

function Tab() {
  const [activeTab, setactiveTab] = useState("Home");
  return (
    <div style={Style.Container}>
      <h1>Tab component</h1>
      <div style={Style.tabContainer}>
        <button className="home-btn"
          style={activeTab === "Home" ? Style.activeBtn : Style.activeBtn}
          onClick={() => setactiveTab("Home")}
        >
          Home
        </button>
        <button className="about-btn"
          style={activeTab === "About" ? Style.activeBtn : Style.activeBtn}
          onClick={() => setactiveTab("About")}
        >
          About
        </button>
        <button className="contact-btn"
          style={activeTab === "Contact" ? Style.activeBtn : Style.activeBtn}
          onClick={() => setactiveTab("Contact")}
        >
          Contact
        </button>
      </div>

      <div style={Style.contentBox}>
        {activeTab === "Home" && <p>THIS IS HOME PAGE</p>}
        {activeTab === "About" && <p>THIS IS ABOUT PAGE</p>}
        {activeTab === "Contact" && <p>THIS IS CONTACT PAGE</p>}
      </div>
    </div>
  );
}
const Style = {
  Container: {
    minHeight: "100vh",

    padding: "20px",
    background: "lightgrey",
  },
  tabContainer: {
    padding: "20px",
    border: "none",
    margin: "20px",
    
  },
  contentBox: {
    height: "100px",
    width: "300px",
    border: "4px solid black",
    marginLeft: "420px",
    background:"lightblue"
  },
  activeBtn:{

  }
};

export default Tab;
