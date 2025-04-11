'use strict';

function parseSalary(salaryStr) {
  return parseFloat(salaryStr.replace(/[^0-9.-]+/g, ''));
}

function sortList(list) {
  const items = Array.from(list.children);

  items.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  items.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  const items = Array.from(list.children);

  return items.map((item) => {
    const personName = item.querySelector('.name')?.textContent.trim() || '';
    const position = item.querySelector('.position')?.textContent.trim() || '';
    const age = parseInt(item.querySelector('.age')?.textContent.trim(), 10);
    const salary = parseSalary(item.dataset.salary);

    return {
      personName,
      position,
      salary,
      age,
    };
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const employeeList = document.querySelector('.employee-list');

  sortList(employeeList);

  const employees = getEmployees(employeeList);

  const output = document.querySelector('.output');

  employees.forEach((emp) => {
    const p = document.createElement('p');

    p.textContent = `${emp.personName}, ${emp.position}, ${emp.salary}₴, ${emp.age} років`;
    output.appendChild(p);
  });
});
