class ForwardcheckingAgent extends Agent{
    constructor(board, first=true, restricted=true){
        super(board, first=first, restricted=restricted);
        for (let key in this.variables){
            this.variables[key].dependents = this.getDependents(key);
        }
    }
    //Returns array of dependents, references to the actual variable
    getDependents(key){
        let row = this.getKeyRow(key);
        let column = this.getKeyColumn(key);
        let div = parseInt(key[0]);
        let dependents = [];
        for (let key2 in this.variables){
            if (key2 === key){
                continue;
            }
            let row2 = this.getKeyRow(key2);
            let column2 = this.getKeyColumn(key2);
            let div2 = parseInt(key2[0]);
            if (row==row2 || column==column2 || div==div2){
                dependents.push(this.variables[key2]);
            }
        }
        return dependents;
    }
    findSolution(){
        let keys = [];
        let keySignal = [{continue: () => 0}];
        for (let key in this.variables){
            keys.push(key);
            keySignal.push({});
        }

        let recursiveForwardchecking = (i) => {
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
                        this.variables[key].dependents.forEach(x => this.markNode(x, key, 0));
                        window.requestAnimationFrame(keySignal[i].continue);
                        return false;
                    }
                    if (numNode.markedKeys.length != 0){
                        numNode = numNode.next;
                        window.requestAnimationFrame(progress);
                        return;
                    }
                    this.updateVariable(key, numNode.num);
                    this.changeCount += 1;
                    this.variables[key].dependents.forEach(x => this.markNode(x, key, numNode.num));
                    numNode = numNode.next;
                    //wait(1000);
                    recursiveForwardchecking(i+1);
                    return;
                };
                return progress;
            };
            keySignal[i+1].continue = scope();
            window.requestAnimationFrame(keySignal[i+1].continue);
        }
        recursiveForwardchecking(0);
        return this.board;
    }
    markNode(variable, key, value){
        let currNode = variable.domain;
        while (!currNode.isEmpty){
            if (currNode.num == value){
                currNode.markedKeys.push(key);
            }
            else{
                currNode.markedKeys = currNode.markedKeys.filter(x => !(x===key));
            }
            currNode = currNode.next;
        }
    }
}