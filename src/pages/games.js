import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import { faMail} from '@fortawesome/free-solid-svg-icons'
import SEO from "../components/SEO";
import "../sass/main.scss";
import "../sass/games.scss";
import bannerLogo from "../images/icon.png";
import bannerText from "../images/banner-text.png";
import Topbar from "../components/Topbar";
import GAMES from "../data/gamedata";
import Game from "../components/Game";

const GamesPage = () => {
	return (
		<main>
			<link
				rel="stylesheet"
				href="https://use.typekit.net/jko3pho.css"
			></link>
			<SEO />
			<Topbar selected="Games" />
			<div className="container">
				{/* <img
					className="banner-text"
					src={bannerText}
					alt="Hexcaliber banner text"
				/> */}
				<div class="header">Our Games</div>
                {Object.keys(GAMES).map((game) =>
                    <Game game={GAMES[game]} link={"/" + game} />
                )};
			</div>
		</main>
	);
};

export default GamesPage;
