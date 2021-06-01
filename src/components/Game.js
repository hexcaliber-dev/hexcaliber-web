import * as React from "react";
import PropTypes from "prop-types";
import "../sass/main.scss";
import "../sass/about.scss";
import { faItchIo, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Game(props) {
	const game = props.game;
	return (
		<div className="game-container">
			<img src={game.photo} alt={game.name} />
			<div className="game-content">
				<div className="game-header">
					<div className="game-name">{game.name}</div>
					<button
						type="button"
						text="Play game"
						className="play-button game-button"
						onClick={() => window.open(props.link, "_blank").focus()}
					>
						<FontAwesomeIcon icon={faItchIo} size="2x" />
						<div className="hover-text">Play on Itch.io</div>
					</button>
					<button
						type="button"
						text="Play game"
						className="game-button play-button"
						onClick={() => window.open(game.github, "_blank").focus()}
					>
						<FontAwesomeIcon icon={faGithub} size="2x" />
						<div className="hover-text">View the Source</div>
					</button>
				</div>

				{game.description.map((paragraph) => (
					<p className="text">{paragraph}</p>
				))}
			</div>
		</div>
	);
}

// See data/gamedata.js for more information.
Game.propTypes = {
	game: PropTypes.object,
	link: PropTypes.string,
};

export default Game;
