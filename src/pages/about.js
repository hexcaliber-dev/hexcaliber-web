import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import { faMail} from '@fortawesome/free-solid-svg-icons'
import SEO from "../components/SEO";
import "../sass/main.scss";
import "../sass/about.scss";
import bannerLogo from "../images/icon.png";
import bannerText from "../images/banner-text.png";
import Topbar from "../components/Topbar";
import TEAM from "../data/team";
import TeamMember from "../components/TeamMember";

const AboutPage = () => {
	return (
		<main>
			<link
				rel="stylesheet"
				href="https://use.typekit.net/jko3pho.css"
			></link>
			{/* <link rel="stylesheet" href="https://use.typekit.net/jko3pho.css"></link> */}
			<SEO />
			<Topbar selected="About" />
			<div className="container">
				<img
					className="banner-text"
					src={bannerText}
					alt="Hexcaliber banner text"
				/>
				<div class="header">About Us</div>
				<p className="text about-text">
					Hi there! We're a small indie game studio based in Cupertino, CA. 
					We enjoy experimenting with games of all different genres, whether it be 
					metroidvanias, shoot-em-ups, puzzle games, arcade games, or rhythm action. 
					<br/><br/>
					We don't have much more to say for the time being, but we hope you enjoy playing our games!
				</p>
                <div class="header">Team</div>
                {TEAM.map((member) =>
                    <TeamMember member={member} />
                )};
			</div>
		</main>
	);
};

export default AboutPage;
