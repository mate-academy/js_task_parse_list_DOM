'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const ul = document.querySelector('ul');
  const listItems = [...ul.querySelectorAll('li')];

  function parseSalary(salaryStr) {
    return Number(salaryStr.replace(/[$,]/g, '').trim());
  }

  function sortList(list) {
    const sorted = list.sort((a, b) => {
      const salaryA = parseSalary(a.getAttribute('data-salary'));
      const salaryB = parseSalary(b.getAttribute('data-salary'));

      return salaryB - salaryA;
    });

    sorted.forEach((li) => ul.appendChild(li));
  }

  function getEmployees(list) {
    return list
      .map((li) => ({
        name: li.textContent.trim(),
        position: li.getAttribute('data-position'),
        salary: parseSalary(li.getAttribute('data-salary')),
        age: Number(li.getAttribute('data-age')),
      }))
      .filter((emp) => !isNaN(emp.salary) && !isNaN(emp.age));
  }

  sortList(listItems);

  getEmployees(listItems);
});
