//Use to check for repeat numbers 1-9 in any array
function checkRepeat(arr){
    for (let num = 1; num <= arr.length; num++){
        if (arr.reduce((acc, e) => ({num: num, count: e==num? acc.count+1: acc.count}), {num: num, count: 0}).count > 1){
            return true;
        }
    }
    return false;
}
function getRow(board, index){
    let row = [];
    let lnSq = Math.sqrt(board.length);
    for (let j = 0; j < board.length; j++){
        row.push(board[lnSq*Math.floor(index/lnSq)+Math.floor(j/lnSq)][lnSq*(index%lnSq)+(j%lnSq)]);
    }
    return row;
}
function getColumn(board, index){
    let column = [];
    let lnSq = Math.sqrt(board.length);
    for (let j = 0; j < board.length; j++){
        column.push(board[lnSq*Math.floor(j/lnSq)+Math.floor(index/lnSq)][lnSq*(j%lnSq)+(index%lnSq)]);
    }
    return column;
}
//Function to check whether board is valid
function verifyBoard(board){
    //Check length of boards
    if (!board.every(x => x.length == board.length)){
        return false;
    }
    let lnSq = Math.sqrt(board.length);
    //Check that length of board is perfect square
    if (!Number.isInteger(lnSq)){
        return false;
    }
    //Verify each row, column, and div has no repeat numbers
    for (let i = 0; i < board.length; i++){
        let row = getRow(board, i);
        let column = getColumn(board, i);
        if (checkRepeat(row) || checkRepeat(column) || checkRepeat(board[i])){
            return false;
        }
    }
    return true;
}
//Function to check whether solution is valid
function verifySolution(board, solution){
    if (!verifyBoard(board) || !verifyBoard(solution)){
        return false;
    }
    if (board.length != solution.length){
        return false;
    }
    for (let i = 0; i < board.length; i++){
        for (let j = 0; j < board.length; j++){
            if (!(board[i][j]==solution[i][j] || board[i][j]==0)){
                return false;
            }
        }
    }
    return true;
}