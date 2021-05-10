'use strict';

const listOfEmployees = document.querySelector('ul');

function sortList(list) {
  function salaryToNumber(salary) {
    const res = salary.slice(1).split(',').join('.');

    return +res;
  }

  const result = [...list.children].sort((a, b) =>
    salaryToNumber(b.dataset.salary) - salaryToNumber(a.dataset.salary));

  list.innerHTML = `
  <ul>
    ${result.map(item => item.outerHTML).join('')}
  </ul>
  `;
}

function getEmployees(list) {
  const employee = {};
  const employees = [];

  [...list.children].forEach(item => {
    employee.name = item.innerText;
    employee.position = item.dataset.position;
    employee.salary = item.dataset.salary;
    employee.age = item.dataset.age;
    employees.push({ ...employee });
  });

  return employees;
}

sortList(listOfEmployees);
getEmployees(listOfEmployees);
