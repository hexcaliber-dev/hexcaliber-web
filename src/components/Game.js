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
					<a href={props.link} target="_blank" class="btn-a">
						<button
							type="button"
							text="Play game"
							className="play-button game-button"
						>
							<FontAwesomeIcon icon={faItchIo} size="2x" />
							<div className="hover-text">Play on Itch.io</div>
						</button>
					</a>
					<a href={game.github} target="_blank" class="btn-a">
						<button
							type="button"
							text="Play game"
							className="game-button play-button"
						>
							<FontAwesomeIcon icon={faGithub} size="2x" />
							<div className="hover-text">View the Source</div>
						</button>
					</a>
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
