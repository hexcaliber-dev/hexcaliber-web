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
				<p className="text">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Curabitur ut bibendum neque. Aenean mattis hendrerit rutrum.
					Morbi lacinia purus est, a consectetur ante sodales vel. Maecenas
					varius nisi sem, eu venenatis tellus volutpat vitae. Quisque quis
					nibh condimentum neque dictum porta vitae porta eros. Sed ac
					aliquet mauris, eget semper elit. Vestibulum ante ipsum primis in
					faucibus orci luctus et ultrices posuere cubilia curae; Morbi
					convallis metus sed nulla bibendum maximus. Ut eget velit quis
					sapien laoreet consequat. Nam ac odio non felis pulvinar
					accumsan. Donec vehicula tincidunt felis non venenatis. Morbi
					egestas maximus arcu ac dignissim. In bibendum nec sem sed
					volutpat. Ut at nisl eu quam cursus varius quis quis orci.
					Suspendisse tempus augue id tristique facilisis. Ut id pretium
					dolor. Quisque nec accumsan quam. Duis blandit arcu a sapien
					semper pellentesque. Fusce ultrices lacinia fringilla. Nulla
					pulvinar finibus faucibus. Nam imperdiet mauris vitae arcu
					laoreet semper. Fusce vulputate tincidunt congue. Vivamus id
					dictum odio. Suspendisse suscipit metus et odio rhoncus mattis
					auctor finibus odio. Donec pretium luctus velit eu malesuada.
					Vestibulum et sapien magna.
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
