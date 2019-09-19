$("#submitBtn").on("click", (event) => {
    event.preventDefault();

    //validate data
    function validData() {
        return true
    }

    //post data to server and get back person
    if(validData()){
        var newFriend = {
            name: $("#nameInput").val(),
            photo: $("#photoLinkInput").val(),
            scores: [
                parseInt($("#question1").val().charAt(0)),
                parseInt($("#question2").val().charAt(0)),
                parseInt($("#question3").val().charAt(0)),
                parseInt($("#question4").val().charAt(0)),
                parseInt($("#question5").val().charAt(0)),
                parseInt($("#question6").val().charAt(0)),
                parseInt($("#question7").val().charAt(0)),
                parseInt($("#question8").val().charAt(0)),
                parseInt($("#question9").val().charAt(0)),
                parseInt($("#question10").val().charAt(0))
            ]
        };
        alert(newFriend.name + newFriend.photo + newFriend.scores)
        $.post("/api/friends", newFriend, (data) => {
            console.log(data);
        });
    }
});


