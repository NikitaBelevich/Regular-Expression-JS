'use strict';



// const regexp1 = /в/g;
// const elem1 = document.querySelector('.task1__example');

// findMatchInTheNode(regexp1, elem1);
// function findMatchInTheNode(regexp, node) {
//     let elemStrValue = node.textContent;
//     if (regexp.flags.includes('g')) {
//         let arrayMatches = elemStrValue.match(regexp);
//         arrayMatches.forEach(match => {
            
//         });
//         console.warn(foundMatch2);
//     }
//     let foundMatch = elemStrValue.match(regexp)[0];
//     let newNodeValue = elemStrValue.replace(regexp, `<span class="found-matches">${foundMatch}</span>`);
//     node.innerHTML = newNodeValue;

//     console.dir(regexp.flags);
// }

// Task 1
const regexp1 = /\d\d[:-]\d\d/g;
const elem1 = document.querySelector('.task1__example');
const elem1Val = elem1.textContent;
console.log("Task 1: ", elem1Val.match(regexp1));


const regexp2 = /#[\da-z]{6}\b/gi;
const elem2 = document.querySelector('.task2__example');
const elem2Val = elem2.textContent;
console.log("Task 2: ", elem2Val.match(regexp2));

