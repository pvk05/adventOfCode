import * as txt from '$lib/advent/2023/inputs/02.txt?raw';

export function task() {
    let lines = txt.default.split('\n')

    for (let line of lines) {
        // skip empty lines
        if(line == '') continue
    }

    return [0, 0]
}