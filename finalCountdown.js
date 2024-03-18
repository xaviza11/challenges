//just for enjoy https://www.youtube.com/watch?v=9jK-NcRmVcw

const assert = require('assert')
let result = false

function finalCountdown(arr) {

    let sequences = [];
    let count = 0;
    let currentSequence = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {  //Add 1 of the current seccuence and push this seccuence.
            currentSequence.push(1);
            sequences.push(currentSequence);
            count++;
            currentSequence = [];
        } else if (arr[i] === arr[i + 1] + 1) {  //Validate if there're a countdown
            currentSequence.push(arr[i]);
        } else { //Reset the current secuence if isn't 1 or isn't a countdown
            currentSequence = [];
        }
    }

    return [count, sequences]
}

function runTests() {

    let passed = !assert.failures;

    console.log('Final Countdown')
    console.log('https://edabit.com/challenge/HW4ZzYmDaASKfwdq6')
    console.log('This function counts the number of countdowns inside one array and return this number and also the countdowns')
    try {
        assert.deepStrictEqual(finalCountdown([4, 8, 3, 2, 1, 2]), [1, [[3, 2, 1]]])
    } catch (error) {
        console.log('error test 1')
        passed = false
    }
    try {
        assert.deepStrictEqual(finalCountdown([5, 4, 3, 2, 1]), [1, [[5, 4, 3, 2, 1]]])
    } catch (error) {
        console.log('error test 2')
        passed = false
    }
    try {
        assert.deepStrictEqual(finalCountdown([2, 5, 4, 3, 2, 1, 2]), [1, [[5, 4, 3, 2, 1]]])
    } catch (error) {
        console.log('error test 3')
        passed = false
    }
    try {
        assert.deepStrictEqual(finalCountdown([2, 3, 2, 1, 4, 3, 2, 1]), [2, [[3, 2, 1], [4, 3, 2, 1]]])
    } catch (error) {
        console.log('error test 4')
        passed = false
    }
    try {
        assert.deepStrictEqual(finalCountdown([4, 3, 2, 5, 4, 3]), [0, []])
    } catch (error) {
        console.log('error test 5')
        passed = false
    }
    try {
        assert.deepStrictEqual(finalCountdown([4, 3, 2, 5, 4, 3, 1]), [1, [[1]]])
    } catch (error) {
        console.log('error test 6')
        passed = false
    }
    try {
        assert.deepStrictEqual(finalCountdown([3, 2, 1, 5, 5, 3, 2, 1, 5, 5]), [2, [[3, 2, 1], [3, 2, 1]]])
    } catch (error) {
        console.log('error test 7')
        passed = false
    }
    try {
        assert.deepStrictEqual(finalCountdown([4, 8, 3, 2, 1, 2]), [1, [[3, 2, 1]]])
    } catch (error) {
        console.log('error test 8')
        passed = false
    }
    try {
        assert.deepStrictEqual(finalCountdown([4, 4, 5, 4, 3, 2, 1, 8, 3, 2, 1]), [2, [[5, 4, 3, 2, 1], [3, 2, 1]]])
    } catch (error) {
        console.log('error test 9')
        passed = false
    }
    try {
        assert.deepStrictEqual(finalCountdown([4, 3, 2, 1, 3, 2, 1, 1]), [3, [[4, 3, 2, 1], [3, 2, 1], [1]]])
    } catch (error) {
        console.log('error test 10')
        passed = false
    }
    try {
        assert.deepStrictEqual(finalCountdown([1, 2, 1, 1]), [3, [[1], [2, 1], [1]]])
    } catch (error) {
        console.log('error test 11')
        passed = false
    }
    try {
        assert.deepStrictEqual(finalCountdown([1, 2, 3, 4, 3, 2, 1]), [2, [[1], [4, 3, 2, 1]]])
    } catch (error) {
        console.log('error test 12')
        passed = false
    }
    try {
        assert.deepStrictEqual(finalCountdown([]), [0, []])
    } catch (error) {
        console.log('error test 13')
        passed = false
    }
    try {
        assert.deepStrictEqual(finalCountdown([2, 1, 2, 1]), [2, [[2, 1], [2, 1]]])
    } catch (error) {
        console.log('error test 14')
        passed = false
    }
    if (passed){ 
        console.log('\x1b[32m¡All tests completed on Final Countdown!, WORKS\x1b[0m \n')
        result = true
    }
    else { 
        console.log('\x1b[¡Final Countdown not pass!, FAIL\x1b[0m \n')
       result = false
    }
    return result
}

module.exports = runTests()