'use strict';

const employeesList = document.querySelector('ul');
const employees = [...document.querySelectorAll('li')];

function salaryToNumber(salary) {
  return +(salary.split('$').join('').split(',').join(''));
}

function sortList(list) {
  const sortedList = list.sort((a, b) =>
    salaryToNumber(b.dataset.salary) - salaryToNumber(a.dataset.salary));

  employeesList.append(...sortedList);
}

function getEmployees(list) {
  return list.map(person => ({
    name: person.innerText,
    position: person.dataset.position,
    salary: person.dataset.salary,
    age: person.dataset.age,
  }));
}

sortList(employees);
getEmployees(employees);
