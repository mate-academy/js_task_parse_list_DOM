'use strict';

// write code here
const colection = document.querySelector('ul');
const list = [...colection.children];

const salaryToNumber = (value) => Number(value.slice(1).replace(/,/, ''));

function sortList(arr) {
  const sortedList = arr.sort((a, b) =>
    salaryToNumber(b.dataset.salary) - salaryToNumber(a.dataset.salary));

  colection.append(...sortedList);
}

function getEmployees(arr) {
  const result = arr.map(employees => ({
    name: employees.textContent,
    position: employees.dataset.position,
    salary: employees.dataset.salary,
    age: employees.dataset.age,
  }));

  return result;
}

sortList(list);
getEmployees(list);
