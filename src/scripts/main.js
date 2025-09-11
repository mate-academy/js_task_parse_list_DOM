'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const listOfEmployees = document.querySelector('ul');

  function parseSalary(salaryString) {
    const cleanSalary = String(salaryString).replace(/[$,]/g, '');

    return Number(cleanSalary);
  }

  function sortList(list) {
    const array = Array.from(list.querySelectorAll('li'));

    array.sort((a, b) => {
      const listItemA = parseSalary(a.dataset.salary);
      const listItemB = parseSalary(b.dataset.salary);

      return listItemB - listItemA;
    });

    array.forEach((item) => list.appendChild(item));
  }

  function getEmployees(list) {
    return Array.from(list.querySelectorAll('li')).map((emlp) => {
      const fullName = emlp.textContent.trim();

      return {
        name: fullName,
        position: emlp.dataset.position,
        salary: parseSalary(emlp.dataset.salary),
        age: Number(emlp.dataset.age),
      };
    });
  }
  sortList(listOfEmployees);
  getEmployees(listOfEmployees);
});
