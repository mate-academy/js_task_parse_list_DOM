'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const list = document.querySelector('ul');

  function parseSalary(salaryString) {
    const cleanSalary = String(salaryString).replace(/[$,]/g, '');

    return Number(cleanSalary);
  }

  function sortList(listOfEmp) {
    const array = Array.from(listOfEmp.querySelectorAll('li'));

    array.sort((a, b) => {
      const listItemA = parseSalary(a.dataset.salary);
      const listItemB = parseSalary(b.dataset.salary);

      return listItemB - listItemA;
    });

    array.forEach((item) => listOfEmp.appendChild(item));
  }

  function getEmployees(listOfEmp) {
    return Array.from(listOfEmp.querySelectorAll('li')).map((emlp) => {
      const fullName = emlp.textContent.trim();
      const position = emlp.dataset.position;
      const salary = parseSalary(emlp.dataset.salary);
      const age = Number(emlp.dataset.age);

      return {
        fullName,
        position,
        salary,
        age,
      };
    });
  }

  sortList(list);
  getEmployees(list);
});
