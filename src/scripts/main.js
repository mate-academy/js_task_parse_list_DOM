'use strict';

const employeesList = document.querySelectorAll('li');

function sortList(list) {
  const sortedList = [...list].sort((employee1, employye2) =>
    parseSalary(employye2.dataset.salary)
      - parseSalary(employee1.dataset.salary));

  function parseSalary(salary) {
    return salary.replace(/[^+\d]/g, '');
  }

  document.querySelector('ul').append(...sortedList);
}

function getEmployees(list) {
  return [...list].map(employee => ({
    name: employee.innerText,
    ...employee.dataset,
  }));
}

sortList(employeesList);
getEmployees(employeesList);
