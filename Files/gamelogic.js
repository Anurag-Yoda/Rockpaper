
        // User choice


        var userChoice = prompt("Do you choose rock, paper or scissors?");
        var Userchoicefilled = userChoice;
        

       






        if (! userChoice) {
            // User choice was undefined
             document.getElementById("Userchoicefilled").innerHTML = "You choose Nothing!";
        } else {
            // Display user choice
             document.getElementById("Userchoicefilled").innerHTML = "You choose  " + Userchoicefilled;
        }

        // Computer choice
        var computerChoice = Math.random();
        if (computerChoice < 0.34) {
            computerChoice = "rock";
        } else if(computerChoice <= 0.67) {
            computerChoice = "paper";
        } else {
            computerChoice = "scissors";
        }

        // Display computer choice
        document.getElementById("Compchoicefilled").innerHTML = "Computer choose  " + computerChoice;

        // Compare user choice vs computer choice
        var compare = function(choice1,choice2) {
            if (choice1 === choice2) {
                return "It's a tie!";
            }
            if (choice1 === "rock") {
                if (choice2 === "scissors") {
                    // rock wins
                    return "You win!";
                } else {
                    // paper wins
                    return "You lose! Try again.";
                }
            }
            if (choice1 === "paper") {
                if (choice2 === "rock") {
                    // paper wins
                    return "You win!";
                } else {
                    // scissors wins
                    return "You lose! Try again.";
                }
            }
            if (choice1 === "scissors") {
                if (choice2 === "rock") {
                    // rock wins
                    return "You lose! Try again.";
                } else {
                    // scissors wins
                    return "You win!";
                }
            }
        };

        // Run the compare function
        var results = compare(userChoice,computerChoice);

        // Display results
         document.getElementById("Result").innerHTML = results;
  
