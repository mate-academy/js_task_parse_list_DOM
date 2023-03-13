'use strict';

const employees = [...document.querySelectorAll('li')];

function sortList(list) {
  list.sort((a, b) => {
    return getNum(b.dataset.salary) - getNum(a.dataset.salary);
  });
  document.querySelector('ul').append(...list);
}

sortList(employees);

function getNum(str) {
  let result = '';

  for (const char of str) {
    if (!isNaN(char)) {
      result += char;
    }
  }

  return result;
}

function getEmployees(list) {
  list.map(item => {
    return {
      name: item.innerText,
      positon: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    };
  });
}

getEmployees(employees);
