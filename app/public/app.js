$(document).ready(function(){
    $("#missingData").hide();

    $("#modalCloseBtn").on("click", event => {
        $(".modal-body").empty();
    });

    $("#submitBtn").on("click", (event) => {
        event.preventDefault();
    
        
    
        //validate data
        function validData() {
            var isValid = true;
    
            if($("#nameInput").val() === ""){
                isValid = false;
            }
    
            if($("#photoLinkInput").val() === ""){
                isValid = false;
            }
    
            $(".question").each(function() {
                if($(this).val() === "Choose..."){
                    isValid = false;
                }
            });
    
            if(!isValid){
                $("#missingData").show();
            }
        
            return isValid;
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

            $.post("/api/friends", newFriend, (data) => {
                $(".modal-body").append($("<h1>").text(data.name));
                $(".modal-body").append($("<img>").attr("src", data.photo));
                $(".modal-body").append($("<h1>").text("SCORE: " + data.score));
                $("#bestFriendModal").modal("toggle");
            });
        }
    });
});




