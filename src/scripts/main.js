'use strict';

const list = document.querySelectorAll('li');
const mainList = document.querySelector('ul');

function toNum(str) {
  return +str.slice(1).split(',').join('');
}

function sortList(someList) {
  return [...someList].sort((a, b) =>
    toNum(a.dataset.salary) - toNum(b.dataset.salary)).reverse();
}

function getEmployees(someList) {
  const arr = [];

  for (const li of someList) {
    const obj = {
      name: li.textContent.trim(),
      position: li.dataset.position,
      salary: li.dataset.salary,
      age: li.dataset.age,
    };

    arr.push(obj);
  }

  return arr;
}

const sorted = getEmployees(sortList(list));

mainList.innerHTML = `${sorted.map(({ name, position, salary, age }) => `
<li
    data-position="${position}"
    data-salary="${salary}"
    data-age="${age}"
  >
${name}
`).join('')}
`;
