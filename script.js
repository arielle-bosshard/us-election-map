var createPolitician = function(name, partyColor){
 
    var politician = {}; 
    politician.name = name; 
    politician.electionResults = null;
    politician.totalVotes = 0;
    politician.partyColor = partyColor;
    politician.tallyUpTotalVotes = function(){
 
    this.totalVotes = 0;
    
    for (var i = 0; i < this.electionResults.length; i++){
        this.totalVotes = this.totalVotes + this.electionResults[i];
      }
 
    };
    return politician;
 
};
 
var jane = createPolitician("Jane Doesitall", [132,17,11]);
var betsy = createPolitician("Betsy Rocks", [245,141,136]);

jane.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];
betsy.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

jane.electionResults[9] = 1;
betsy.electionResults[9] = 28;
 
jane.electionResults[4] = 17;
betsy.electionResults[4] = 38;
 
jane.electionResults[43] = 11;
betsy.electionResults[43] = 27;
 

jane.tallyUpTotalVotes();
betsy.tallyUpTotalVotes();
 
//console log total votes
console.log(jane.totalVotes);
console.log(betsy.totalVotes);

var winner = "???";
  
    if (jane.totalVotes > betsy.totalVotes){
      winner = jane.name;
    } else if (jane.totalVotes < betsy.totalVotes){
      winner = betsy.name;
    } 

var countryInfoTable = document.getElementById('countryResults');
var row = countryInfoTable.children[0].children[0];
  row.children[0].innerText = jane.name;
  row.children[1].innerText = jane.totalVotes;
  row.children[2].innerText = betsy.name;
  row.children[3].innerText = betsy.totalVotes;
  row.children[5].innerText = winner;

var setStateResults = function(state){
  
  theStates[state].winner = null;
  
  if (jane.electionResults[state] > betsy.electionResults[state]) {
    theStates[state].winner = jane
  } else if (jane.electionResults[state] < betsy.electionResults[state]){
    theStates[state].winner = betsy
  } 
  
  
  var stateInfoTable = document.getElementById('stateResults');
  var header = stateInfoTable.children[0];
  var body = stateInfoTable.children[1];
  
  var stateName = header.children[0].children[0];
  var abbrev = header.children[0].children[1];
  
  var candidate1Name = body.children[0].children[0];
  var candidate1Results = body.children[0].children[1];
  
  var candidate2Name = body.children[1].children[0];
  var candidate2Results = body.children[1].children[1];
  
  var winnersName = body.children[2].children[1];
  
  stateName.innerText = theStates[state].nameFull;
  abbrev.innerText = "(" + theStates[state].nameAbbrev + ")"; //Go check real data name
  
  candidate1Name.innerText = jane.name
  candidate1Results.innerText = jane.electionResults[state];
  
  candidate2Name.innerText = betsy.name
  candidate2Results.innerText = betsy.electionResults[state];
  
  if (theStates[state].winner === null){
    winnersName.innerText = "DRAW."
  } else {
    winnersName.innerText = theStates[state].winner.name
  }
  
  var stateWinner = theStates[state].winner;
  if (theStates[state].winner !== null) {
    theStates[state].rgbColor = stateWinner.partyColor;
  } else {
    theStates[state].rgbColor = [11,32,57];
  }
};