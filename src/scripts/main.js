'use strict';

const employeeList = [...document.querySelectorAll('li')];
const employees = document.querySelector('ul');

function getSalary(person) {
  return Number(person.dataset.salary.slice(1).replace(',', ''));
};

function sortList(list) {
  const sortedList = [...list].sort((a, b) =>
    getSalary(b) - getSalary(a)
  );

  employees.append(...sortedList);
}

function getEmployees(list) {
  return list.map(el => ({
    name: el.textContent,
    position: el.dataset.position,
    salary: el.dataset.salary,
    age: el.dataset.age,
  }));
}

sortList(employeeList);
getEmployees(employeeList);
