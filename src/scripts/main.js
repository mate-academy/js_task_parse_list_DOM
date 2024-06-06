'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const employeeList = document.querySelector('ul');

  function parseSalary(salaryStr) {
    return Number(salaryStr.replace(/[^0-9.-]+/g, ''));
  }

  function sortEmployeeList(listElement) {
    const items = Array.from(listElement.children);

    items.sort(
      (a, b) => parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary),
    );

    listElement.innerHTML = '';
    items.forEach((item) => listElement.appendChild(item));
  }

  sortEmployeeList(employeeList);
});
