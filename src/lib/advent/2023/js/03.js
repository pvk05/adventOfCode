import * as txt from '$lib/advent/2023/inputs/03.txt?raw';

export function task() {
    let lines = txt.default.split('\n')

    // iterate over lines
    for (let line of lines) {
        // skip empty lines
        if(line == '') continue

        console.log(line)
        
    }

    return [0, 0]
}