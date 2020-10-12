'use strict';

const employees = [...document.querySelectorAll('li')];
const employeesList = [];

function salaryToNumber(salary) {
  return salary.replace('$', '').split(',').join('');
}

function sortBySalary(list, array) {
  list.sort((a, b) =>
    salaryToNumber(b.dataset.salary) - salaryToNumber(a.dataset.salary));

  array.push(...list);
}

function newEmployeesList(list) {
  list.map(person => {
    return {
      name: person.innerText,
      position: person.dataset.position,
      salary: person.dataset.salary,
      age: person.dataset.age,
    };
  });
}

sortBySalary(employees, employeesList);
newEmployeesList(employeesList);
