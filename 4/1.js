const fs = require('fs');

const data = fs.readFileSync('input_day_4.txt', 'utf8');
const lines = data.split("\n");

let total = 0;
for (const line of lines) {
    const [winning, got] = line.split(" | ");
    const gotNumbers = got.split(" ").filter(Boolean).map(Number);
    const winningNumbers = winning.split(": ")[1].split(" ").filter(Boolean).map(Number);

    let s = 0;
    for (const nb of gotNumbers) {
        if (winningNumbers.includes(nb)) {
            s = s === 0 ? 1 : s * 2;
        }
    }
    total += s;
}

console.log("total", total);