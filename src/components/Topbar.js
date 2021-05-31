import * as React from "react";
import PropTypes from "prop-types";
import "../sass/main.scss"
import logo from "../images/icon.png";

const links = [
    "About"
]

function Topbar(selected) {
    return (
        <div id="topbar">
            <img src={logo} id="home-img" />
            {links.map(btn =>
                <div className="topbar-link">
                    <a href={"/" + btn.toLowerCase()}>{btn}</a>
                </div> 
            )}
        </div>
    );
  }
  
  Topbar.propTypes = {
    selected: PropTypes.string
  };
  
  export default Topbar;
  