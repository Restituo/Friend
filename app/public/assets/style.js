
$(".submit").on("click", function(event) {
    event.preventDefault();

    function validateForm() {
		var isValid = true;
		$(".form-control").each(function() {
		    if ( $(this).val() === "" )
                isValid = false;
        });
        
	    $(".chosen-select").each(function() {
		    if( $(this).val() === "")
                isValid = false
		});
		return isValid;
	}

    if (validateForm()){
        var newPerson = {
            name: $("#userName").val().trim(),
            photo: $("#userPhoto").val().trim(),
            scores: [ $("#q1").val(), $("#q2").val(), $("#q3").val(), $("#q4").val(), $("#q5").val(), $("#q6").val(), $("#q7").val(), $("#q8").val(), $("#q9").val(), $("#q10").val()]
        }
        console.log(newPerson);
        var currentURL = window.location.origin;

        $.post("/api/friends", newPerson, function(data) {
            //Shows best match
            $(currentURL + "#matchName").text(data.name);
	        //$("#matchPhoto").attr("src", data.photo);
            $("#resultsModal").modal("toggle");
        });
    }
    else{
        alert("Please fill out the entire survey");
    }

  });