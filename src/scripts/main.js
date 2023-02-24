'use strict';

const employeesList = document.querySelector('ul');
const employee = document.querySelectorAll('li');
const employees = [...employee];

function salaryEmployee(salary) {
  return Number(salary.split(',').join('').slice(1));
}

function sortList(list) {
  const sorted = list.sort((a, b) => {
    return (
      salaryEmployee(b.dataset.salary) - salaryEmployee(a.dataset.salary)
    );
  });

  employeesList.append(...sorted);
}

function getEmployees(list) {
  return list.map(item => {
    return {
      name: item.innerText,
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    };
  });
}

sortList(employees);
getEmployees(employees);
