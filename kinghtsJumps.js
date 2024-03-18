const assert = require('assert')
let result = false

function knightsJump(square) {

    const validColumns = 'ABCDEFGH';

    // Transform the squares to coordinates
    const squareValues = square.split('');
    const column = validColumns.indexOf(squareValues[0]);
    const row = parseInt((squareValues[1]))

    if (column < 8 && column > -1 && row < 8 && row > -1) {
        const possibleSquares = []

        // There're the moves
        const moves = [
            [1, -2], [1, 2], [2, -1], [2, 1], [-2, -1], [-2, 1], [-1, -2], [-1, 2],
        ];

        // Check if each move is inside the board.
        for (let i = 0; i < moves.length; i++) {
            const move = moves[i];
            const newRow = row + move[0];
            const newColumn = column + move[1];

            // Check if the new square is inside the board.
            if (newRow >= 1 && newRow <= 8 && newColumn >= 0 && newColumn <= 7) {
                const newSquare = validColumns[newColumn] + (newRow);
                possibleSquares.push(newSquare);
            }
        }

        return possibleSquares.toString();
    } else return "The knight is outside the board"
}

function runTest() {

    let passed = !assert.failures;

    console.log('Kinghts Jumps')
    console.log('https://edabit.com/challenge/iDzRZJNrnT7JryKEF')
    console.log('This logic returns the moves that a knight on a chessboard can make based on the actualy position  \x1b[31m')
    try {
        assert.deepStrictEqual(knightsJump('A1'), "C2,B3")
    } catch (error) {
        console.log(error)
        passed = false
    }
    try {
        assert.deepStrictEqual(knightsJump('H1'), "F2,G3")
    } catch (error) {
        console.log(error)
        passed = false
    }
    try {
        assert.deepStrictEqual(knightsJump('F4'), "D5,H5,E6,G6,E2,G2,D3,H3")
    } catch (error) {
        console.log(error)
        passed = false
    }
    try {
        assert.deepStrictEqual(knightsJump('E5'), "C6,G6,D7,F7,D3,F3,C4,G4")
    } catch (error) {
        console.log(error)
        passed = false
    }
    try {
        assert.deepStrictEqual(knightsJump('A7'), "C8,B5,C6")
    } catch (error) {
        console.log(error)
        passed = false
    }
    try {
        assert.deepStrictEqual(knightsJump('B4'), "D5,A6,C6,A2,C2,D3")
    } catch (error) {
        console.log(error)
        passed = false
    }
    
    if (passed){ 
        console.log('\x1b[32m¡All tests completed on Kinghts Jumps!, WORKS\x1b[0m \n')
        result = true
    }
    else{ 
        console.log('\x1b[¡Kinghts Jumps not pass!, FAIL\x1b[0m \n')
       result = false
    }
    
    return result
}

module.exports = runTest()