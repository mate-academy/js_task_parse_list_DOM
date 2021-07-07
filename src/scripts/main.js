'use strict';

const employees = [...document.querySelectorAll('li')];
const employeesList = document.querySelector('ul');

function salaryInNumber(salary) {
  return Number(salary
    .replace('$', '')
    .split(',')
    .join('')
  );
}

function sortList(list) {
  return list.sort((a, b) =>
    salaryInNumber(b.dataset.salary) - salaryInNumber(a.dataset.salary)
  );
}

function getEmployees(list) {
  const employeesData = list.map(employee => ({
    name: employee.innerText,
    position: employee.dataset.position,
    salary: employee.dataset.salary,
    age: employee.dataset.age,
  }));

  return employeesData;
}

employeesList.append(...sortList(employees));
getEmployees(employees);
