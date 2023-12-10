const fs = require('fs');

const data = fs.readFileSync('input_day_2.txt', 'utf8');
const lines = data.split("\n");

// maxs = {
//     "red": 12,
//     "green": 13,
//     "blue": 14
// }


let s = 0;
let index = 1;

lines.forEach(line => {
    guessed_maxs = {
        "red": 0,
        "green": 0,
        "blue": 0
    }

    let f = true;
    const l = line.split(": ")[1];
    const rounds = l.split(/[,;] /);
    console.log(rounds);
    rounds.forEach(gots => {
        let elements = gots.split(" ");
        let [num, color] = elements;
        color = color.replace(',', '');
        if (parseInt(num) > guessed_maxs[color]) {
            guessed_maxs[color] = parseInt(num);
        }
    });
    // if (f == true) {
    //     s += index;
    //     console.log(index + " is legal new score is " + s);
    // }

    s += Object.values(guessed_maxs).reduce((acc, val) => acc * val, 1);
    index++;

    console.log("new s is : ", s);

});

