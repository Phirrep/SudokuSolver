class BacktrackingAgent extends Agent{
    constructor(board, first=true){
        super(board);
        this.first = first;
    }
    findSolution(){
        let keys = [];
        for (let key in this.variables){
            keys.push(key);
        }
        let recursiveBacktracking = (i) => {
            if (i >= keys.length){
                if (this.first){
                    return true;
                }
                return verifySolution(this.board, solution);
            }
            let key = keys[i];
            for (let num = 1; num <= this.board.length; num++){
                this.updateVariable(key, num);
                wait(10);
                //Passes all the constraints
                if (this.checkConstraints(key)){
                    if (recursiveBacktracking(i+1)){
                        return true;
                    }
                }
            }
            this.updateVariable(key, 0);
            return false;
        }
        recursiveBacktracking(0);
        return this.board;
    }
}