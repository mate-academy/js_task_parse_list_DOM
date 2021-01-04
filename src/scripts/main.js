'use strict';

const arrayLi = document.querySelectorAll('li');
const list = document.querySelector('ul');

function employeesSort(arr, resultList) {
  const result = [...arr].sort((a, b) =>
    +b.dataset.salary.slice(1).split(',').join('')
    - (+a.dataset.salary.slice(1).split(',').join(''))
  );

  resultList.append(...result);
}

function emloyeesObj(arr) {
  const obj = Array.from(arr).map(li => ({
    name: li.innerText,
    position: li.dataset.position,
    salary: li.dataset.salary,
    age: li.dataset.age,
  }));

  return obj;
}

employeesSort(arrayLi, list);
emloyeesObj(arrayLi);
