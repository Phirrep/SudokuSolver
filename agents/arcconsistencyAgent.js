class ArcconsistencyAgent extends ForwardcheckingAgent{
    constructor(board, first=true, restricted=true){
        super(board, first=first, restricted=restricted);
        for (let key in this.variables){
            let variable = this.variables[key];
            variable.domainLength = 0;
            let currNode = variable.domain;
            while (!currNode.isEmpty){
                variable.domainLength += 1;
                currNode = currNode.next;
            }
        }
    }
    findSolution(){
        let keys = [];
        let keySignal = [{continue: () => 0}];
        for (let key in this.variables){
            keys.push(key);
            keySignal.push({});
        }

        let recursiveArcconsistency = (i) => {
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
                        keySignal[i].continue();
                        return false;
                    }
                    if (numNode.markedKeys.length != 0){
                        numNode = numNode.next;
                        window.requestAnimationFrame(progress);
                        return;
                    }
                    this.updateVariable(key, numNode.num);
                    this.variables[key].dependents.forEach(x => this.markNode(x, key, numNode.num));
                    numNode = numNode.next; 
                    if (this.variables[key].dependents.some(x => x.domainLength == 0)){
                        window.requestAnimationFrame(progress);
                        return;
                    }
                    this.changeCount += 1;
                    recursiveArcconsistency(i+1);
                    return;
                }
                return progress;    
            }
            keySignal[i+1].continue = scope();
            keySignal[i+1].continue();
        }
        recursiveArcconsistency(0);
        return this.board;
    }
    //Overwrite markNode to also update domain length
    markNode(variable, key, value){
        let currNode = variable.domain;
        while (!currNode.isEmpty){
            if (currNode.num == value){
                currNode.markedKeys.push(key);
                variable.domainLength -= currNode.markedKeys.length == 1? 1:0;
            }
            else{
                let oldLength = currNode.markedKeys.length;
                currNode.markedKeys = currNode.markedKeys.filter(x => !(x===key));
                variable.domainLength += currNode.markedKeys.length == oldLength? 0:1;
            }
            currNode = currNode.next;
        }
    }
}