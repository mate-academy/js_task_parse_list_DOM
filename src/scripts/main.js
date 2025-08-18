'use strict';

function getSalary(item) {
  const employeeSalary = item.dataset.salary.replace('$', '');

  return parseInt(employeeSalary);
}

function sortList(list) {
  const employees = Array.from(list.children);

  employees.sort((a, b) => {
    const salaryA = getSalary(a);
    const salaryB = getSalary(b);

    return salaryB - salaryA;
  });

  list.innerHTML = '';

  employees.forEach((element) => list.appendChild(element));
}

function getEmployees(list) {
  const listEmployees = list.children;

  const employees = Array.from(listEmployees).map((el) => {
    return {
      name: el.textContent.trim(),
      position: el.dataset.position,
      salary: getSalary(el),
      age: parseInt(el.dataset.age),
    };
  });

  return employees;
}

const employeesList = document.querySelector('ul');

sortList(employeesList);

getEmployees(employeesList);
