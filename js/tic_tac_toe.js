var turn = "X";


var selections = new Array();

selections["X"] = [0,0,0,0,0,0,0,0,0]
selections["O"] = [0,0,0,0,0,0,0,0,0]

var total_turns_played = 0;


var score = new Array();

score["X"] = 0
score["O"] = 0


var win_indexes =
[[0,1,2],[3,4,5],[6,7,8],
[0,3,6],[1,4,7],[2,5,8],
[0,4,8],[2,4,6]];



//Generate Game function
function generateGame() {

    //Cleaning Board
    document.getElementById("game-board").innerHTML = "";
    selections['X'] = [0,0,0,0,0,0,0,0,0];
	selections['O'] = [0,0,0,0,0,0,0,0,0];
	total_turns_played = 0;
	var cell_id = 0;

    //Board Creation
    for(var i = 0; i < 3; i++) {
        for(var j = 0; j < 3; j++) {
            var button = document.createElement("input");

            button.setAttribute("type", "button");

            button.setAttribute("class", "grid-cell");

            button.setAttribute("onclick", "markCheck(this)");

            button.setAttribute("id", cell_id);

            document.getElementById("game-board").appendChild(button);

            button.setAttribute("value", " ");

            cell_id++;
        }

        var line_break = document.createElement("br");
        document.getElementById("game-board").appendChild(line_break);

    }

}


//Mark check function
function markCheck(obj) {

    var cell = obj.id;

    obj.value = turn;

    //X's Turn
    if (turn == "X" ) {
		obj.setAttribute("class", "green-player");

        console.log(`player ${turn} marked ${cell}!`);
        selections[turn][cell] = 1;

        checkPlayerHasAnyWinningPattern();

		turn = "O";
        
    //O's Turn
	} else {
		obj.setAttribute("class", "red-player");

        console.log(`player ${turn} marked ${cell}!`);
        selections[turn][cell] = 1;

        checkPlayerHasAnyWinningPattern();

		turn = "X";
	}

    obj.setAttribute("disabled", "disabled");

    total_turns_played++;

    //No one won - game draw
    if(total_turns_played == 9 && game_over == false) {
		alert("Game Draw!");
        game_over = true;
    }

}


//Check player has any winning pattern function
function checkPlayerHasAnyWinningPattern() {

    game_over = false;

    //Check for [0,1,2] indexs situation
    if(selections[turn][0] == 1 && selections[turn][1] == 1 && selections[turn][2] == 1) {
        if(turn == "X"){
            setTimeout(function() {
                alert("Player X Won!");
            },1)
        }else {
            setTimeout(function() {
                alert("Player O Won!");
            },1)
        }

        game_over = true;
        
        playerScore()
        disableAllCells()
    }


    //Check for [3,4,5] indexs situation
    if(selections[turn][3] == 1 && selections[turn][4] == 1 && selections[turn][5] == 1) {
        if(turn == "X"){
            setTimeout(function() {
                alert("Player X Won!");
            },1)
        }else {
            setTimeout(function() {
                alert("Player O Won!");
            },1)
        }

        game_over = true;
        
        playerScore()
        disableAllCells()
    }


    //Check for [6,7,8] indexs situation
    if(selections[turn][6] == 1 && selections[turn][7] == 1 && selections[turn][8] == 1) {
        if(turn == "X"){
            setTimeout(function() {
                alert("Player X Won!");
            },1)
        }else {
            setTimeout(function() {
                alert("Player O Won!");
            },1)
        }

        game_over = true;

        playerScore()
        disableAllCells()
    }


    //Check for [0,3,6] indexs situation
    if(selections[turn][0] == 1 && selections[turn][3] == 1 && selections[turn][6] == 1) {
        if(turn == "X"){
            setTimeout(function() {
                alert("Player X Won!");
            },1)
        }else {
            setTimeout(function() {
                alert("Player O Won!");
            },1)
        }

        game_over = true;

        playerScore()
        disableAllCells()
    }


    //Check for [1,4,7] indexs situation
    if(selections[turn][1] == 1 && selections[turn][4] == 1 && selections[turn][7] == 1) {
        if(turn == "X"){
            setTimeout(function() {
                alert("Player X Won!");
            },1)
        }else {
            setTimeout(function() {
                alert("Player O Won!");
            },1)
        }

        game_over = true;

        playerScore()
        disableAllCells()
    }


    //Check for [2,5,8] indexs situation
    if(selections[turn][2] == 1 && selections[turn][5] == 1 && selections[turn][8] == 1) {
        if(turn == "X"){
            setTimeout(function() {
                alert("Player X Won!");
            },1)
        }else {
            setTimeout(function() {
                alert("Player O Won!");
            },1)
        }

        game_over = true;

        playerScore()
        disableAllCells()
    }


    //Check for [0,4,8] indexs situation
    if(selections[turn][0] == 1 && selections[turn][4] == 1 && selections[turn][8] == 1) {
        if(turn == "X"){
            setTimeout(function() {
                alert("Player X Won!");
            },1)
        }else {
            setTimeout(function() {
                alert("Player O Won!");
            },1)
        }

        game_over = true;

        playerScore()
        disableAllCells()
    }


    //Check for [2,4,6] indexs situation
    if(selections[turn][2] == 1 && selections[turn][4] == 1 && selections[turn][6] == 1) {
        if(turn == "X"){
            setTimeout(function() {
                alert("Player X Won!");
            },1)
        }else {
            setTimeout(function() {
                alert("Player O Won!");
            },1)
        }

        game_over = true;

        playerScore()
        disableAllCells()
    }


    /*setTimeout(function() {
        alert(`Player ${turn} Won!`);
    },1)*/

}


function disableAllCells() {
	var elements = document.getElementsByClassName("grid-cell");
	for (var i = 0; i < elements.length; i++) {
	  elements[i].disabled = true;
	}
}


//Player score function
function playerScore() {
    score[turn]++;
    document.getElementById("score-" + turn).innerHTML = score[turn];
}


//Restart game function
function restartGame() {
    score["X"] = 0
    score["O"] = 0

    document.getElementById("score-X").innerHTML = 0;
    document.getElementById("score-O").innerHTML = 0;
}