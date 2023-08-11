class BacktrackingAgent extends Agent{
    constructor(board, first=true){
        super(board);
        this.first = first;
    }
    findSolution(){
        let keys = [];
        let keySignal = [{continue: ()=>0}];
        for (let key in this.variables){
            keys.push(key);
            keySignal.push({});
        }
        
        let recursiveBacktracking = (i) => {
            if (i >= keys.length){
                if (this.first){
                    return true;
                }
                return verifySolution(this.board, solution);
            }
            
            let scope = () => {
                let key = keys[i];
                let num = 0;
                let progress = () => {
                    num += 1;
                    if (num > 9){
                        this.updateVariable(key, 0);
                        keySignal[i].continue();
                        return false;
                    }
                    this.updateVariable(key, num);
                    if (this.checkConstraints(key)){
                        recursiveBacktracking(i+1);
                        return;
                    }
                    //wait(10);
                    window.requestAnimationFrame(progress);
                }
                return progress;
            };
            keySignal[i+1].continue = scope();
            keySignal[i+1].continue();
        }
        recursiveBacktracking(0);
        return this.board;
    }
}
//Backtracking Agent with variable domains based off of board
class BacktrackingAgentRestricted extends Agent{
    constructor(board, first=true){
        super(board);
        this.first = first;
        for (let key in this.variables){
            this.variables[key] = {value: 0};
            let row = getRow(this.board, this.getKeyRow(key));
            let column = getColumn(this.board, this.getKeyColumn(key));
            console.log(row);
            console.log(column);
            //Domain structured in linked list, empty node has null num and next
            this.variables[key].domain = this.node(0);
            let currNode = this.variables[key].domain;
            for (let num = 1; num <= this.board.length; num++){
                if (!row.some(x=>x==num) && !column.some(x=>x==num) && !this.board[parseInt(key[0])].some(x=>x==num)){
                    currNode.next = this.node(num);
                    currNode = currNode.next;
                }
            }
            this.variables[key].domain = this.variables[key].domain.next;
        }
    }
    findSolution(){
        let keys = [];
        let keySignal = [{continue: () => 0}];
        for (let key in this.variables){
            keys.push(key);
            keySignal.push({});
        }
        let recursiveBacktracking = (i) => {
            if (i >= keys.length){
                if (this.first){
                    return true;
                }
                return verifySolution(this.board, solution);
            }
            let scope = () => {
                let key = keys[i];
                let numNode = this.variables[key].domain;
                let progress = () => {
                    console.log(key);
                    console.log(numNode);
                    if (numNode.isEmpty){
                        console.log("end of domain");
                        this.updateVariable(key, 0);
                        keySignal[i].continue();
                        return false;
                    }
                    this.updateVariable(key, numNode.num);
                    numNode = numNode.next;
                    if (this.checkConstraints(key)){
                        recursiveBacktracking(i+1);
                        return;
                    }
                    //wait(500);
                    window.requestAnimationFrame(progress);
                }
                return progress;
            }
            keySignal[i+1].continue = scope();
            keySignal[i+1].continue();
        }
        recursiveBacktracking(0);
        return this.board;
    }
    updateVariable(key, value){
        let divIndex = parseInt(key[0]);
        let cellIndex = parseInt(key[2]);
        this.board[divIndex][cellIndex] = value;
        this.variables[key].value = value;
        this.markVariable(key);
        //updateHTMLBoard();
    }
}