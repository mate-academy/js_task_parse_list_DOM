'use strict';

const employeesList = document.querySelector('ul');
const employees = [...document.querySelectorAll('li')];

const sortedEmployeers = sortList(employees);

employees.forEach(person => person.remove());
sortedEmployeers.forEach(person => employeesList.appendChild(person));
getEmployeers(sortedEmployeers);

function sortList(list) {
  return list.sort((person1, person2) =>
    salaryToNumber(person2.dataset.salary)
    - salaryToNumber(person1.dataset.salary));
};

function salaryToNumber(salary) {
  return +salary.slice(1, salary.length).replace(/,/g, '');
};

function getEmployeers(list) {
  return list.map(person => ({
    name: person.innerText,
    position: person.dataset.position,
    salary: salaryToNumber(person.dataset.salary),
    age: person.dataset.age,
  }));
};
