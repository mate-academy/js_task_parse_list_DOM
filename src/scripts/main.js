'use strict';

const ul = document.querySelector('ul');
const list = [...document.querySelectorAll('li')];

function getNumber(num) {
  return num.slice(1).split(',').join('');
}

function sortList(listArr) {
  const result = listArr
    .map(item => [+getNumber(item.dataset.salary), item])
    .sort((a, b) => b[0] - a[0])
    .map(item => item[1]);

  return result;
}

const resultOfSort = sortList(list);

ul.innerHTML = '';

for (const element of resultOfSort) {
  ul.insertAdjacentHTML('beforeend', element.outerHTML);
}

function getEmployees(listArr) {
  const result = listArr.map(element => ({
    name: element.innerText.trim(),
    position: element.dataset.position,
    salary: element.dataset.salary,
    age: element.dataset.age,
  }));

  return result;
}

getEmployees(resultOfSort);
