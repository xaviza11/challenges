const assert = require('assert')
let result = false

function sudokuValidator(board) {

    function isValid(value) {
        if (value <= 9 && value >= 1 ) return true
        else return false
    }

    // Check rows
    for (let i = 0; i < 9; i++) {
        const row = [];
        for (let j = 0; j < 9; j++) {
            if (row.includes(board[i][j]) || !isValid(board[i][j])) {
                    return false;
            }
            row.push(board[i][j]);
        }
    }

    // Check columns
    for (let j = 0; j < 9; j++) {
        const col = [];
        for (let i = 0; i < 9; i++) {
            if (col.includes(board[i][j]) || !isValid(board[i][j])) {
                    return false;
            }
            col.push(board[i][j]);
        }
    }

    // Check the boxes
    for (let boxRow = 0; boxRow < 9; boxRow += 3) {
        for (let boxCol = 0; boxCol < 9; boxCol += 3) {
            const box = [];
            for (let i = boxRow; i < boxRow + 3; i++) {
                for (let j = boxCol; j < boxCol + 3; j++) {
                    if (box.includes(board[i][j] || !isValid(board[i][j]))) {
                            return false;
                    }
                    box.push(board[i][j]);
                }
            }
        }
    }

    return true;
}

function runTest() {

    let passed = !assert.failures;

    console.log('Sudoku')
    console.log('https://edabit.com/challenge/rGTJckjQsBDq2M8WL')
    console.log('This logic validate if sudoku has been complete  \x1b[31m')

    try {
        assert.deepStrictEqual(sudokuValidator(
            [ [ 1, 5, 2, 4, 8, 9, 3, 7, 6 ],
              [ 7, 3, 9, 2, 5, 6, 8, 4, 1 ],
              [ 4, 6, 8, 3, 7, 1, 2, 9, 5 ],
              [ 3, 8, 7, 1, 2, 4, 6, 5, 9 ],
              [ 5, 9, 1, 7, 6, 3, 4, 2, 8 ],
              [ 2, 4, 6, 8, 9, 5, 7, 1, 3 ],
              [ 9, 1, 4, 6, 3, 7, 5, 8, 2 ],
              [ 6, 2, 5, 9, 4, 8, 1, 3, 7 ],
              [ 8, 7, 3, 5, 1, 2, 9, 6, 4 ] ]), 
            true)
    } catch (error) {
        console.log(error)
        passed = false
    }
   try {
        assert.deepStrictEqual(sudokuValidator(
            [ [ 1, 5, 2, 4, 8, 9, 3, 7, 6 ],
              [ 7, 3, 9, 2, 5, 6, 8, 4, 1 ],
              [ 4, 6, 5, 3, 7, 1, 2, 9, 8 ],
              [ 3, 8, 7, 1, 2, 4, 6, 5, 9 ],
              [ 8, 9, 1, 7, 6, 3, 4, 2, 5 ],
              [ 2, 4, 6, 5, 9, 8, 7, 1, 3 ],
              [ 9, 1, 4, 6, 3, 7, 5, 8, 2 ],
              [ 6, 2, 8, 9, 4, 5, 1, 3, 7 ],
              [ 5, 7, 3, 8, 1, 2, 9, 6, 4 ] ]), 
            false) 
    } catch (error) {
        console.log(error)
        passed = false
    }
  try {
        assert.deepStrictEqual(sudokuValidator(
            [ [ 1, 5, 2, 4, 8, 9, 3, 7, 6 ],
              [ 7, 3, 9, 2, 5, 6, 8, 4, 1 ],
              [ 4, 6, 8, 3, 7, 1, 2, 9, 5 ],
              [ 3, 8, 7, 1, 2, 4, 6, 5, 9 ],
              [ 5, 9, 1, 7, 6, 3, 4, 2, 8 ],
              [ 2, 4, 6, 8, 9, 5, 7, 1, 3 ],
              [ 9, 1, 4, 6, 3, 7, 5, 8, 2 ],
              [ 6, 2, 5, 9, 4, 8, 1, 3, 7 ],
              [ 8, 7, 3, 5, 1, 2, 9, 6, 4 ] ]), 
            true)
    } catch (error) {
        console.log(error)
        passed = false
    }
      try {
        assert.deepStrictEqual(sudokuValidator(
            [ [ 8, 2, 7, 1, 5, 4, 3, 9, 6 ],
              [ 9, 6, 5, 3, 2, 7, 1, 4, 8 ],
              [ 3, 4, 1, 6, 8, 9, 7, 5, 2 ],
              [ 5, 9, 3, 4, 6, 8, 2, 7, 1 ],
              [ 4, 7, 2, 5, 1, 3, 6, 8, 9 ],
              [ 6, 1, 8, 9, 7, 2, 4, 3, 5 ],
              [ 7, 8, 6, 2, 3, 5, 9, 1, 4 ],
              [ 1, 5, 4, 7, 9, 6, 8, 2, 3 ],
              [ 2, 3, 9, 8, 4, 1, 5, 6, 7 ] ]), 
            true)
    } catch (error) {
        console.log(error)
        passed = false
    }
   try {
        assert.deepStrictEqual(sudokuValidator(
            [ [ 8, 2, 7, 1, 5, 4, 3, 9, 6 ],
              [ 9, 6, 5, 3, 2, 7, 1, 4, 8 ],
              [ 3, 4, 1, 6, 8, 9, 7, 5, 2 ],
              [ 5, 9, 3, 4, 6, 8, 2, 7, 1 ],
              [ 4, 7, 2, 5, 1, 5, 6, 8, 9 ],
              [ 6, 1, 8, 9, 7, 2, 4, 3, 5 ],
              [ 7, 8, 6, 2, 3, 5, 9, 1, 4 ],
              [ 1, 5, 4, 7, 9, 6, 8, 2, 3 ],
              [ 2, 3, 9, 8, 4, 1, 5, 6, 7 ] ]), 
            false)
    } catch (error) {
        console.log(error)
        passed = false
    }
     try {
        assert.deepStrictEqual(sudokuValidator(
            [ [ 1, 5, 2, 4, 8, 9, 3, 7, 6 ],
              [ 3, 3, 9, 2, 5, 6, 8, 4, 1 ],
              [ 4, 6, 8, 3, 7, 1, 2, 9, 5 ],
              [ 3, 8, 7, 1, 2, 4, 6, 5, 9 ],
              [ 5, 9, 1, 7, 6, 3, 4, 2, 8 ],
              [ 2, 4, 6, 8, 9, 5, 7, 1, 3 ],
              [ 9, 1, 4, 6, 3, 7, 5, 8, 2 ],
              [ 6, 2, 5, 9, 4, 8, 1, 3, 7 ],
              [ 8, 7, 3, 5, 1, 2, 9, 6, 4 ] ]), 
            false)
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