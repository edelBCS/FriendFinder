var friendFinder = require("../data/friends.js");

module.exports = function(app){
    app.get("/api/friends", (req, res) => {
        res.json(friendFinder);
    });
    
    app.post("/api/friends", (req, res) => {
        function compareFriend(userOne, userTwo){
            var diff = 0;
            if(userOne.length === userTwo.length){
                for(var i = 0; i < userOne.length; ++i){
                    if(userOne[i] != userTwo[i]){
                        diff =+ Math.abs(userOne[i] - userTwo[i]);
                    }
                }
                return diff;
            }
        }
        
        function findFriend(user){
            var bestFriendScore = 1000;
            var bestFriendName;
        
            friendFinder.friends.forEach(element => {
                var tempFriend = compareFriend(user.scores, element.scores);
                if(tempFriend < bestFriendScore){
                    bestFriendScore = tempFriend;
                    bestFriendName = element.name;
                }        
            });
            console.log(bestFriendScore + bestFriendName)
            res.json({
                name: bestFriendName,
                score: bestFriendScore
            })
        }
    
        findFriend(req.body);
    
        
    
    });
}


  