const { log } = require('console');
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
                return [x, y];
            }
        }
    }

    return null;
}

seens = {} // coord : [nums]

const n = lines.length;
const m = lines[0].length;
let i, j;
i = 0;
let f;
while (i < n) {
    j = 0;
    while (j < m) {
        acc = ''
        acc_coord = [];
        f = false;
        while (j < m && isCharNumber(lines[i][j])) {
            if (checkarround(lines, i, j) != null) {
                let [ii, jj] = checkarround(lines, i, j);
                f = true;
                if (!acc_coord.some(([x, y]) => x === ii && y === jj)) {
                    acc_coord.push([ii, jj]);
                }
            }
            acc += lines[i][j];
            j++;
        }
        if (f) {
            console.log(acc_coord);
            // reconstruct the number
            nb = parseInt(acc);
            // store the number at each corresponding sign
            for (const [k, l] of Object.entries(acc_coord)) {
                if ((k, l) in seens) {
                    seens[(k, l)].push(nb);
                }
                else {
                    seens[(k, l)] = [nb];
                }
            }
        }

        j++;
    }
    i++;
}

console.log(seens);


let s = 0;
for (const [key, value] of Object.entries(seens)) {
    console.log(key, value);
    if (value.length == 2) {
        s += value[0] * value[1];
    }
}

console.log(s);

