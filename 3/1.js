const fs = require('fs');

const data = fs.readFileSync('input_day_3.txt', 'utf8');
const lines = data.split("\n");

function isCharNumber(c) {
    return typeof c === 'string' && c.length == 1 && c >= '0' && c <= '9';
}

function checkarround(tab, i, j) {
    const neighbors = [
        [i - 1, j - 1], [i - 1, j], [i - 1, j + 1],
        [i, j - 1], [i, j + 1],
        [i + 1, j - 1], [i + 1, j], [i + 1, j + 1]
    ];

    for (const [x, y] of neighbors) {
        if (x >= 0 && x < tab.length && y >= 0 && y < tab[x].length) {
            const neighbor = tab[x][y];
            if (neighbor !== '.' && !isCharNumber(neighbor)) {
                return true;
            }
        }
    }

    return false;
}


let s = 0;
const n = lines.length;
const m = lines[0].length;
let i, j;
i = 0;
let f;
while (i < n) {
    j = 0;
    while (j < m) {
        f = false;
        acc = ''
        while (j < m && isCharNumber(lines[i][j])) {
            if (checkarround(lines, i, j)) {
                f = true;
            }
            acc += lines[i][j];
            console.log((acc));
            j++;
        }

        if (f) {
            s += parseInt(acc);
            console.log("new score is " + s);
        }

        j++;
    }
    i++;
}

console.log(s);

