const fs = require('fs');

const data = fs.readFileSync('input_day_4.txt', 'utf8');
const lines = data.split("\n");

let instances = [];
let nlines = lines.length;

for (let i = 0; i < nlines; i++) {
    instances.push(1);
}


let total = 0
for (let s = 0; s < nlines; s++) {
    const line = lines[s];
    [winning, got] = line.split(" | ");
    got = got.split(" ");
    got = got.filter((e) => e !== '');

    winning = winning.split(": ")[1];
    winning = winning.split(" ");
    winning = winning.filter((e) => e !== '');

    // transform got and winning into int list
    got = got.map((e) => parseInt(e));
    winning = winning.map((e) => parseInt(e));


    nb_match = 0;
    for (const nb of got) {
        if (winning.includes(nb)) {
            nb_match += 1;
        }
    }

    for (let i = 0; i < nb_match; i++) {
        instances[s + i+ 1] += instances[s];
    }

    total += instances[s];
}
console.log(instances);
console.log("total", total);