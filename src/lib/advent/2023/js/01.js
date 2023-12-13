import * as txt from '$lib/advent/2023/inputs/01.txt?raw';

// Task 1 ====================================================================
export function task() {
    // split into array of lines
    let lines = txt.default.split('\n')

    // define sum variable
    let sum = 0

    // Part 1
    for (let line of lines) {
        // skip empty lines
        if (line == '') continue
        // replace all non-digits with nothing
        let num = line.replace(/\D/g, '');
        // split into array of digits
        let nums = num.split('')
        // add first and last digits to sum
        sum += Number(nums[0] + nums[nums.length - 1])
    }

    // Part 2

    // define sum2 variable
    let sum2 = 0;

    for (let line of lines) {
        // skip empty lines
        if (line == '') continue

        // define object to replace words with numbers
        const wordToNumber = {
            one: "one1one",
            two: "two2two",
            three: "three3three",
            four: "four4four",
            five: "five5five",
            six: "six6six",
            seven: "seven7seven",
            eight: "eight8eight",
            nine: "nine9nine"
        }

        // loop through object
        for (const num in wordToNumber) {
            // replace all words with numbers
            line = line.replaceAll(num, wordToNumber[num])
        }
        
        // replace all non-digits with nothing
        const numbers = line.match(/\d/g)

        // get the first and last digits
        const firstNumber = parseInt(numbers[0])
        const lastNumber = parseInt(numbers[numbers.length - 1])

        // add first and last digits to sum
        sum2 += Number(firstNumber + "" + lastNumber)
    }

    // return the answers
    return [sum, sum2]
}