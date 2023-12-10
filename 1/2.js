const fs = require('fs');

function isCharNumber(c) {
    return typeof c === 'string' && c.length == 1 && c >= '0' && c <= '9';
}

function main() {
    let total = 0;

    const data = fs.readFileSync('input1.txt', 'utf8');
    const lines = data.split("\n");
    lines.forEach(line => {
        let first, last;
        for (let index = 0; index < line.length; index++) {
            const element = line.charAt(index)
            if (isCharNumber(element)) {
                first = element;
                break;
            }
        }

        for (let index = line.length - 1; index > -1; index--) {
            const element = line.charAt(index);
            if (isCharNumber(element)) {
                last = element;
                break;
            }
        }

        if (first !== undefined && last !== undefined) {
            const num = parseInt(first + last);
            total += num;
        }
    });

    console.log(total)
}

main();