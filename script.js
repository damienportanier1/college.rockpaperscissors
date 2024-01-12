/* Web Design & Client Side Scripting _ Week 8 Lab 

Damien Portanier 

22 11 2022

Please complete any 2 of the following:

- Create a web page that prints all of the lyrics to '99 bottles of beer' https://www.songfacts.com/lyrics/traditional/99-bottles-of-beer

- Take the previously created Rock Paper Scissors application and allow the user to play 3 times.

Bonus: The game should stop if the user wins

Bonus: The computer should change their guess each time

- Create a web page that asks a user how many subjects they take, and what marks they got in each subject. The application should then output their results

Bonus: Tell the user their grade from A-F based on their results

Please commit your attempts to GitHub, and then upload a link here.
*/

//in the index.html file a button is created to run what is inside the function check ()

//variables + ask input to the user + store it to variable + Math.random() method for the computer choice

var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
	//if statement 
	if (computerChoice < 0.34) {
		computerChoice = "rock";
	} 	
	else if(computerChoice <= 0.67) {
		computerChoice = "paper";
	} 
	else {
		computerChoice = "scissors";
	}

//begin with function give more control on js code 
var compare = function check(userChoice, computerChoice) {

    if(userChoice === computerChoice) {
    document.getElementById("placeholder").innerHTML="The result is a tie!";
	}
	if(userChoice === "rock") {
		if(computerChoice === "scissors") {
        document.getElementById("placeholder").innerHTML="rock wins";
		} 
			else {
			document.getElementById("placeholder").innerHTML="paper wins";
			}
	}
	if(userChoice === "paper") {
		if(computerChoice === "rock") {
        document.getElementById("placeholder").innerHTML="paper wins";
		} 	
			else {
				if(computerChoice === "scissors") {
				document.getElementById("placeholder").innerHTML="scissors wins";
				}
			}
	}		
	if(userChoice === "scissors") {
		if(computerChoice === "rock") {
		document.getElementById("placeholder").innerHTML="rock wins";
		} 
			else{
				if(computerChoice === "paper") {
				document.getElementById("placeholder").innerHTML="scissors wins";
				}
			}
	}

	

}//close function

document.write("User Choice: " + userChoice+"<br/>"+"Computer Choice: " + computerChoice);
compare(userChoice, computerChoice);
