'use strict';

const employees = [...document.querySelectorAll('li')];
const employeesList = document.querySelector('ul');

function salaryToNumber(salary) {
  return Number(salary.replace('$', '').split(',').join(''));
}

function sortBySalary(list) {
  return [...list].sort((a, b) =>
    salaryToNumber(b.dataset.salary) - salaryToNumber(a.dataset.salary));
}

function newEmployeesList(list) {
  list.map(person => {
    return {
      name: person.innerText,
      ...person.dataset,
    };
  });
}

employeesList.append(...sortBySalary(employees));
newEmployeesList(employeesList);
