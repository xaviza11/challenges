const assert = require('assert');
function countTrue(array) {

    let numberTrues = 0

    for (let i = array.length - 1; i >= 0; i--) {  //count the number of trues.
        if (array[i] === true) {
            numberTrues = numberTrues + 1
        }
    }

    return numberTrues
}

function runTestCountTrue() {

    let passed = !assert.failures;

    console.log('Count True')
    console.log('💀💀💀💀💀💀💀 \x1b[31m Riped Link')
    console.log('💀💀💀💀💀💀💀 I lose this link because I think in put it latter and now I can not find it \x1b[0m')
    console.log('This function counts the number of trues inside a array and return this number \x1b[31m')

    try {
        assert.deepStrictEqual(countTrue([true, true, true, true, true]), 5)
    } catch (error) {
        console.log(error)
        passed = false
    }
    try {
        assert.deepStrictEqual(countTrue([false, false]), 0)
    } catch (error) {
        console.log('error test 2')
        passed = false
    }
    try {
        assert.deepStrictEqual(countTrue([true, false, true, false, true]), 3)
    } catch (error) {
        console.log('error test 3')
        passed = false
    }
    if (passed) {
        console.log('\x1b[32m¡All tests completed on finalCountdown!, WORKS\x1b[0m \n')
        result = true
    }
    else {
        console.log('\x1b[31m¡countTrue not pass!, FAIL\x1b[0m \n')
        result = false
    }
    return result
}

module.exports = runTestCountTrue()
