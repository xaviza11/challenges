const assert = require('assert');
function findFirstRecurringItem(string) {

    const itemObj = {};

    if (string === null) return 'No item'
    if (string === undefined) return 'No item'

    for (let i = 0; i < string.length; i++) {   // Iterate each character in the string
        const item = string[i];

        // If the item is already inside the object, return the result, if isn't return 'No Itme'
        if (itemObj[item] !== undefined) {
            const firstIndex = itemObj[item];
            return ({ item, firstIndex, nextIndex: i });
        }

        itemObj[item] = i;
    }
}

function runTests(){

    let passed = !assert.failures

    console.log('findFirstRecurringItem')
    console.log('https://edabit.com/challenge/y8fTF8GBMAXTdkrkH')
    console.log('This array has one string as input and it counts the repeating characters and also return his positions as index \x1b[31m')
    try {
        assert.deepStrictEqual(findFirstRecurringItem(
            'DXTDXTXDTXD'
        ), { item: "D", firstIndex: 0, nextIndex: 3 })
    } catch (error) {
        console.log('error test 1')
        passed = false
    }
    try {
        assert.deepStrictEqual(findFirstRecurringItem(
            "YXZXYTUVXWV"
        ), { item: 'X', firstIndex: 1, nextIndex: 3 })
    } catch (error) {
        console.log('error test 2')
        passed = false
    }
    try {
        assert.deepStrictEqual(findFirstRecurringItem(
            "YZTTZMNERXE"
        ), { item: 'T', firstIndex: 2, nextIndex: 3 })
    } catch (error) {
        console.log('error test 3')
        passed = false
    }
    try {
        assert.deepStrictEqual(findFirstRecurringItem(
            "AREDCBSDERD"
        ), { item: 'D', firstIndex: 3, nextIndex: 7 })
    } catch (error) {
        console.log('error test 4')
        passed = false
    }
    try {
        assert.deepStrictEqual(findFirstRecurringItem(
            null
        ), 'No item')
    } catch (error) {
        console.log('error test 5')
        passed = false
    }
    try {
        assert.deepStrictEqual(findFirstRecurringItem(
            "KDXTDATTDDX"
        ), { item: 'D', firstIndex: 1, nextIndex: 4 })
    } catch (error) {
        console.log('error test 6')
        passed = false
    }
    try {
        assert.deepStrictEqual(findFirstRecurringItem(
            "AKEDCBERSDA"
        ), { item: 'E', firstIndex: 2, nextIndex: 6 })
    } catch (error) {
        console.log('error test 7')
        passed = false
    }
    try {
        assert.deepStrictEqual(findFirstRecurringItem(
            "DXKETRETXDK"
        ), { item: 'E', firstIndex: 3, nextIndex: 6 })
    } catch (error) {
        console.log('error test 8')
        passed = false
    }
    try {
        assert.deepStrictEqual(findFirstRecurringItem(
            undefined
        ), 'No item')
    } catch (error) {
        console.log('error test 9')
        passed = false
    }
    if (passed) {
        console.log('\x1b[32m¡All tests completed on Find First Recurring Item!, WORKS\x1b[0m \n')
        result = true
    }
    else  {
        console.log('\x1b[31m¡Find First Recurring Item! not pass!, FAIL\x1b[0m \n')
        result = false
    }
    return result
}

module.exports = runTests()