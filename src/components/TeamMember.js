import * as React from "react";
import PropTypes from "prop-types";
import "../sass/main.scss";
import "../sass/about.scss";
import { faTwitter, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StaticImage } from "gatsby-plugin-image";

const links = ["About", "Games", "Contact"];

function TeamMember(props) {
    const member = props.member;
    console.log(props);
    const icons = {
        website: faGlobe,
        twitter: faTwitter,
        instagram: faInstagram,
        github: faGithub
    }
	return (
		<div className="team-container">
			<img src={'team/' + member.photo} alt={member.name} />
			<div className="team-content">
				<div className="team-header">
					<div className="team-name">{member.name}</div>
					{Object.keys(member.links).map((key) => (
						<button
							type="button"
							text="test"
							className="team-button"
							onClick={() => window.open(member.links[key], "_blank").focus()}
						>
							<FontAwesomeIcon icon={icons[key]} size="2x" />
						</button>
					))}
				</div>
				<p className="text">
					{member.bio}
				</p>
                <p className="text">
                    <b>Favorite Games: </b> {member.favGames}
                </p>
			</div>
		</div>
	);
}

// See data/team.js for more information.
TeamMember.propTypes = {
	member: PropTypes.object
};

export default TeamMember;
