/*
    1 2 /   6 / 8   / / /           1 2 3   6 7 8   9 4 5
    5 8 4   2 3 9   7 / 1           5 8 4   2 3 9   7 6 1
    / 6 /   1 4 /   / / /           9 6 7   1 4 5   3 2 8

    3 7 /   / 6 1   5 8 /           3 7 2   4 6 1   5 8 9
    6 9 1   / 8 /   2 7 4           6 9 1   5 8 3   2 7 4
    4 5 8   7 / 2   / 1 3           4 5 8   7 9 2   6 1 3

    / 3 /   / 2 4   1 5 /           8 3 6   9 2 4   1 5 7
    2 / 9   8 5 /   4 3 6           2 1 9   8 5 7   4 3 6
    / / /   3 / 6   / 9 2           7 4 5   3 1 6   8 9 2
*/
const board1_3x3 = [
    [1, 2, 0, 5, 8, 4, 0, 6, 0], [6, 0, 8, 2, 3, 9, 1, 4, 0], [0, 0, 0, 7, 0, 1, 0, 0, 0],
    [3, 7, 0, 6, 9, 1, 4, 5, 8], [0, 6, 1, 0, 8, 0, 7, 0, 2], [5, 8, 0, 2, 7, 4, 0, 1, 3],
    [0, 3, 0, 2, 0, 9, 0, 0, 0], [0, 2, 4, 8, 5, 0, 3, 0, 6], [1, 5, 0, 4, 3, 6, 0, 9, 2]
];
const solution1_3x3 = [
    [1, 2, 3, 5, 8, 4, 9, 6, 7], [6, 7, 8, 2, 3, 9, 1, 4, 5], [9, 4, 5, 7, 6, 1, 3, 2, 8],
    [3, 7, 2, 6, 9, 1, 4, 5, 8], [4, 6, 1, 5, 8, 3, 7, 9, 2], [5, 8, 9, 2, 7, 4, 6, 1, 3],
    [8, 3, 6, 2, 1, 9, 7, 4, 5], [9, 2, 4, 8, 5, 7, 3, 1, 6], [1, 5, 7, 4, 3, 6, 8, 9, 2]
];
console.log(verifySolution(board1_3x3, solution1_3x3)? "board one is valid":"board one is invalid");
/*
    5 3 /   / 7 /   / / /           5 3 4   6 7 8   9 1 2
    6 / /   1 9 5   / / /           6 7 2   1 9 5   3 4 8
    / 9 8   / / /   / 6 /           1 9 8   3 4 2   5 6 7

    8 / /   / 6 /   / / 3           8 5 9   7 6 1   4 2 3
    4 / /   8 / 3   / / 1           4 2 6   8 5 3   7 9 1
    7 / /   / 2 /   / / 6           7 1 3   9 2 4   8 5 6

    / 6 /   / / /   2 8 /           9 6 1   5 3 7   2 8 4
    / / /   4 1 9   / / 5           2 8 7   4 1 9   6 3 5
    / / /   / 8 /   / 7 9           3 4 5   2 8 6   1 7 9
*/
const board2_3x3 = [
    [5, 3, 0, 6, 0, 0, 0, 9, 8], [0, 7, 0, 1, 9, 5, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 4, 0, 0, 7, 0, 0], [0, 6, 0, 8, 0, 3, 0, 2, 0], [0, 0, 3, 0, 0, 1, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 4, 1, 9, 0, 8, 0], [2, 8, 0, 0, 0, 5, 0, 7, 9]
];
const solution2_3x3 = [
    [5, 3, 4, 6, 7, 2, 1, 9, 8], [6, 7, 8, 1, 9, 5, 3, 4, 2], [9, 1, 2, 3, 4, 8, 5, 6, 7],
    [8, 5, 9, 4, 2, 6, 7, 1, 3], [7, 6, 1, 8, 5, 3, 9, 2, 4], [4, 2, 3, 7, 9, 1, 8, 5, 6],
    [9, 6, 1, 2, 8, 7, 3, 4, 5], [5, 3, 7, 4, 1, 9, 2, 8, 6], [2, 8, 4, 6, 3, 5, 1, 7, 9]
];
console.log(verifySolution(board2_3x3, solution2_3x3)? "board two is valid":"board two is invalid");

/*
    5 / /   / 3 /   / / /           5 2 6   1 3 9   8 7 4
    / 8 /   6 / /   / / 9           1 8 7   6 4 5   3 2 9
    / / /   / 7 /   1 5 6           3 4 9   2 7 8   1 5 6

    / / /   9 / /   / / 8           6 7 3   9 2 1   5 4 8
    / / 1   / 6 /   2 / /           4 5 1   8 6 7   2 9 3
    8 / /   / / 3   / / /           8 9 2   4 5 3   7 6 1

    9 1 5   / 8 /   / / /           9 1 5   7 8 6   4 3 2
    2 / /   / / 4   / 1 /           2 3 8   5 9 4   6 1 7
    7 / /   / 1 /   / / 5           7 6 4   3 1 2   9 8 5
*/
const board3_3x3 = [
    [5, 0, 0, 0, 8, 0, 0, 0, 0], [0, 3, 0, 6, 0, 0, 0, 7, 0], [0, 0, 0, 0, 0, 9, 1, 5, 6],
    [0, 0, 0, 0, 0, 1, 8, 0, 0], [9, 0, 0, 0, 6, 0, 0, 0, 3], [0, 0, 8, 2, 0, 0, 0, 0, 0],
    [9, 1, 5, 2, 0, 0, 7, 0, 0], [0, 8, 0, 0, 0, 4, 0, 1, 0], [0, 0, 0, 0, 1, 0, 0, 0, 5]
];
const solution3_3x3 = [
    [5, 2, 6, 1, 8, 7, 3, 4, 9], [1, 3, 9, 6, 4, 5, 2, 7, 8], [8, 7, 4, 3, 2, 9, 1, 5, 6],
    [6, 7, 3, 4, 5, 1, 8, 9, 2], [9, 2, 1, 8, 6, 7, 4, 5, 3], [5, 4, 8, 2, 9, 3, 7, 6, 1],
    [9, 1, 5, 2, 3, 8, 7, 6, 4], [7, 8, 6, 5, 9, 4, 3, 1, 2], [4, 3, 2, 6, 1, 7, 9, 8, 5]
];
console.log(verifySolution(board3_3x3, solution3_3x3)? "board three is valid":"board three is invalid");
