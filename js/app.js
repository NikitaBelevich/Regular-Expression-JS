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