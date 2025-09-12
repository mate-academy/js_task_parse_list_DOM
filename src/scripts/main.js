'use strict';

const employeeList = document.querySelector('ul');

function sortList(list) {
  const items = Array.from(list.querySelectorAll('li'));

  function parseSalary(salaryStr) {
    return Number(salaryStr.replace(/[^0-9.-]+/g, ''));
  }

  items.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  items.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  const items = Array.from(list.querySelectorAll('li'));

  return items.map((item) => {
    return {
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: Number(item.dataset.salary.replace(/[^0-9.-]+/g, '')),
      age: Number(item.dataset.age),
    };
  });
}

sortList(employeeList);

getEmployees(employeeList);
