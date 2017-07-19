var path = require("path");

module.exports = function(app){
	app.get("/survey", function(surveyReq, surveyRes){
		surveyRes.sendFile(path.join(__dirname, "/../public/survey.html"));
	});

	// Home Page (default)
	app.use("/", function(homeReq, homeRes){
		homeRes.sendFile(path.join(__dirname, "/../public/home.html"));
	});

}
