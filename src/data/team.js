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
	{
		name: "Omar Hossain (Epicrider/Static Savior)",
		photo: "omarhossain.jpg",
		links: {
			website: "https://omarhossain.me",
			github: "https://github.com/Epicrider",
		},
		favGames: "Zelda: Skyward Sword (don't @ me), Hollow Knight, God of War (2018), Ori and the Will of the Wisps",
		bio: "How u doin'? I'm Omar (Epicrider/Static Savior)! I'm a programmer, game designer, and artist for Hexcaliber. \
		I helped program and design all of our games and even wrote the story for C:\\ONVERGENCE. \
		If I'm not making or playing games, you can usually find me drawing or unsucessfully trying to get fit. \
		I'm majoring in CS at UC Irvine where I'm the only student refusing to go ZOT ZOT every 5 minutes.",
	},
	{
		name: "Kevin Chu (xKindredKinesis/XenSigilMedia)",
		photo: "Xen Sigil Media - Icon.png",
		links: {
			website: "https://xkindredkinesis.itch.io/",
			github: "https://github.com/KindredKinesis",
		},
		favGames: "DOOM Eternal, Devil May Cry 5, Sonic Mania, ULTRAKILL, Katana ZERO, Dead Cells, Shovel Knight: Specter of Torment",
		bio: "Ni hao-dy! My name's Kevin. I'm a 2D artist, UI designer, and game designer for Hexcaliber. \
		If there's an art asset from one of our games that you liked or hated, it was probably made by me. \
		I also helped design the gameplay loops for Bullet Heaven, It's Rude To Point, and Bullet Sanctum. \
		Besides game development, my hobbies include graphic design, writing stories, and simping for VTubers. \
		Outside of Hexcaliber, I'm a CS major at San Jose State University, and I don't go outside nearly enough.",
	}
];

export default TEAM;
