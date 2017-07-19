var path = require("path");

var allParticipants = require("../data/friends.js");

module.exports = function(app) {
	app.get("/api/friends", function(friendsReq, friendsRes){
		friendsRes.json(allParticipants);
	});

	app.post("/api/friends", function(newReq, newRes){
		var participant = newReq.body;
		var scoresInt = [];

		for(var i = 0; i < participant.scores.length; i++){
			var answers = parseInt(participant.scores[i]);
			// console.log(typeof(answers));
			scoresInt.push(answers);
		}
		
		var newUser = {
			name: participant.name,
			photoLink: participant.photoLink,
			scores: scoresInt 
		}

		console.log(newUser);
		// console.log(participant);

		var difference = 0;
		var bestDifference;
		var chosenFriend;

		for (var j = 0; j < allParticipants.length; j++){
			difference = 0;

			for(var k = 0; k < newUser.scores.length; k++){
				// var currentUser = parseInt(allParticipants[j].scores[k]);
				// var newUser = parseInt(participant.scores[k]);
				difference += Math.abs(allParticipants[j].scores[k] - newUser.scores[k]);
				// difference += Math.abs(currentUser - newUser);
			} 

			console.log(difference);

			if (bestDifference === undefined){
				bestDifference = difference;
				console.log("This is the new difference: " + difference);
			}

			if (difference <= bestDifference){
				bestDifference = difference;
				chosenFriend = allParticipants[j];
				// console.log("This is the pick: " + chosenFriend);
			}
			// console.log(chosenFriend);
		}

		console.log("Your chosen friend is: " + chosenFriend.name);


		allParticipants.push(newUser);
		newRes.json(chosenFriend);









	});
}