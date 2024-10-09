'use strict';

function parseSalary(salary) {
  return Number(salary.replace(/[^0-9.-]+/g, ''));
}

function getEmployees(list) {
  return [...list.querySelectorAll('li')].map((li) => ({
    name: li.textContent.trim(),
    position: li.dataset.position,
    salary: parseSalary(li.dataset.salary),
    age: li.dataset.age,
  }));
}

function sortList(list) {
  const employees = getEmployees(list);

  employees.sort((a, b) => b.salary - a.salary);

  list.innerHTML = '';

  employees.forEach((employee) => {
    const li = document.createElement('li');

    li.textContent = `${employee.name}`;
    list.appendChild(li);
  });
}

const employeeList = document.querySelector('ul');

sortList(employeeList);
