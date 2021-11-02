'use strict';

// write code here
const listOfEmployees = document.querySelector('ul');

function toNum(str) {
  return +str.split('$').join('').split(',').join('');
}

function sortList(list) {
  const newList = [...list.children].sort((a, b) => {
    return toNum(b.dataset.salary) - toNum(a.dataset.salary);
  });

  list.append(...newList);
}

function getEmployees(list) {
  const newList = [...list.children];

  const result = [];

  for (const key of newList) {
    result.push(
      {
        name: key.innerText,
        position: key.dataset.position,
        salary: key.dataset.salary,
        age: key.dataset.age,
      }
    );
  }

  return result;
}

sortList(listOfEmployees);
getEmployees(listOfEmployees);
