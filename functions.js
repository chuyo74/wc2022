function updateResult(gameNumber) {
    var change = document.getElementById(gameNumber);
    var group = change.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.id;
    let teamName1 = document.getElementsByClassName("first")[gameNumber - 1].innerHTML;
    let teamName2 = document.getElementsByClassName("second")[gameNumber - 1].innerHTML;
    let points1 = document.getElementById(teamName1).getElementsByClassName("Points")[0];
    let points2 = document.getElementById(teamName2).getElementsByClassName("Points")[0];

    if (change.innerHTML == "vs.")
    {
        change.innerHTML = "W-L";
        points1.innerHTML = parseInt(points1.innerHTML) + 3;
    }
    else if (change.innerHTML == "W-L")
    {
        change.innerHTML = "Tie";
        points1.innerHTML = parseInt(points1.innerHTML) - 3 + 1;
        points2.innerHTML = parseInt(points2.innerHTML) + 1;
    }
    else if (change.innerHTML == "Tie")
    {
        change.innerHTML = "L-W";
        points1.innerHTML = parseInt(points1.innerHTML) - 1;
        points2.innerHTML = parseInt(points2.innerHTML) - 1 + 3;
    }
    else
    {
        change.innerHTML = "vs.";
        points2.innerHTML = parseInt(points2.innerHTML) - 3;
    }

    sort(group);
    load16page(group);
}


function letterDown(letter){
  return String.fromCharCode(letter.charCodeAt(0) - 1)
}


function letterUp(letter){
  return String.fromCharCode(letter.charCodeAt(0) + 1)
}


function sort(group) {
    var table, rows, switching, i, x, y, shouldSwitch;
    var tableToSort = "Table" + group;
    table = document.getElementById(tableToSort);
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 1; i < (rows.length - 1); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i].getElementsByClassName("Points")[0];
        y = rows[i + 1].getElementsByClassName("Points")[0];
        //check if the two rows should switch place:
        if (parseInt(x.innerHTML) < parseInt(y.innerHTML)) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        /*If a switch has been marked, make the switch
        and mark that a switch has been done:*/
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
}


function updateNoTies(gameNumber) {
  var change = document.getElementById(gameNumber);
  let teamName1 = document.getElementsByClassName("first")[gameNumber - 1];
  let teamName2 = document.getElementsByClassName("second")[gameNumber - 1];
  if (change.innerHTML == "vs.")
  {
      change.innerHTML = "W-L";
      loadPlayoffs(teamName1.innerHTML, gameNumber);
  }
  else if (change.innerHTML == "W-L")
  {
      change.innerHTML = "L-W";
      loadPlayoffs(teamName2.innerHTML, gameNumber);
  }
  else
  {
      change.innerHTML = "vs.";
      loadPlayoffs(teamName1.innerHTML + "/" + teamName2.innerHTML, gameNumber);
  }
}


function load16page(group) {
  let teamName1 = document.getElementById("1"+group);
  teamName1.innerHTML = document.getElementById("Table"+group).rows[1].id;
  let teamName2 = document.getElementById("2"+group);
  teamName2.innerHTML = document.getElementById("Table"+group).rows[2].id;

  firstGame = teamName1.nextSibling.nextSibling.children[0].id;
  firstVsTeam = teamName1.nextSibling.nextSibling.nextSibling.nextSibling;
  document.getElementById("W" + firstGame).innerHTML = teamName1.innerHTML + "/" + firstVsTeam.innerHTML;

  secondGame = teamName2.previousSibling.previousSibling.children[0].id;
  secondVsTeam = teamName2.previousSibling.previousSibling.previousSibling.previousSibling;
  document.getElementById("W" + secondGame).innerHTML = teamName2.innerHTML + "/" + secondVsTeam.innerHTML;
}

// Load Playoffs takes the winner of a gameNumber and updates that teams name onto next two matches
function loadPlayoffs(winner, gameNumber) {
  // Search for game that winner of this gameNumber will play
  let teamToUpdate = document.getElementById("W"+gameNumber);
  teamToUpdate.innerHTML = winner;

  loadNextPlayoffs(teamToUpdate,gameNumber);
  updateFinal();
}

// LoadNextPlayoffs takes the element of a teams's next game at playoffs (whose result is yet unknown)
// and the last won gameNumber.
function loadNextPlayoffs(teamToUpdate, gameNumber) {
  let nextGame, firstOrSecond, nextUpdate;
  // Determine if at next game team is first or second
  firstOrSecond = teamToUpdate.className;
  if (firstOrSecond.localeCompare("first") === 0)
  {
    // game number of next game played by teamToUpdate
    nextGame = teamToUpdate.nextSibling.nextSibling.children[0].id;
    nextUpdate = teamToUpdate.innerHTML + "/" + document.getElementById("W" + (gameNumber + 1)).innerHTML;
  }
  if (firstOrSecond === "second")
  {
    nextGame = teamToUpdate.previousSibling.previousSibling.children[0].id;
    nextUpdate = document.getElementById("W" + (gameNumber - 1)).innerHTML + "/" + teamToUpdate.innerHTML;
//    document.getElementById("W62").innerHTML="test";
  }



  document.getElementById("W" + nextGame).innerHTML = nextUpdate;
  teamToUpdate=nextUpdate;
  gameNumber=nextGame;
}


function updateFinal()  {
  document.getElementById("W61").innerHTML = document.getElementById("W57").innerHTML + "/" + document.getElementById("W58").innerHTML;
  document.getElementById("W62").innerHTML = document.getElementById("W59").innerHTML + "/" + document.getElementById("W60").innerHTML;
}

function printFunction() {
  var original = document.body.innerHTML;
  document.body.innerHTML = document.getElementById("PlayOffs").innerHTML;
  window.print();
  document.body.innerHTML = original;
}