import * as React from "react";
import PropTypes from "prop-types";
import "../sass/main.scss";
import "../sass/about.scss";
import { faTwitter, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TeamMember(props) {
    const member = props.member;
    const icons = {
        website: faGlobe,
        twitter: faTwitter,
        instagram: faInstagram,
        github: faGithub
    }
	return (
		<div className="team-container">
			<img src={member.photo} alt={member.name} />
			<div className="team-content">
				<div className="team-header">
					<div className="team-name">{member.name}</div>
					{Object.keys(member.links).map((key) => (
						<a href={member.links[key]} target="_blank">
							<button
								type="button"
								text="test"
								className="team-button"
							>
								<FontAwesomeIcon icon={icons[key]} size="2x" />
							</button>
						</a>
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
