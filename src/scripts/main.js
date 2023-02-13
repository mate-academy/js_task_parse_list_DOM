'use strict';

const employeesList = document.querySelector('ul');
const employees = [...document.querySelectorAll('li')];

function salaryNum(salary) {
  return Number(salary.split(',').join('').slice(1));
}

function sortList(list) {
  const sorted = list.sort((a, b) => {
    return (salaryNum(b.dataset.salary) - salaryNum(a.dataset.salary));
  });

  employeesList.append(...sorted);
}

function getEmployees(list) {
  return list.map(employee => {
    return {
      name: employee.innerText,
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
    };
  });
}

sortList(employees);
getEmployees(employees);
