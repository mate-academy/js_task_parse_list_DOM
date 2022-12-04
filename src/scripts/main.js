'use strict';

const list = document.querySelector('ul');
const employeesList = [...list.children];

function salaryToNumber(salary) {
  return Number(salary
    .replace('$', '')
    .split(',')
    .join('')
  );
}

function sortList(listOfEmployees) {
  const sortedListOfEmployees = listOfEmployees.sort((a, b) => {
    return salaryToNumber(b.dataset.salary) - salaryToNumber(a.dataset.salary);
  });

  list.append(...sortedListOfEmployees);
}

function getEmployees(listOfEmployees) {
  const employees = [];

  listOfEmployees.forEach(employee => {
    employees.push({
      name: employee.innerText,
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
    });
  });

  return employees;
}

sortList(employeesList);
getEmployees(employeesList);
