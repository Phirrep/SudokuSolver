class BacktrackingAgent extends Agent{
    constructor(board, first=true, restricted=false){
        super(board, first=first, restricted=restricted);
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
                let numNode = this.variables[key].domain;
                let progress = () => {
                    if (numNode.isEmpty){
                        this.updateVariable(key, 0);
                        keySignal[i].continue();
                        return false;
                    }
                    this.changeCount += 1;
                    this.updateVariable(key, numNode.num);
                    numNode = numNode.next;
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