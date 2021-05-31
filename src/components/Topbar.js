import * as React from "react";
import PropTypes from "prop-types";
import "../sass/main.scss";
import logo from "../images/icon.png";

const links = ["About", "Games", "Contact"];

function Topbar(props) {
	const toggleMenu = () => {
		let ham = document.getElementById("ham");
		let menu = document.getElementById("menu");
		if (ham.classList.contains("is-active")) {
			ham.classList.remove("is-active");
			menu.classList.remove("is-active");
		} else {
			ham.classList.add("is-active");
			menu.classList.add("is-active");
		}
	};
	return (
		<>
			<div id="topbar">
				<div className="pad" />
				<img
					src={logo}
					id="home-img"
					className="desktop-only"
					onClick={() => (window.location.href = "/")}
				/>
				<div className="pad desktop-only" />
				<div className="link-container">
					{links.map((btn) => (
						<div className={(props.selected === btn) ? "topbar-link selected" : "topbar-link"}>
							<a href={"/" + btn.toLowerCase()}>{btn}</a>
						</div>
					))}
				</div>
				<button
					id="ham"
					className="hamburger hamburger--emphatic mobile-only"
					type="button"
					onClick={toggleMenu}
				>
					<span className="hamburger-box">
						<span className="hamburger-inner"></span>
					</span>
				</button>
				<div className="pad desktop-only" />
			</div>
			<div id="menu" className="mobile-only">
                    <div className="menu-link">
						<a href={"/"}>Home</a>
					</div>
				{links.map((btn) => (
					<div className={(props.selected === btn) ? "menu-link selected" : "menu-link"}>
						<a href={"/" + btn.toLowerCase()}>{btn}</a>
					</div>
				))}
			</div>
		</>
	);
}

Topbar.propTypes = {
	selected: PropTypes.string,
};

export default Topbar;
