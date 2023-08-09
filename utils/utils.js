let board;
let solution;
let agent;
function getIndexId(divIndex, elementIndex){
    return Math.floor(divIndex/3)+" "+(divIndex%3)+" "+Math.floor(elementIndex/3)+" "+(elementIndex%3);
}
function updateHTMLBoard(){
    //loop through every element in every div
    for (let i = 0; i < board.length; i++){
        for (let j = 0; j < board[i].length; j++){
            let value = board[i][j];
            let elementId = getIndexId(i, j);
            let cell = document.getElementById(elementId);
            cell.innerHTML = value;
            if (value==0){
                cell.innerHTML = "/"
                cell.style.color = "";
            }
        }
    }
}
function boardInitialize(length){
    //Initialize empty sudoku board
    //Div id is "x y" for each separate 3x3 cell
    //Element id is "x y x y", which is the div id followed by cell coordinates
    let boardElement = document.getElementById("board");
    boardElement.innerHTML = "";
    for (let x = 0; x < length; x++){
        for (let y = 0; y < length; y++){
            let newDiv = document.createElement("div");
            newDiv.id = x+" "+y;
            newDiv.style.position = "absolute";
            newDiv.style.top = (50+length*30*x)+"px";
            newDiv.style.left = (30+length*30*y)+"px";
            for (let i = 0; i < length; i++){
                for (let j = 0; j < length; j++){
                    let newElement = document.createElement("e");
                    newElement.id = newDiv.id+" "+i+" "+j;
                    newElement.style.position = "absolute";
                    newElement.style.top = (20*i)+"px";
                    newElement.style.left = (20*j)+"px";
                    newElement.innerHTML = "/";
                    newDiv.appendChild(newElement);
                }
            }
            boardElement.appendChild(newDiv);
        }
    }
}

function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }