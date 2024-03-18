const assert = require('assert')
let result = false
function slide2048(row) {

    const size = row.length

    row = row.filter(tile => tile !== 0); //Removes all the 0

    for (let i = 0; i < row.length - 1; i++) { // Merge numbers
        if (row[i] === row[i + 1]) {
            row[i] *= 2;
            row[i + 1] = 0;
        }
    }

    row = row.filter(tile => tile !== 0); //Remove all the 0 again

    while (row.length < size) { //Add  0 if are less than 6
        row.push(0);
    }

    return (row)
}

function runTests() {

    let passed = !assert.failures

    console.log('slide2048')
    console.log('https://edabit.com/challenge/jmamZufrqZkhH7ZLM')
    console.log('This is the game of 2048, you pass it one array of numbers %2 and this function merge it \x1b[31m')
    try {
        assert.deepStrictEqual(slide2048([2, 2, 2, 0]), [4, 2, 0, 0])
    } catch (error) {
        console.log('error test 1')
        passed = false
    }
    try {
        assert.deepStrictEqual(slide2048([2, 2, 4, 4, 8, 8]), [4, 8, 16, 0, 0, 0])
    } catch (error) {
        console.log('error test 2')
        passed = false
    }
    try {
        assert.deepStrictEqual(slide2048([0, 2, 0, 2, 4]), [4, 4, 0, 0, 0])
    } catch (error) {
        console.log('error test 3')
        passed = false
    }
    try {
        assert.deepStrictEqual(slide2048([0, 2, 2, 8, 8, 8]), [4, 16, 8, 0, 0, 0])
    } catch (error) {
        console.log('error test 4')
        passed = false
    }
    try {
        assert.deepStrictEqual(slide2048([0, 0, 0, 0]), [0, 0, 0, 0])
    } catch (error) {
        console.log('error test 5')
        passed = false
    }
    try {
        assert.deepStrictEqual(slide2048([0, 0, 0, 2]), [2, 0, 0, 0])
    } catch (error) {
        console.log('error test 6')
        passed = false
    }
    try {
        assert.deepStrictEqual(slide2048([2, 0, 0, 0]), [2, 0, 0, 0])
    } catch (error) {
        console.log('error test 6')
        passed = false
    }
    try {
        assert.deepStrictEqual(slide2048([8, 2, 2, 4]), [8, 4, 4, 0])
    } catch (error) {
        console.log('error test 7')
        passed = false
    }
    if (passed) {
        console.log('\x1b[32m¡All tests completed on Slide 2048!, WORKS\x1b[0m \n')
        result = true
    }
    else {
        console.log('\x1b[¡Slide 2048 not pass!, FAIL\x1b[0m \n')
        result = false
    }
    return result
}

module.exports = runTests()