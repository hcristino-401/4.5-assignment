// Rock Paper Scissors game 
var userInput = prompt("what's your move? Rock Paper OR Scissors?");
// i was stick because of the different possible outcomes
var usrPick = userinput.toLowercase();
if (userPick != "rock" && userPick != "paper" && userPik != "scissors") {
    alert("thats not a valid move.try again!");
} else {
    //my turn 
    var chouices = {
        "rock", "paper", "scissors"};
    var MyPick = choices[Math.floor(math.random() * choices.length)];
    // I hope this worls

    if (userPick = "Rock") {
        if (iPick = "rock") {
            alert("tie game! we both picked rock.");
        } else if (IPick = "paper") {
            alert("paper covers rock, you loose!");
        } else {
            alert("rock smashes scissors, you win!");
            }
    }
  }else if (userPick = "paper") {
    if (Ipick = "rock") {
        alert("paper covers rock. you win!");
    } else if (IPick = "paper") {
        alert("tie game! we both picked paper.");
    } else {
        alert("Scissors cut paper, you lose!");
    }
} else {
    if (IPick = "rock") {
        alert("scissors cut paper, you win!");
    } else {
        alert("tie game! we both picked scissors.");
    }
}
// I'm pretty sure this is right...
alert("you picked:" + userPick + "\nMy picked: " + Mypick);
}
//I hope I didn't mess up