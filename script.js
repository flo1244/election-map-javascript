// JavaScript Document

//Factory Function
var createPolitician = function(name, partyColor)
{
//Politician Object
var politician = {};
    politician.name = name;
    politician.electionResults = null;
    politician.totalVotes = 0;
    politician.partyColor = partyColor;
  
  /*politician.announcePolitician = function()
  {
    console.log( this.name + " " + this.electionResults + " " + this.totalVotes );
  };

  politician.announcePolitician(); tested to see if function works*/
	
	politician.tallyVotes = function ()
	{
		this.totalVotes = 0
		
		for (var i = 0; i < this.electionResults.length; i++ )
			{
				this.totalVotes = this.totalVotes + this.electionResults[i];
				//console.log(this.totalVotes);
			}
	};
	

	
  return politician; //Returns value from function to output a value back to where it was called. Produces new politician object.
  

};


var jane = createPolitician("Jane Doe", [254, 209, 5]);//RGB values partyColor Libertarian Party
var john = createPolitician("John Doe", [0, 169, 92]);//RGB values partyColor Green Party

//Arrays of Election Results
jane.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2]

john.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1]

//Recounts - Update Data **changing the value of a property in a object instance**
//Florida (array position 9)
jane.electionResults[9] = 1;
john.electionResults[9]	= 28;

//California(array position 4)
jane.electionResults[4] = 17;
john.electionResults[4] = 38;

//Texas(array position 43)
jane.electionResults[43] = 11;
john.electionResults[43] = 27;	


//Assign the winner of each state (StateResults)
var setStateResults = function(state) /*Using theStates is an array that accesses all of the elements in the “State” object, and state is the property that defines the state number in alphabetical order from third party code map.js */
{ 
		theStates[state].winner = null;
	
	if(jane.electionResults[state] > john.electionResults[state])
		{
			theStates[state].winner = jane;
			theStates[state].winnerColor = jane.partyColor;
		}
	else if(john.electionResults[state] > jane.electionResults[state])
		{
			theStates[state].winner = john;
			theStates[state].winnerColor = john.partyColor;
		}

//variables for each position on th table populating state results table (DOM)
var stateTable = document.getElementById('stateResults');
	
var header = stateTable.children[0];
var body = stateTable.children[1];
	
var stateName = header.children[0].children[0];
var stateAbbrev = header.children[0].children[1];
	
var candidate1Name = body.children[0].children[0];
var candidate2Name = body.children[1].children[0];
	
var candidate1Results = body.children[0].children[1];
var candidate2Results = body.children[1].children[1];
	
var winnersName = body.children[2].children[1];
	
//text to populate info on state results table
stateName.innerText = theStates[state].nameFull;
stateAbbrev.innerText = "(" + theStates[state].nameAbbrev +")";
	
candidate1Name.innerText = jane.name;
candidate2Name.innerText = john.name;
	
candidate1Results.innerText = jane.electionResults[state];
candidate2Results.innerText = john.electionResults[state];

//if/else statement declare the winner or Draw per state when hovering over mouse effect map.js...
if (theStates[state].winner === null){
	winnersName.innerText = "DRAW";
}
else{
	winnersName.innerText = theStates[state].winner.name;
}
	
	//Change the color of each state base on the winner	(Win will declare candidates partyColor a DRAW will declare [11, 32, 57])
var stateWinner = theStates[state].winner;
	if(stateWinner !== null){
		theStates[state].rgbColor = stateWinner.partyColor;
	}else{
		theStates[state].rgbColor = [11, 32, 57];
	}
}; //end of setStateResults = function(state); All theStates[state] are in the function defined by state object in map.js.


jane.tallyVotes();
john.tallyVotes();


//Declare a winner if/else statement 
var winner = function ()
{
	if (jane.totalVotes > john.totalVotes)
		{
			winner = jane.name;
		}
	else if (john.totalVotes > jane.totalVotes)
		{
			winner = john.name;
		}
	else {
		winner = "DRAW";
	}
};
winner();


//populate table announcing the winners country results (DOM)
var countryTable = document.getElementById('countryResults');
var row = countryTable.children[0].children[0];



row.children[0]//party image
row.children[1].innerText = jane.name;
row.children[2].innerText = jane.totalVotes;
row.children[3]//party image
row.children[4].innerText = john.name;
row.children[5].innerText = john.totalVotes;

row.children[7].innerText = winner;


//console.log(jane.electionResults);
//console.log(john.electionResults);

//console.log(jane.totalVotes);
//console.log(john.totalVotes);

console.log("The next president of the United States is" + " " + winner + "!");


//console.log("Jane's party color is " + jane.partyColor);
//console.log("John's party color is " + john.partyColor);







