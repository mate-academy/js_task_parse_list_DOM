'use strict';

function strToNum(string) {
  return +string.slice(1).split(',').join('');
}

const list = document.querySelector('ul').children;
const ul = document.querySelector('ul');

function sortList(li) {
  const arrList = [...li];

  arrList.sort((a, b) => {
    return strToNum(b.dataset.salary) - strToNum(a.dataset.salary);
  });

  arrList.forEach(a => ul.append(a));
}

function getEmployees(li) {
  return [...list].map(a => {
    return {
      name: a.innerText,
      position: a.dataset.position,
      salary: a.dataset.salary,
      age: a.dataset.age,
    };
  });
}

sortList(list);
getEmployees(list);
