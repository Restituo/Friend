var friendData = require("../data/friends");

module.exports = function(app){

    var difference;

    //Gets friend data from database

    app.get("/api/friends", function(req, res){
        res.json(friendData);
    });

    //Takes user input and calculates the best friend for you

    app.post("/api/friends", function(req, res) {

        var match = {
            name: "",
            photo:"",
            matching: 6969
        };

        var userData = req.body;
        var userScores = userData.scores;
    //Finds best match
        for(var i = 0; i < friendData.length; i++){
            difference = 0;
            var fScores = friendData[i].scores;
            for (var k = 0; k < userScores.length; k++){
                difference += Math.abs( parseInt(userScores[k]) - parseInt(fScores[k]) );
            }
            console.log(difference);
            console.log(match.matching);
            //Replaces match with the better one
            if (difference < match.matching){
                match.name = friendData[i].name;
                match.photo = friendData[i].photo;
                match.matching = difference;
                console.log(match);
            }
        }
    //push data
        friendData.push(userData);
        res.json(match);
        console.log(match);
        
    });  
};