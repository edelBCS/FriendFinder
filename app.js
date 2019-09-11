var friendFinder = require("./app/data/friends.js");

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
        var tempFriend = compareFriend(user, element.scores);
        if(tempFriend < bestFriendScore){
            bestFriendScore = tempFriend;
            bestFriendName = element.name;
        }        
    });
    return [bestFriendName, bestFriendScore];
}

var user1 = [3, 2, 6, 4, 5, 1, 2, 5, 4, 1];

// var user2 = [3, 2, 6, 4, 5, 1, 2, 5, 4, 1];

// console.log(compareFriend(user1, user2));
var newFriend = findFriend(user1);
console.log(newFriend[0] + " - " + newFriend[1]);