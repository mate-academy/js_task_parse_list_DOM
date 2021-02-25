'use strict';

const throwSymbols = /[^\d]/g;
const [...allEmployees] = document.querySelectorAll('li');
const listOfEmployees = document.querySelector('ul');

const convertSalary = employee => +(employee.dataset.salary)
  .replace(throwSymbols, '');

function sortList(employees) {
  const sortedEmployees = employees.sort(
    (prevEmployee, nextEmployee) => {
      return convertSalary(nextEmployee) - convertSalary(prevEmployee);
    });

  listOfEmployees.append(...sortedEmployees);

  return sortedEmployees;
}

function getEmployees(employees) {
  return employees.map(employee => ({
    name: employee.innerText,
    ...employee.dataset,
  }));
}

getEmployees(allEmployees);
sortList(allEmployees);
