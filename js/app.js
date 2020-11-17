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


