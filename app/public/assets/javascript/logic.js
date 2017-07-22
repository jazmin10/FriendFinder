$(document).ready(function(){
	$("#submitForm").on("click", function(event){
		event.preventDefault();

		var responses = [];

		for(var i = 1; i < 11; i++){
			var answers = $("#question" + i).val();
			
			responses.push(parseInt(answers));
			
		}

		var nameEntered = $("#nameInput").val().trim();
		var linkEntered = $("#photoInput").val().trim();

		// Validating user's input
		var validInput = validateForm(nameEntered, linkEntered, responses);
		
		if (validInput === false){
			alert("Please fill out all fields before submitting!");
		}
		else {
			var newApplicant = {
				name: $("#nameInput").val().trim(),
				photo: $("#photoInput").val().trim(),
				scores: responses
			};

			// POST: Send new user's information to obtain a match
			fetch("/api/friends",{method:'post',body:JSON.stringify(newApplicant),headers:{
				"Content-Type":"application/json"
			}})
			.then(x => x.json())
			.then(function(data){
				// data is the JSON (parsed) response of the match
				var modalHTML = "<div class='modal-content'>";
				modalHTML += "<span class='close'>&times;</span>";
				modalHTML += "<h2>Your match is...</h2><h1 id='matchName'><strong>"+ data.name.toUpperCase() +"</strong></h1>"
				modalHTML += "<img id='matchImage' src="+ data.photo +" onerror='standby()'>";
				modalHTML += "</div>"

				// Actions to display the modal
				$("#myModal").append(modalHTML);

				var modal = document.getElementById('myModal');
				var span = document.getElementsByClassName("close")[0];

				// Displays the modal
		    	modal.style.display = "block";
		    	// When the modal is closed
		    	span.onclick = function() {
		    		modal.style.display = "none";
		    		restart();
				}
			});
		}
	});

	// Validating input
	function validateForm(name, photo, scores){
		if(name === ""){
			return false;
		}
		else if (photo === ""){
			return false;
		}
		else {
			for (var l = 0; l < scores.length; l++){
				if (isNaN(scores[l])){
					return false;
				}
			}
		}
		return true;
	}

	// Once a user submits their responses, restart the form 
	function restart(){
		$("#nameInput").val("");
		$("#photoInput").val("");

		// Need to empty, otherwise it will keep showing the last match
		$("#myModal").html("");

		for(var i = 1; i < 11; i++){
			var answers = $("#question" + i).val("");
		}
	}
});