function initialize(){
    let sampleBoard = document.getElementById("sampleBoard").value;
    switch(sampleBoard){
        case "1_3x3":
            board = boardClone(board1_3x3);
            solution = solution1_3x3;
            break;
        case "2_3x3":
            board = boardClone(board2_3x3);
            solution = solution2_3x3;
            break;
        case "3_3x3":
            board = boardClone(board3_3x3);
            break;
        case "1_2x2":
            board = boardClone(board1_2x2);
            solution = solution1_2x2;
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
            break;
        case "forwardchecking":
            agent = new ForwardcheckingAgent(board, first=true, restricted=true);
            break;
        case "arcconsistency":
            agent = new ArcconsistencyAgent(board, first=true, restricted=true);
            break;
    }
    update();
    agent.findSolution();
}

function update(){
    updateHTMLBoard();
    window.requestAnimationFrame(update);
}