var friends = require("../data/friends");

module.exports = function(app) {

	app.get("/api/friends", function(req, res) {
		res.json(friends)
	});

	app.post("/api/friends", function (req, res) {
		console.log(req.body);
		var user = req.body;
		var userScores = user.scores;

				var soleMate = friends[0];
				var highestScore = 100;
				var compatibleScore = 0;

				for (var i in friends) {
					for (var j = 0; j <10; j++) {
						compatibleScore += Math.abs(parseInt(friends[i].scores[j]) - parseInt(userScores[j]));
						console.log(compatibleScore);
					}
					if ((highestScore > compatibleScore) && (user.name != friends[i].name)) {
						soleMate = friends[i];
						highestScore = compatibleScore;
					}
					compatibleScore = 0;
				}
		var flag = true;
		for (var i = 0; i < friends.length; i++) {
			if (user.name == friends[i].name) {
				flag = false;
			}
		}
		if (flag) {
			friends.push(req.body);
		}
		res.json(soleMate);
	});

}