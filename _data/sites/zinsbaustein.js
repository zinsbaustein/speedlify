module.exports = {
	name: "zinsbaustein.de", // optional, falls back to object key
	description: "https://www.zinsbaustein.de",
	options: {
		frequency: 60 * 23, // (in minutes), 23 hours
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "site",
	},
	urls: [
		"https://www.zinsbaustein.de",
		"https://www.zinsbaustein.de/projekte",
		"https://www.zinsbaustein.de/projekte/one21",
		"https://www.zinsbaustein.de/projekte/immochance-deutschland-10-renovation-plus",
	]
};