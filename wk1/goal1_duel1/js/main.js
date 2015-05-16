/*
Jessica Balacy
05-15-15
Week 2 Assignment: ANALYZE Duel #2
*/

/**
 * Duel Fight Game - FINISHED
 * Date: 4/09/13

 Assignment 1
 Part 1/3 of series
*/

// self-executing function
(function(){ //run the entire function below

    console.log("FIGHT!!!"); //Print to the console: "FIGHT!!!"

    //player name, damage, health
    var playerOne =["Spiderman", 20, 100];
    var playerTwo = ["Batman", 20, 100];]

    //initiate round
    var round=0; //Declare variable round, assign value of 0 (this determines the round number)

    function fight(){ //Declare function fight
        alert(playerOne[0]+":"+playerOne[2]+"  *START*  "+playerTwo[0]+":"+playerTwo[2]); //Notify the user that the game is starting, set both players at max health
        for (var i = 0; i < 10; i++) //repeat this function until it reaches ten
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = playerOne[1] * .5; //set the minimum damage to half of player1Damage
            var minDamage2 = playerTwo[1] * .5; //set the minimum damage to half of player2Damage
            var f1 = Math.floor(Math.random()*(playerOne[1]-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(playerTwo[1]-minDamage2)+minDamage2);

            //inflict damage
            playerOne[2]-=f1; //Change the value of playerOneHealth according to the result of f1
            playerTwo[2]-=f2; //Change the value of playerTwoHealth according to the result of f2

            console.log(playerOne[0]+": "+playerOne[2] + " " + playerTwo[0]+":"+playerTwo[2]); //Print the new value of playerOneHealth and PlayerTwoHealth to the console

            //check for victor
            var result = winnerCheck(); //Declare variable result, assign to the function winnerCheck
            console.log(result); //Print to the console: result
            if (result==="no winner") //run this code if the result equals "no winner"
            {
                round++;
                alert(playerOne[0]+":"+playerOne[2]+"  *ROUND "+round+" OVER"+"*  "+playerTwo[0]+":"+playerTwo[2]); //Notify the user the health status of playerOneName and PlayerTwoName and the end of the current round

            } else{ //run this code if the result does not equal to "no winner"
                alert(result); //Notify the user of the result of the fight
                break; //terminate the current loop
            };

          };
    };

    function winnerCheck(){ //Declare function winnerCheck
        var result="no winner"; //Declare variable result, assign value "no winner"
        if (playerOne[2]<1 && playerTwo[2]<1) //Check if both player one and player two health levels are less than 1
        {
            result = "You Both Die"; //assign value "You Both Die" to result variable
        } else if(playerOne[2]<1){ //If only player one health level is less than 1, run the code below
            result =playerTwo[0]+" WINS!!!" //Assign the "WINS!!!" value to the result variable to alert the player that playerTwoName wins
        } else if (playerTwo[2]<1) //If only player two health level is less than 1, run the code below
        {
            result = playerOne[0]+" WINS!!!" //Assign the "WINS!!!" value to the result variable to alert the player that playerOneName wins
        };
       return result; //end current function and assign the new value to the fight function
    };

    /*******  The program gets started below *******/
    fight(); //Invoke the fight function

})();