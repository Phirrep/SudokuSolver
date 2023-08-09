function initialize(){
    let sampleBoard = document.getElementById("sampleBoard").value;
    switch(sampleBoard){
        case "1":
            board = board1;
            boardInitialize(Math.sqrt(board1.length));
            solution = solution1;
    }
    let agentSelect = document.getElementById("agent").value;
    switch(agentSelect){
        case "backtracking":
            agent = new BacktrackingAgent(board);
    }
    agent.findSolution();
}
