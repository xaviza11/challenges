
let numberLogics = 0
let numberFails = 0

try {
    const trackRobot = require('./trackRobot')
    if (trackRobot === true) numberLogics++
    else {
        numberFails++
        numberLogics++
    }
} catch (error) {
    console.log(error)
}

try {
    const countTrue = require('./countTrue')
    if (countTrue === true) numberLogics++
    else {
        numberFails++
        numberLogics++
    }
} catch (error) {
    console.log(error)
}

try {
    const caesarCipher = require('./caesarCipher')
    if (caesarCipher === true) numberLogics++
    else {
        numberFails++
        numberLogics++
    }
} catch (error) {
    console.log(error)
}

try {
    const slide2048 = require('./slide2048')
    if (slide2048 === true) numberLogics++
    else {
        numberFails++
        numberLogics++
    }
} catch (error) {
    console.log(error)
}

try {
    const tikTakToe = require('./tikTakToe')
    if (tikTakToe === true) numberLogics++
    else {
        numberFails++
        numberLogics++
    }
} catch (error) {
    console.log(error)
}

try {
    const findFirstRecurringItem = require('./findFirstRecurringItem')
    if (findFirstRecurringItem === true) numberLogics++
    else {
        numberFails++
        numberLogics++
    }
} catch (error) {
    console.log(error)
}

try {
    const finalCountdown = require('./finalCountdown')
    if (finalCountdown === true) numberLogics++
    else {
        numberFails++
        numberLogics++
    }
} catch (error) {
    console.log(error)
}

try {
    const knightsJump = require('./kinghtsJumps')
    if (knightsJump) numberLogics++
    else {
        numberFails++
        numberLogics++
    }
} catch (error) {
    console.log(error)
}

try {
    const sudoku = require('./sudoku')
    if (sudoku) numberLogics++
    else {
        numberFails++
        numberLogics++
    }
    }catch (error) {
        console.log(error)
}

try {
    const sudoku = require('./leapYear')
    if (sudoku) numberLogics++
    else {
        numberFails++
        numberLogics++
    }
    }catch (error) {
        console.log(error)
}

function runResult(numberLogics) { //This logics returns a message about if the test are passed

    console.log('')
    console.log('----------------------------------------------------Results----------------------------------------------------')
    console.log('')

    if (numberFails === 0) {
        console.log('\x1b[32m¡All tests succes!')
        console.log("There're " + numberLogics + " challenges solved")
        console.log('--✅\x1b[0m')
    }
    else {
        console.log('\x1b[31m¡We have problems!')
        console.log(numberFails + ' of ' + numberLogics + ' tests fails')
        console.log('--🆘\x1b[0m ')
    }
    console.log('')
    console.log('---------------------------------------------------------------------------------------------------------------')
}

runResult(numberLogics)