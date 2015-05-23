/*
Jessica Balacy
05-22-15
Week 3 Assignment: ANALYZE Duel #3 
*/

    console.log("FIGHT!!!"); //Print to the console: "FIGHT!!!"

    //Declare players as objects with the properties: name, damage, health
    var playerOne = {
		name: "Spiderman",
		damage: 20,
		health: 100
	};
    var playerTwo = {
		name: "Batman",
		damage: 20,
		health: 100
	};

    //initiate round
    var round=0; //Declare variable round, assign value of 0 (this determines the round number)

	document.getElementById("fight_btn").onclick = function() {fight()}; //Set click event for the fight button

    function fight(){ //Declare function fight
	
		  //Modify HTML elements to reflect players' health and the Round number	
		  document.getElementById("kabal").innerHTML = "Spiderman:"+ playerOne.health;
		  document.getElementById("kratos").innerHTML = "Batman:"+ playerTwo.health;
		  document.getElementById("round_number").innerHTML = "Round: "+round;

		  //random formula is - Math.floor(Math.random() * (max - min) + min);
		  var minDamage1 = playerOne.damage * .5; //set the minimum damage to half of player1Damage
		  var minDamage2 = playerTwo.damage * .5; //set the minimum damage to half of player2Damage
		  var f1 = Math.floor(Math.random()*(playerOne.damage-minDamage1)+minDamage1);
		  var f2 = Math.floor(Math.random()*(playerTwo.damage-minDamage2)+minDamage2);

		  //inflict damage
		  playerOne.health-=f1; //Change the value of playerOneHealth according to the result of f1
		  playerTwo.health-=f2; //Change the value of playerTwoHealth according to the result of f2

		  //Print the new value of playerOneHealth and PlayerTwoHealth to the console
		  console.log(playerOne.name+": "+playerOne.health + " " + playerTwo.name+":"+playerTwo.health); 

		  //check for victor
		  var result = winnerCheck(); //Declare variable result, assign to the function winnerCheck
		  console.log(result); //Print to the console: result
		  if (result==="no winner") //run this code if the result equals "no winner"
		  {
			  round++;

		  } else{ //run this code if the result does not equal to "no winner"
			  document.getElementById("fight_btn").disabled = true; //Disable the button
			  document.getElementById("scores").innerHTML = "Game Over: "+result; //Replace the players' health status with the result
		  };

		};

    function winnerCheck(){ //Declare function winnerCheck
        var result="no winner"; //Declare variable result, assign value "no winner"
        if (playerOne.health<1 && playerTwo.health<1) //Check if both player one and player two health levels are less than 1
        {
            result = "You Both Die"; //assign value "You Both Die" to result variable
        } else if(playerOne.health<1){ //If only player one health level is less than 1, run the code below
            result =playerTwo.name+" WINS!!!" //Assign the "WINS!!!" value to the result variable to alert the player that playerTwoName wins
        } else if (playerTwo.health<1) //If only player two health level is less than 1, run the code below
        {
            result = playerOne.name+" WINS!!!" //Assign the "WINS!!!" value to the result variable to alert the player that playerOneName wins
        };
       return result; //end current function and assign the new value to the fight function
    };

    /*******  The program gets started below *******/
    fight(); //Invoke the fight function

