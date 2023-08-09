let board = [
    [], [], [],
    [], [], [],
    [], [], []
];
//Initialize board to all 0s/empty
for (let i = 0; i < board.length; i++){
    let currDiv = board[i];
    for (let j = 0; j < 9; j++){
        currDiv.push(0);
    }
}
console.log(board);
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
            cell.innerHTML = value==0? "/": value;
        }
    }
}