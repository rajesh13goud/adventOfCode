/*
--- Day 3: Perfectly Spherical Houses in a Vacuum ---

Santa is delivering presents to an infinite two-dimensional grid of houses.

He begins by delivering a present to the house at his starting location, 
and then an elf at the North Pole calls him via radio and tells him where to move next. 
Moves are always exactly one house to the north (^), south (v), east (>), or west (<). 
After each move, he delivers another present to the house at his new location.

However, the elf back at the north pole has had a little too much eggnog, 
and so his directions are a little off, and Santa ends up visiting some houses more than once. 
How many houses receive at least one present?

For example:

    > delivers presents to 2 houses: one at the starting location, and one to the east.
    ^>v< delivers presents to 4 houses in a square, 
    including twice to the house at his starting/ending location.
    ^v^v^v^v^v delivers a bunch of presents to some very lucky children at only 2 houses.

*/
const fs = require('fs');

// function sol() {
//     fs.readFile('./input3.txt', (err, data) => {
//         const dir = data.toString();
//         const dirArr = dir.split('');
//         //console.log(dirArr);
//         const ans = dirArr.reduce((acc, value) =>{
//             if(value === '^') {
//                 return acc += 1;
//             } else if(value === 'v'){
//                 return acc -=1;
//             } else if(value === '<'){
//                 return acc += 1;
//             } else if(value === '>'){
//                 return acc -= 1;
//             }

//         }, 0)
//         console.log('Answer: ', ans);
//     })

// }
// sol();

function question2() {
    fs.readFile('./input3.txt', (err, data) => {
        const directions = data.toString();
        const directionsArray = directions.split('');
        let counter =0;
        let accumulator ;
        const answer = directionsArray.some((currentItem) => {
            if (currentItem === '^'){
                accumulator += 1;
            } else if(currentItem === 'v'){
                accumulator += 2;
            } else if(currentItem === '<'){
                accumulator += 3;
            } else if(currentItem === '>'){
                accumulator += 4;
            }
            counter ++;
            //return accumulator < 0;
        })
        console.log('Answer: ', counter)
    })
}

question2();