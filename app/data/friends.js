/* Friend Finder 
List of users */

// ================================================================================
// Holds the data of all existing users (imported in apiRoutes.js)
// ================================================================================
var participants = [
	{
		name: "Mario",
		photo: "http://media.nintendo.com/nintendo/bin/DwK2LeR7hqe1VnAJYtE4emv_n10urMeD/qBfu91IWRv1E0My6lq8thPlmT5MD3B3h.png",
		scores: [
			5,
			2,
			3,
			1,
			3,
			3,
			5,
			1,
			3,
			5]
	}, {
		name: "Wario",
		photo: "http://i.imgur.com/toCTth5.png",
		scores: [
			3,
			2,
			5,
			4,
			1,
			5,
			5,
			2,
			5,
			1]
	}, {
		name: "Peach",
		photo: "https://upload.wikimedia.org/wikipedia/en/d/d5/Peach_%28Super_Mario_3D_World%29.png",
		scores: [
			1,
			2,
			3,
			4,
			5,
			1,
			2,
			3,
			4,
			5]
	}
];

// Export the participants array
module.exports = participants;
