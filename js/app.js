'use strict';


// Функция поиска совпадений по регулярке. Также подсвечивает совпадения
function findMatchInTheNode(regexp, node) {
    let elemStrValue = node.textContent;
    let newNodeValue = elemStrValue.replace(regexp, `<span class="found-matches">$&</span>`);
    node.innerHTML = newNodeValue;
}

// Task 1
const regexp1 = /\d\d[:-]\d\d/g;
const elem1 = document.querySelector('.task1__example');
const elem1Val = elem1.textContent;
findMatchInTheNode(regexp1, elem1);

const regexp2 = /#[\da-z]{6}\b/gi;
const elem2 = document.querySelector('.task2__example');
findMatchInTheNode(regexp2, elem2);

// Task 3
const btn3 = document.querySelector('.task3-btn');
btn3.addEventListener('click', () => {
    const regexp3 = /a[^a]*?a/g;
    const elem3 = document.querySelector('.task3__example');
    const elem3Val = elem3.textContent;
    elem3.textContent = elem3Val.replace(regexp3, '!');
}, {once: true});

// Task 3
const btn4 = document.querySelector('.task4-btn');
btn4.addEventListener('click', () => {
    const regexp4 = /<[^<>]+>/g;
    const elem4 = document.querySelector('.task4__example').firstElementChild;
    const elem4Val = elem4.textContent;
    const newRes = elem4Val.match(regexp4);
    elem4.insertAdjacentHTML('afterend', `<xmp>${newRes}</xmp>`);
}, {once: true});

const btn5 = document.querySelector('.task5-btn');
btn5.addEventListener('click', () => {
    const regexp5 = /[a-z\d_]+\.[a-z]{2,}/g;
    const elem5 = document.querySelector('.task5__example');
    const elem5Val = elem5.textContent;
    const newRes = elem5Val.replace(regexp5, `<a href="http://$&">$&</a>`);
    elem5.textContent = newRes;
}, {once: true});


// Task 6
const btn6 = document.querySelector('.task6-btn');
btn6.addEventListener('click', () => {
    const regexp6 = /#([a-z\d]{3}){1,2}\b/gi;
    const elem6 = document.querySelector('.task6__example');
    findMatchInTheNode(regexp6, elem6);
}, {once: true});

// Task 7
const btn7 = document.querySelector('.task7-btn');
btn7.addEventListener('click', () => {
    const regexp7 = /-?\d+(\.\d+)?/g;
    const elem7 = document.querySelector('.task7__example');
    findMatchInTheNode(regexp7, elem7);
}, {once: true});

// Task 8
const out8 = document.querySelector('.task8__output');
const btn8 = document.querySelector('.task8-btn');
btn8.addEventListener('click', () => {
    const checkedExpression = document.querySelector('.select-expression .input-expression:checked').value;
    let [val1, op, val2] = parse(checkedExpression);
    out8.innerHTML = `
                    Операнд 1: <b>${val1}</b> <br>
                    Оператор: <b>${op}</b> <br>
                    Операнд 2: <b>${val2}</b>
                    `;
});


function parse(expression) {
    const regexp = /(-?\d+(?:\.\d+)?) ?([+*-/]) ?(-?\d+(?:\.\d+)?)/;
    let matches = expression.match(regexp);
    const splitExpression = [matches[1], matches[2], matches[3]];
    return splitExpression;
}


// Task 9
const btn9 = document.querySelector('.task9-btn');
btn9.addEventListener('click', () => {
    const regexp = /([\da-f]{2}:){5}[\da-f]{2}/gi;
    const elem = document.querySelector('.task9__example');
    findMatchInTheNode(regexp, elem);
}, {once: true});

// Task 10
const btn10 = document.querySelector('.task10-btn');
btn10.addEventListener('click', () => {
    const regexp = /(Java(Script)?)|(PHP)|(C(\+\+)?)/g;
    const elem = document.querySelector('.task10__example');
    findMatchInTheNode(regexp, elem);
}, {once: true});

// Task 11
const btn11 = document.querySelector('.task11-btn');
btn11.addEventListener('click', () => {
    const regexp = /\b(?<!-)\d+\b/g;
    const elem = document.querySelector('.task11__example');
    findMatchInTheNode(regexp, elem);
}, {once: true});


const btn12 = document.querySelector('.task12-btn');
btn12.addEventListener('click', () => {
    const regexp = /\[(\d+)\]/g;
    const elem = document.querySelector('.task12__example');
    let str = elem.textContent.trim();

    let newstr = str.replace(regexp, (match, p1) => {
        let newNumber = +p1 + +p1 + +p1;
        return `[${newNumber}]`;
    });
    elem.textContent = newstr;
}, {once: true});

// Task 13
const btn13 = document.querySelector('.task13-btn');
btn13.addEventListener('click', () => {
    const regexp = /\d+/g;
    const elem = document.querySelector('.task13__example');
    let str = elem.textContent.trim();

    let newstr = str.replace(regexp, (match) => {
        return match.split('').reverse().join('');
    });
    elem.textContent = newstr;
}, {once: true});
