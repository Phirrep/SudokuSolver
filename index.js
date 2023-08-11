function initialize(){
    let sampleBoard = document.getElementById("sampleBoard").value;
    switch(sampleBoard){
        case "1":
            board = boardClone(board1);
            solution = solution1;
            break;
        case "2":
            board = boardClone(board2);
            solution = solution2;
            break;
    }
    boardInitialize(Math.sqrt(board.length));
    let agentSelect = document.getElementById("agent").value;
    let restricted = document.getElementById("restricted").value;
    switch(agentSelect){
        case "backtracking":
            if (restricted=="yes"){
                agent = new BacktrackingAgent(board, first=true, restricted=true);
            }
            else if (restricted=="no"){
                agent = new BacktrackingAgent(board, first=true, restricted=false);
            }
    }
    update();
    agent.findSolution();
}

function update(){
    updateHTMLBoard();
    window.requestAnimationFrame(update);
}