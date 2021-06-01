/**
 * Contains data for all entries on the games page.
 * Make sure the key is the same as a redirect defined in redirects.js!
 * name: game title
 * photo: location of image (relative to static/games/)
 * github: link to github repo (optional)
 * description: info about the game. Each entry is a paragraph
 */
const GAMES = {
	bulletsanctum: {
		name: "Bullet Sanctum",
		photo: "bullet-sanctum.jpg",
		github: "https://github.com/hexcaliber-dev/bullet-sanctum",
		description: [
			`In aliquam iaculis mi at molestie. Vestibulum quis auctor metus. Maecenas iaculis rhoncus accumsan. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus scelerisque maximus risus in malesuada. Suspendisse mattis tincidunt porttitor. Nunc justo ante, varius nec tristique ac, facilisis gravida lorem. Cras ac velit ullamcorper ipsum euismod accumsan vitae vitae erat. Praesent lobortis sodales erat eleifend condimentum. Ut facilisis nunc ac varius posuere. Maecenas ultricies, libero sed faucibus iaculis, purus metus porttitor ante, nec volutpat est erat sed risus.`,
			`Aenean in tempus enim. Vestibulum nec lectus augue. Phasellus vestibulum nisi et libero efficitur pulvinar. Mauris imperdiet rhoncus pharetra. Nam finibus id nibh nec venenatis. Vivamus finibus varius nisl, sed eleifend massa tempor et. Suspendisse at dignissim magna. Suspendisse potenti. Sed bibendum lacus sed tellus sagittis, sed vulputate purus fermentum.`,
		],
	},
};

export default GAMES;
