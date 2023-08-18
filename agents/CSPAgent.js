class Agent{
    constructor(board, first=true, restricted=false){
        //All variables are empty squares
        //Domain is numbers 1-9 (depending on board length)
        //Constraints r basic sudoku rules (no repeat numbers in square, row, column)
        this.board = board;
        this.variables = {};
        this.first = first;
        this.restricted = restricted;
        this.lnSq = Math.sqrt(board.length);
        //Initialize variables to empty board spaces
        for (let i = 0; i < board.length; i++){
            for (let j = 0; j < board[i].length; j++){
                if (board[i][j]==0){
                    //Key is div then board index
                    let key = i+" "+j;
                    let row = getRow(this.board, this.getKeyRow(key));
                    let column = getColumn(this.board, this.getKeyColumn(key));
                    this.variables[key] = {value: 0};
                    //Domain structured in linked list, empty node has null num and next
                    this.variables[key].domain = this.node(0);
                    let currNode = this.variables[key].domain;
                    for (let num = 1; num <= this.board.length; num++){
                        if (!this.restricted){
                            currNode.next = this.node(num);
                            currNode = currNode.next;
                        }
                        else if (!row.some(x=>x==num) && !column.some(x=>x==num) && !this.board[parseInt(key[0])].some(x=>x==num)){
                            currNode.next = this.node(num);
                            currNode = currNode.next;
                        }
                    }
                    this.variables[key].domain = this.variables[key].domain.next;
                }
            }
        }

        //Defines array of functions to check constraints given variable key
        this.constraints = [
            x => {
                let row = this.getKeyRow(x);
                return !checkRepeat(getRow(this.board, row));
            },
            y => {
                let column = this.getKeyColumn(y);
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
        this.variables[key].value = value;
        this.markVariable(key);
        //updateHTMLBoard();
    }
    checkConstraints(key){
        return this.constraints.every(x => x(key));
    }
    getKeyRow(key){
        let lnSq = this.lnSq;
        return lnSq*Math.floor(parseInt(key[0])/lnSq) + Math.floor(parseInt(key[2])/lnSq);
    }
    getKeyColumn(key){
        let lnSq = this.lnSq;
        return lnSq*Math.floor(parseInt(key[0])%lnSq) + Math.floor(parseInt(key[2])%lnSq);
    }
    node(value){
        return {num: value, next: this.nempty(), isEmpty: false, markedKeys: []}
    }
    nempty(){
        return {isEmpty: true};
    }
}