function heading() {
    document.getElementById('heading').textContent = "Refresh Me";
}
heading();

function randImage() {
    //For player 1
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomImage = "images/dice" + randomNumber1 + ".png";
    var player1Img = document.querySelectorAll('img')[0].setAttribute('src', randomImage);


    //For player 2
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var randomImage2 = "Images/dice" + randomNumber2 + ".png";
    var player2Img = document.querySelectorAll('img')[1].setAttribute('src', randomImage2);


    if (randomNumber1 > randomNumber2) {
        var player1Result = document.querySelector(".winner-result");
        player1Result.textContent = "Player 1 is the winner";
    }
    else if (randomNumber1 === randomNumber2){
        var result = document.querySelector(".winner-result");
        result.textContent = "It's a tie";
    }
    else {
        var player2Result = document.querySelector(".winner-result");
        player2Result.textContent = "Player 2 is the winner";
    }
}

randImage();


