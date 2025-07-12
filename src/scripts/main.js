'use strict';

function parseSalary(salaryStr) {
  return parseInt(salaryStr.replace(/[^0-9]/g, ''), 10);
}

function sortList(employeeList) {
  const items = Array.from(employeeList.children);

  items.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  items.forEach((item) => employeeList.appendChild(item));
}

const list = document.querySelector('ul');

sortList(list);
