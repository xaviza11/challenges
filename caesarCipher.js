const assert = require('assert')
let result = false
function caesarCipher(string, Cipher) {

    let result = ''
    let abc = "abcdefghijklmnopqrstuvwxyz"

    for (let i = 0; i <= string.length - 1; i++) { //transform the string

        const value = string[i]

        if (/[A-Z]/.test(value)) {
            const index = abc.indexOf(value.toLowerCase());
            encryptedValue = abc[(index + Cipher) % 26].toUpperCase();
        } else if (/[a-z]/.test(value)) {
            const index = abc.indexOf(value);
            encryptedValue = abc[(index + Cipher) % 26];
        } else if (/\s/.test(value)) {
            encryptedValue = ' '
        }
        else {
            encryptedValue = value;
        }
        result += encryptedValue;
    }

    return result
}

function runTest() {

    let passed = !assert.failures;

    console.log('caesarCipher')
    console.log('https://edabit.com/challenge/a33jdGXkaQRtK9ZTs')
    console.log('this is a cipher system, you can pas a string and one number and it returns a new chiper string \x1b[31m')
    try {
        assert.deepStrictEqual(caesarCipher("middle-Outz", 2), "okffng-Qwvb")
    } catch (error) {
        console.log('error test 1')
        passed = false
    }
    try {
        assert.deepStrictEqual(caesarCipher("Always-Look-on-the-Bright-Side-of-Life", 5), "Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj")
    } catch (error) {
        console.log('error test 2')
        passed = false
    }
    try {
        assert.deepStrictEqual(caesarCipher("A friend in need is a friend indeed", 20), "U zlcyhx ch hyyx cm u zlcyhx chxyyx")
    } catch (error) {
        console.log('error test 3')
        passed = false
    }
    try {
        assert.deepStrictEqual(caesarCipher("A Fool and His Money Are Soon Parted.", 27), "B Gppm boe Ijt Npofz Bsf Tppo Qbsufe.")
    } catch (error) {
        console.log('error test 4')
        passed = false
    }
    try {
        assert.deepStrictEqual(caesarCipher("One should not worry over things that have already happened and that cannot be changed.", 49), "Lkb pelria klq tloov lsbo qefkdp qexq exsb xiobxav exmmbkba xka qexq zxkklq yb zexkdba.")
    } catch (error) {
        console.log('error test 5')
        passed = false
    }
    try {
        assert.deepStrictEqual(caesarCipher("Back to Square One is a popular saying that means a person has to start over, similar to: back to the drawing board.", 126), "Xwyg pk Omqwna Kja eo w lklqhwn owuejc pdwp iawjo w lanokj dwo pk opwnp kran, oeiehwn pk: xwyg pk pda znwsejc xkwnz.")
    } catch (error) {
        console.log('error test 6')
        passed = false
    }
    if (passed){ 
        console.log('\x1b[32m¡All tests completed on Cesar Chiper!, WORKS\x1b[0m \n')
        result = true
    }
    else{ 
        console.log('\x1b[¡Cesar Chiper not pass!, FAIL\x1b[0m \n')
       result = false
    }
    
    return result
}

module.exports = runTest()