const assert = require('assert');
let result = false
function trackRobot(...moves) {

    let x = 0;
    let y = 0;
    let direction = 0; // 0 = North, 1 = East, 2 = South, 3 = West
    for (let i = 0; i < moves.length; i++) {
        const move = moves[i];

        direction = direction % 4;  //Set the moves
        if (direction === 0) {
            y += move;
        } else if (direction === 1) {
            x += move;
        } else if (direction === 2) {
            y -= move;
        } else if (direction === 3) {
            x -= move;
        }
        direction++;
    }
    return ([x, y]);
}

function runTest() {

    let passed = !assert.failures;

    console.log('trackRobot')
    console.log('https://edabit.com/challenge/jfpfpH6w42tZeRo2T')
    console.log('This function calculate the position of one robot using a number sequences as argument \x1b[31m')
    try {
        assert.deepStrictEqual(trackRobot(20, 30, 10, 40), [-10, 10])
    } catch (error) {
        console.log('error test 1')
        passed = false
    }
    try {
        assert.deepStrictEqual(trackRobot(10, -10, -10, 10), [-20, 20])
    } catch (error) {
        console.log('error test 2')
        passed = false
    }
    try {
        assert.deepStrictEqual(trackRobot(), [0, 0])
    } catch (error) {
        console.log('error test 3')
        passed = false
    }
    try {
        assert.deepStrictEqual(trackRobot(1, 2, 3, 4, 5, 6, 7, 8, 9, 10), [6, 5])
    } catch (error) {
        console.log('error test 4')
        passed = false
    }
    try {
        assert.deepStrictEqual(trackRobot(1, 0, 2, 0, 3, 0, 4, 0, 5, 0), [0, 3])
    } catch (error) {
        console.log('error test 5')
        passed = false
    }
    try {
        assert.deepStrictEqual(trackRobot(0, 1, 0, 2, 0, 3, 0, 4, 0, 5), [3, 0])
    } catch (error) {
        console.log('error test 6')
        passed = false
    }
    if (passed) {
        console.log('\x1b[32m¡All tests completed on Track Robot!, WORKS\x1b[0m \n')
        result = true
    }
    else {
        console.log('\x1b[31m¡trackRobot not pass!, FAIL\x1b[0m \n')
        result = false
    }
    return result
}
module.exports = runTest()