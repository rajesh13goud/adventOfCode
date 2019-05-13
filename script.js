const fs = require('fs');
//1. What floor does santa ends up on
// ( --> should go UP 1 floor
// ) --> should go DOWN 1 floor

function question1() {
    fs.readFile('./puzzle.txt', (err, data) => {
        console.time('santa-time');
        const directions = data.toString();
        const directionsArray = directions.split('');
        const answer = directionsArray.reduce((acc, currentValue) => {
            if(currentValue === '('){
                return acc += 1;
            } else if(currentValue === ')'){
                return acc -= 1;
            }
        }, 0)
        console.timeEnd('santa-time');
        console.log('answer:', answer);
    })
    
}
//question1();

function question2() {
    fs.readFile('./puzzle.txt', (err, data) => {
        const directions = data.toString();
        const directionsArray = directions.split('');
        let counter = 0;
        let accumulator = 0;
        const answer = directionsArray.some((currentItem) => {
            if (currentItem === '('){
                accumulator += 1;
            } else if(currentItem === ')'){
                accumulator -= 1;
            }
            counter ++;
            return accumulator < 0;
        })
        console.log('basement entered at: ', counter)
    })
}

question2();

//2. When does santa first enters the basement