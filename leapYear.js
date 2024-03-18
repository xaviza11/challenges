const assert = require('assert');
function leapYear(year) {
    return !(year % 4) && (year % 100 !== 0 || !(year % 400));
  }

  function runTests(){
    let passed = !assert.failures;

    console.log('Leap Year')
    console.log('https://edabit.com/challenge/nNtYHuSDgnCq8gFvh')
    console.log('This function validate if the year is a Leap Year or not\x1b[31m')

    try {
        assert.deepStrictEqual(leapYear(2016), true)
    } catch (error) {
        console.log('error 1')
        passed = false
    }
    try {
        assert.deepStrictEqual(leapYear(1996), true)
    } catch (error) {
        console.log('error test 2')
        passed = false
    }
    try {
        assert.deepStrictEqual(leapYear(1600), true)
    } catch (error) {
        console.log('error test 3')
        passed = false
    }
    try {
        assert.deepStrictEqual(leapYear(2020), true)
    } catch (error) {
        console.log('error test 4')
        passed = false
    }
    try {
        assert.deepStrictEqual(leapYear(2000), true)
    } catch (error) {
        console.log('error test 5')
        passed = false
    }
    try {
        assert.deepStrictEqual(leapYear(1521), false)
    } catch (error) {
        console.log('error test 6')
        passed = false
    }
    try {
        assert.deepStrictEqual(leapYear(2006), false)
    } catch (error) {
        console.log('error test 7')
        passed = false
    }
    
    if (passed) {
        console.log('\x1b[32m¡All tests completed on Lepap Year!, WORKS\x1b[0m \n')
        result = true
    }
    else {
        console.log('\x1b[31m¡leapYear not pass!, FAIL\x1b[0m \n')
        result = false
    }
    return result
  }

  module.exports = runTests()