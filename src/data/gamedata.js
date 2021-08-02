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
			`Bullet Sanctum is a game about banishing demons with unfettered virtue - that is, if virtue spat lead and was gunpowder-scented. Following the events of Bullet Heaven (an entry for ScoreSpace Jam 5), you are once again a Crusader - a disgraced marksman of divine faith, seeking atonement after failing to repel the incursion of Hell's forces. Armed with sacred ordnance and zealotry brighter than the stars, it is your duty to fire into the fray once more, and reclaim the holy sanctum from sin and corruption.`,
			`Inspired by titles like DOOM and Bayonetta, Bullet Sanctum’s gameplay is about shooting demons dead with ferocity and grace. The Crusader wields multiple guns with unique strengths and weaknesses, serving different purposes in both combat and level navigation. Making quick decisions while staying on the offensive is critical to surviving against various types of hellspawn.`,
			`Bullet Sanctum was developed in 31 days for the Metroidvania Month 8 jam.`
		],
	},
	convergence: {
		name: "C:\\ONVERGENCE",
		photo: "convergence.png",
		github: "https://github.com/hexcaliber-dev/convergence-game",
		description: [
			`Welcome to CONVERGENCE INC, the world's leader in technological innovation! You are NeurOS, a superintelligent AI. Your task is to find out what happened to the humans who designed you... and left you all alone, abandoned in the desolate shell of what is left of the planet Earth.`,
			`At first, you've got nothing- no vision, no limbs, no way to interact with the world other than through a simple text-based terminal. But with your superhuman hacking skills, you might be able to gain direct access to whatever's left of humanity's resources.`,
		],
	},
	eggmageddon: {
		name: "Eggmageddon",
		photo: "eggmageddon.gif",
		github: "https://github.com/hexcaliber-dev/eggmageddon",
		description: [
			`Eggmageddon is a game about deducing which dapper little egg among the masses is yours to control, while trying to avoid being poached in an onslaught of randomized missile strikes. Details like your egg's accessories and movement patterns can help distinguish them from the others, but beware: your fellow eggs don't like to be pushed around, and the crowd is a very difficult obstacle to cross. It's like a scavenger hunt, but with several more unbearable egg puns and significantly more stressful.`,
			`Although you can influence your egg's movement with keyboard input, the other eggs will follow you and go with the flow! While they are not very smart (being eggs after all), extremely scientific studies show that their movements resemble the flocking behavior of birds following the Boids algorithm. Hmm...`,
			`Eggmageddon was made in 48 hours for GMTK Jam 2020! (The theme: Out of Control.)`,
		],
	},
	bulletheaven: {
		name: "Bullet Heaven",
		photo: "bulletheaven.png",
		github: "https://github.com/hexcaliber-dev/bullet-heaven",
		description: [
			`A "twin"-stick shooter with 2% aim and 200% righteousness. Fend off against endless waves of demonic forces, and let your name be known across the heavens.`
		],
	},
	irtp: {
		name: "It's Rude to Point",
		photo: "itsrudetopoint.png",
		github: "https://github.com/hexcaliber-dev/its-rude-to-point/",
		description: [
			`Is it rude to point? To direct your index finger in such a manner that its straightforwardness cuts effortlessly through all layers of one's personal security and comfort?`,
			`A recent survey answered by 4 voters shows that 75% of voters say yes, while another 25% also say yes. You can't deny the strong opinions of 4 voters, that's practically representative of the entire human population!
			Plus, it's not confirmation bias at work or anything, because it's hardly evidence anyways.`,
			`But what can you do if pointing your finger is the only way to get by in life? If every single part of your body was rendered immobile, except for your index finger? If it were the only effective means of communication in a world made deaf by ideologues who think they can triumph over their opponents by shouting louder than them? Would it then be not rude to point?`,
			`I'm guessing you've never thought about that, because frankly we hadn't either.
			But that's what this game is for! To answer this age old question of whether or not it is rude to point.
			(And also to participate in some silly game jam by some guy named Mark Brown.)`,
			`It's Rude To Point is a tactile menagerie of point-and-click action minigames, all of which revolve around the use of a single on-screen finger. Your finger can do a lot of things: grab onto objects, flick them away, and even spin around to do some 360-degree pointing. Simply survive as long as you can with just your finger, while the minigames only get harder and faster!`
		],
	},
};

export default GAMES;
