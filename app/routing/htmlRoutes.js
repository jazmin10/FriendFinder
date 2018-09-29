/* Friend Finder 
HTML Routes */

// Require path package to get the correct file path to our html
var path = require("path");

// ================================================================================
// We will be exporting the HTML routing (imported at server.js)
// ================================================================================
module.exports = function(app){

	// GET: Sends survey.html file
	app.get("/survey", function(surveyReq, surveyRes){
		surveyRes.sendFile(path.join(__dirname, "/../public/survey.html"));
	});

	// Home Page (default)
	app.use("/", function(homeReq, homeRes){
		homeRes.sendFile(path.join(__dirname, "/../public/home.html"));
	});

}
