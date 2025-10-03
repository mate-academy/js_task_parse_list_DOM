'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const ul = document.querySelector('ul');

  function parseSalary(salaryStr) {
    if (!salaryStr) {
      return 0;
    }

    return Number(salaryStr.replace(/[$,]/g, '').trim());
  }

  function sortList(list) {
    const items = Array.from(list.querySelectorAll('li'));

    items.sort(
      (a, b) => parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary),
    );
    items.forEach((li) => list.appendChild(li));
  }

  function getEmployees(list) {
    const items = Array.from(list.querySelectorAll('li'));

    return items
      .map((li) => ({
        name: li.textContent.trim(),
        position: li.dataset.position,
        lary: parseSalary(li.dataset.salary),
        age: Number(li.dataset.age),
      }))
      .filter((emp) => !isNaN(emp.salary) && !isNaN(emp.age));
  }

  sortList(ul);

  const employees = getEmployees(ul);

  window.employees = employees;
});
