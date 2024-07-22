'use strict';

document.addEventListener('DOMContentLoaded', () => {
  function parseSalary(salaryString) {
    return parseFloat(salaryString.replace(/[$,]/g, ''));
  }

  function sortList(list) {
    const listItems = Array.from(list.children);

    const sortedEmployees = listItems.map((item) => {
      return {
        element: item,
        salary: parseSalary(item.getAttribute('data-salary')),
      };
    });

    sortedEmployees.sort((a, b) => b.salary - a.salary);

    list.innerHTML = '';

    sortedEmployees.forEach((employee) => {
      list.appendChild(employee.element);
    });
  }

  function getEmployees(list) {
    const listItems = Array.from(list.children);

    return listItems.map((item) => {
      return {
        name: item.textContent.trim(),
        position: item.getAttribute('data-position'),
        salary: parseSalary(item.getAttribute('data-salary')),
        age: item.getAttribute('data-age'),
      };
    });
  }

  const employeeList = document.querySelector('ul');

  sortList(employeeList);
  getEmployees(employeeList);
});
