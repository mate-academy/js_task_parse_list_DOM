'use strict';

function getEmployees(list) {
  const employeeElements = list.querySelectorAll('li');
  const employees = [];

  employeeElements.forEach((el) => {
    const position = el.getAttribute('data-position');
    const salary = parseFloat(
      el.getAttribute('data-salary').replace(/\$/g, '').replace(/,/g, ''),
    );
    const age = parseInt(el.getAttribute('data-age'), 10);

    employees.push({
      position,
      salary,
      age,
      element: el,
    });
  });

  return employees;
}

function sortList(list) {
  const employees = getEmployees(list);

  employees.sort((a, b) => b.salary - a.salary);

  list.innerHTML = '';

  employees.forEach((employee) => {
    list.appendChild(employee.element);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const employeeList = document.querySelector('ul');

  sortList(employeeList);
});
