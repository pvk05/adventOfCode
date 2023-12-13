import * as txt from '$lib/advent/2023/inputs/02.txt?raw';

export function task() {
    let lines = txt.default.split('\n')

    let sum1 = 0;
    let sum2 = 0;
    let max = {
        red: 12,
        green: 13,
        blue: 14
    }

    for (let line of lines) {
        // skip empty lines
        if(line == '') continue
        
        let sets = line.split(': ').pop().split('; ')
        sets = sets.map((set) => set.split(', '))
        sets[sets.length-1][sets[sets.length-1].length-1] = sets[sets.length-1][sets[sets.length-1].length-1].substring(0, sets[sets.length-1][sets[sets.length-1].length-1].length-1)


        // Part 1 //
        let invalid = false
        let id = line.split(': ')[0].split(' ')[1]

        // check if any color is over the limit
        for (let set of sets ) {
            for (let color of set) {
                invalid = checkColor(color, max)
                if(invalid) break
            }
            if(invalid) break
        }
        if (!invalid) {
            sum1 += parseInt(id)
        }

        // Part 2 //
        let reds = []
        let greens = []
        let blues = []

        for (let set of sets ) {
            for (let color of set) {
                if(color.includes('red')) reds.push(color.split(' ')[0])
                if(color.includes('green')) greens.push(color.split(' ')[0])
                if(color.includes('blue')) blues.push(color.split(' ')[0])
                reds.sort((a, b) => b - a)
                greens.sort((a, b) => b - a)
                blues.sort((a, b) => b - a)
            }
        }
        let power = reds[0] * greens[0] * blues[0]
        sum2 += power
    }

    return [sum1, sum2]
}

function checkColor(color, max) {
    for(let maxColor in max){
        if (color.includes(maxColor)) {
            if (parseInt(color.split(' ')[0]) > max[maxColor]) {
                return true
            }
        }
    }
    return false
}