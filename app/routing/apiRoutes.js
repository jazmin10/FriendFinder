/* Friend Finder 
API Routes */

// ================================================================================
// Require the list of all existing users, i.e. the participants array
// ================================================================================
var allParticipants = require("../data/friends.js");

// ================================================================================
// We will be exporting the API routing (imported at server.js)
// ================================================================================
module.exports = function(app) {

	// GET: This sends the JSON of the users' list
	app.get("/api/friends", function(friendsReq, friendsRes){
		friendsRes.json(allParticipants);
	});

	// POST: Grabs the data of the new user, calculates compatibility, adds new
	// user to the users' list, and sends the JSON data of the match
	app.post("/api/friends", function(newReq, newRes){

		// The object that includes the new user's responses
		var participant = newReq.body;
		
		var totalDifference = 0;
		var bestDifference;
		var chosenFriend;

		// Find the best match for the new user by comparing the difference 
		// between the new user's scores against those from other users, 
		// question by question. Add up the differences to calculate the 
		// totalDifference. The closest match will be the user with the 
		// least amount of difference.
		// ---------------------------------------------------------------------------
		for (var j = 0; j < allParticipants.length; j++){
			totalDifference = 0;

			for (var k = 0; k < participant.scores.length; k++){
				totalDifference += Math.abs(allParticipants[j].scores[k] - participant.scores[k]);
			} 

			if (bestDifference === undefined){
				bestDifference = totalDifference;
			}

			if (totalDifference <= bestDifference){
				bestDifference = totalDifference;
				chosenFriend = allParticipants[j];
			}
		}
		
		allParticipants.push(participant);

		newRes.json(chosenFriend);
	});
}