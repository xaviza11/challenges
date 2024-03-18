const assert = require('assert')
let result = false
function ticTakToe(arrA, arrB, arrC) {

    const panel = [arrA, arrB, arrC]

    let winner = null;

    if (panel[0][0] === panel[1][1] && panel[1][1] === panel[2][2]) { //Validate the diagonals
        winner = panel[0][0];
    } else if (panel[0][2] === panel[1][1] && panel[1][1] === panel[2][0]) {
        winner = panel[0][2];
    }

    for (let col = 0; col < 3; col++) { //Validate columns
        if (panel[0][col] === panel[1][col] && panel[1][col] === panel[2][col]) {
            winner = panel[0][col];
        }
    }

    for (let row = 0; row < 3; row++) { //Validate rows
        if (panel[row][0] === panel[row][1] && panel[row][1] === panel[row][2]) {
            winner = panel[row][0];
        }
    }

    if (winner !== null) { // return who's the winner. if he exist return it, if doesn't return tie. 
        return (winner + ' ' + 'wins');
    } else {
        return "tie";
    }
}

function runTests(){

    let passed = !assert.failures

    console.log('ticTakToe')
    console.log('https://edabit.com/challenge/JgjQDgNp4nQuMv2LA')
    console.log('This function validates who wins in one Tick Tak Toe game using one array whit the picks, also can return tie \x1b[31m')
    try {
        assert.deepStrictEqual(ticTakToe(
            ["X", "O", "X"],
            ["X", "O", "O"],
            ["X", "X", "O"]
        ), 'X wins')
    } catch (error) {
        console.log('error test 1')
        passed = false
    }
    try {
        assert.deepStrictEqual(ticTakToe(
            ["O", "X", "O"],
            ["X", "X", "O"],
            ["O", "X", "X"]
        ), "X wins")
    } catch (error) {
        console.log('error test 2')
        passed = false
    }
    try {
        assert.deepStrictEqual(ticTakToe(
            ["X", "X", "O"],
            ["O", "X", "O"],
            ["X", "O", "O"]
        ), "O wins")
    } catch (error) {
        console.log('error test 3')
        passed = false
    }
    try {
        assert.deepStrictEqual(ticTakToe(
            ["X", "X", "X"],
            ["O", "X", "O"],
            ["X", "O", "O"]
        ), "X wins")
    } catch (error) {
        console.log('error test 4')
        passed = false
    }
    try {
        assert.deepStrictEqual(ticTakToe(
            ["X", "O", "X"],
            ["O", "O", "O"],
            ["X", "X", "O"]
        ), "O wins")
    } catch (error) {
        console.log('error test 5')
        passed = false
    }
    try {
        assert.deepStrictEqual(ticTakToe(
            ["O", "O", "X"],
            ["X", "O", "X"],
            ["O", "X", "O"]
        ), "O wins")
    } catch (error) {
        console.log('error test 6')
        passed = false
    }
    try {
        assert.deepStrictEqual(ticTakToe(
            ["O", "O", "X"],
            ["O", "X", "X"],
            ["X", "X", "O"]
        ), "X wins")
    } catch (error) {
        console.log('error test 7')
        passed = false
    }
    try {
        assert.deepStrictEqual(ticTakToe(
            ["O", "O", "X"],
            ["X", "X", "O"],
            ["O", "X", "O"]
        ), "tie")
    } catch (error) {
        console.log('error test 8')
        passed = false
    }
    if (passed){
        console.log('\x1b[32m¡All tests completed on Tik Tak Toe!, WORKS\x1b[0m \n')
        result = true
    }
    else {
        console.log('\x1b[¡Tik Tak Toe not pass!, FAIL\x1b[0m \n')
        result = false
    }
    return result
}

module.exports = runTests()