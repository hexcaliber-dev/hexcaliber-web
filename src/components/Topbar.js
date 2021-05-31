import * as React from "react";
import PropTypes from "prop-types";
import "../sass/main.scss"
import logo from "../images/icon.png";

const links = [
    "About", "Games", "Contact"
]

function Topbar(selected) {
    return (
        <div id="topbar">
            <img src={logo} id="home-img" onClick={() => window.location.href = "/"} />
            <div class="pad" />
            <div class="link-container">
                {links.map(btn =>
                    <div className="topbar-link">
                        <a href={"/" + btn.toLowerCase()}>{btn}</a>
                    </div> 
                )}
            </div>
        </div>
    );
  }
  
  Topbar.propTypes = {
    selected: PropTypes.string
  };
  
  export default Topbar;
  