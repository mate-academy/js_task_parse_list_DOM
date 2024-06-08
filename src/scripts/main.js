'use strict';

const employees = [...document.querySelectorAll('li')];

function parseSalaryString(salary) {
  return +salary.replace(/[^0-9.-]+/g, '');
}

function sortList(list) {
  return list
    .sort(
      (li1, li2) =>
        parseSalaryString(li2.dataset.salary) -
        parseSalaryString(li1.dataset.salary),
    )
    .forEach((li) => document.querySelector('ul').append(li));
}

function getEmployees(list) {
  return list.map((employee) => {
    return {
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
    };
  });
}

sortList(employees);
getEmployees(employees);
