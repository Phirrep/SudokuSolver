class Agent{
    constructor(board){
        //All variables are empty squares
        //Domain is numbers 1-9 (depending on board length)
        //Constraints r basic sudoku rules (no repeat numbers in square, row, column)
        this.board = board;
        this.arcs = [];
        this.variables = {};
        for (let i = 0; i < board.length; i++){
            for (let j = 0; j < board[i].length; j++){
                if (board[i][j]==0){
                    this.variables[i+" "+j] = 0;
                }
            }
        }
        let lnSq = Math.sqrt(board.length);
        //Defines array of functions to check constraints given variable key
        this.constraints = [
            x => {
                let row = lnSq*Math.floor(parseInt(x[0])/lnSq) + Math.floor(parseInt(x[2])/lnSq);
                return !checkRepeat(getRow(this.board, row));
            },
            y => {
                let column = lnSq*Math.floor(parseInt(y[0])%lnSq) + Math.floor(parseInt(y[2])%lnSq);
                return !checkRepeat(getColumn(this.board, column));
            }, 
            z => {
                let divIndex = parseInt(z[0]);
                return !checkRepeat(this.board[divIndex]);
            }
        ];
    }
    //Function to make marked variable appear red on UI
    markVariable(key){
        let cell = document.getElementById(getIndexId(parseInt(key[0]), parseInt(key[2])));
        cell.style.color = "red";
    }
    updateVariable(key, value){
        let divIndex = parseInt(key[0]);
        let cellIndex = parseInt(key[2]);
        this.board[divIndex][cellIndex] = value;
        this.variables[key] = value;
        this.markVariable(key);
        updateHTMLBoard();
    }
    checkConstraints(key){
        return this.constraints.every(x => x(key));
    }
}