/**
 * Contains data for all team members.
 * name: full name
 * photo: location of image (relative to static/team/)
 * links: {
 *     (website/github/twitter/instagram): url to navigate to
 *      ...
 * }
 * favGames: what games do you like? (optional)
 * bio: paragraph about yourself
 */
const TEAM = [
	{
		name: "Ben Cuan",
		photo: "bencuan.png",
		links: {
			website: "https://bencuan.me",
			github: "https://github.com/64bitpandas",
		},
		favGames: "Hollow Knight, Civ V, Portal 2",
		bio: "Hello! I'm Ben, a programmer and sound designer for Hexcaliber. \
             I created the soundtracks for many of our games, including \
             Bullet Sanctum, C:\\ONVERGENCE, and Eggmageddon. I also made this website (was fun)! \
             Outside of Hexcaliber, I'm a CS/Psych major at UC Berkeley who enjoys getting nuked by Gandhi while trying to build camel archers.",
	},
];

export default TEAM;
