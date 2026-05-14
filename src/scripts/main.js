'use strict';

const employeeList = document.querySelector('ul');

function getSalaryNumber(element) {
  const salary = element.dataset.salary;

  return Number(salary.replace(/[,$]/g, ''));
}

function sortList(list) {
  const items = Array.from(list.children);

  items.sort((a, b) => getSalaryNumber(b) - getSalaryNumber(a));

  items.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  const employees = [];
  const items = list.querySelectorAll('li');

  items.forEach((item) => {
    const employeeName = item.textContent.trim();
    const position = item.dataset.position;
    const salary = getSalaryNumber(item);
    const age = Number(item.dataset.age);

    employees.push({
      name: employeeName,
      position,
      salary,
      age,
    });
  });

  return employees;
}

sortList(employeeList);

getEmployees(employeeList);
