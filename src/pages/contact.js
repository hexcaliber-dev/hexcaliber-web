import * as React from "react";
import SEO from "../components/SEO";
import "../sass/main.scss";
import "../sass/contact.scss";
import bannerText from "../images/banner-text.png";
import Topbar from "../components/Topbar";

const ContactPage = () => {
	return (
		<main>
			<link
				rel="stylesheet"
				href="https://use.typekit.net/jko3pho.css"
			></link>
			{/* <link rel="stylesheet" href="https://use.typekit.net/jko3pho.css"></link> */}
			<SEO />
			<Topbar selected="Contact" />
			<div className="container">
				<img
					className="banner-text"
					src={bannerText}
					alt="Hexcaliber banner text"
				/>
				<div className="header">Say hello!</div>
				<a className="contact" href="mailto:contact@hexcaliber.dev">contact@hexcaliber.dev</a>
			</div>
		</main>
	);
};

export default ContactPage;
