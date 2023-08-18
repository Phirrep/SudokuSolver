/*
    / /     4 3             1 2     4 3
    / /     / /             3 4     2 1

    / /     / /             4 1     3 2
    2 3     / /             2 3     1 4
*/
const board1_2x2 = [
    [0, 0, 0, 0], [4, 3, 0, 0],
    [0, 0, 2, 3], [0, 0, 0, 0]
];
const solution1_2x2 = [
    [1, 2, 3, 4], [4, 3, 2, 1],
    [4, 1, 2, 3], [3, 2, 1, 4]
];
console.log(verifySolution(board1_2x2, solution1_2x2));