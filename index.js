//Initialize empty sudoku board
//Div id is "x y" for each separate 3x3 cell
//Element id is "x y x y", which is the div id followed by cell coordinates
let boardElement = document.getElementById("board");
for (let x = 0; x < 3; x++){
    for (let y = 0; y < 3; y++){
        let newDiv = document.createElement("div");
        newDiv.id = x+" "+y;
        newDiv.style.position = "absolute";
        newDiv.style.top = (50+100*x)+"px";
        newDiv.style.left = (30+100*y)+"px";
        for (let i = 0; i < 3; i++){
            for (let j = 0; j < 3; j++){
                let newElement = document.createElement("e");
                newElement.id = newDiv.id+" "+i+" "+j;
                newElement.style.position = "absolute";
                newElement.style.top = (20*i)+"px";
                newElement.style.left = (20*j)+"px";
                newElement.innerHTML = "/";
                newDiv.appendChild(newElement);
            }
        }
        boardElement.appendChild(newDiv);
    }
}
