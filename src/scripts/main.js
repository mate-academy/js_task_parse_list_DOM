'use strict';

const listEmployees = document.querySelector('ul');
const employees = [...document.querySelectorAll('li')];

function getFormattedSalary(person) {
  return +(person.dataset.salary).slice(1).replace(',', '');
}

function sortList(list) {
  const sortEmloyees = list.sort((a, b) =>
    getFormattedSalary(b) - getFormattedSalary(a));

  listEmployees.append(...sortEmloyees);
}

function getEmployees(list) {
  list.map(el => ({
    name: el.textContent,
    position: el.dataset.position,
    salary: el.dataset.salary,
    age: el.append.age,
  })
  );
}

sortList(employees);
getEmployees(employees);
