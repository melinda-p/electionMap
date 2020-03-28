var createPolitician = function(name, partyColor){

    var politician = {};
    politician.name = name;
    politician.electionResults = null;
    politician.totalVotes = 0;
    politician.partyColor = partyColor;

  politician.tallyUpTotalVotes = function()
{
    this.totalVotes = 0;

    for (var i = 0; i < this.electionResults.length; i++){
        this.totalVotes = this.totalVotes + this.electionResults[i];
    }
  };
    return politician;

};

var fred = createPolitician("Fred Flinstone", [132,17,11]);

var mickey = createPolitician("Mickey Mouse", [245,141,136]);

console.log("Fred's color is:" + fred.partyColor);
console.log("Mickey's color is:" + mickey.partyColor);


fred.electionResults = [5,1,7,2,17,6,4,2,1,1,8,3,1,11,11,0,5,3,3,3,7,4,8,9,3,7,2,2,4,2,8,3,15,15,2,12,0,4,13,1,3,2,8,21,11,2,11,1,3,7,2];

mickey.electionResults = [4,2,4,4,38,3,3,1,2,28,8,1,3,9,0,6,1,5,5,1,3,7,8,3,3,1,3,2,2,6,2,14,0,1,6,7,3,7,3,6,1,3,17,27,1,2,11,2,3,1];

fred.electionResults[9] = 1;
mickey.electionResults[9] = 28;

fred.electionResults[4] = 17;
mickey.electionResults[4] = 38;

fred.electionResults[43] = 11;
mickey.electionResults[43] = 27;

console.log(fred.electionResults);
console.log(mickey.electionResults);

var setStateResults = function (state)
{
  if (fred.electionResults[state] > mickey.electionResults[state]){ theStates[state].winner = fred;}

else if (fred.electionResults[state] < mickey.electionResults[state]) {theStates[state].winner = mickey;}
else {winner = "DRAW!";}

var stateWinner = theStates[state].winner;

if (stateWinner !== null) {
    theStates[state].rgbColor = stateWinner.partyColor;
} else {
    theStates[state].rgbColor = [11,32,57];
}
 stateName.innerText = theStates[state].nameFull;
abbrev.innerText = "(" + theStates[state].nameAbbrev + ")";

candidate1Name.innerText = "Flinstone";
candidate2Name.innerText = "Mouse";

candidate1Results.innerText = fred.electionResults[state];
candidate2Results.innerText = mickey.electionResults[state];

if (theStates[state].winner === null){
    winnersName.innerText = "DRAW";
} else {
    winnersName.innerText = theStates[state].winner.name;
}
}

fred.tallyUpTotalVotes();
mickey.tallyUpTotalVotes();

console.log(fred.totalVotes);
console.log(mickey.totalVotes);

var winner = "?";
  if (fred.totalVotes > mickey.totalVotes){winner = fred.name;}
  else if (mickey.totalVotes > fred.totalVotes){winner = mickey.name;}
  else {
    winner = "DRAW"}
console.log("The winner is " + winner + "!");

var countryInfoTable = document.getElementById('countryResults');
var row = countryInfoTable. children[0].children[0];
row.children[0].innerText="Fred Flinstone";
row.children[1].innerText=fred.totalVotes;
row.children[2].innerText="Mickey Mouse";
row.children[3].innerText=mickey.totalVotes;
row.children[5].innerText="Mickey Mouse";


var stateInfoTable = document.getElementById('stateResults');
var header = stateInfoTable.children[0];
var body = stateInfoTable.children[1];
var stateName = header.children[0].children[0];
var abbrev = header.children[0].children[1];
var candidate1Name = body.children[0].children[0];
var candidate2Name = body.children[1].children[0];
var candidate1Results = body.children[0].children[1];
var candidate2Results = body.children[1].children[1];
var winnersName = body.children[2].children[1];
