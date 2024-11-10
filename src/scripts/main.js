'use strict';

// write code here
function getEmployees(list) {
  return Array.from(list).map((item) => {
    return {
      name: item.innerText,
      position: item.getAttribute('data-position'),
      salary: parseSalary(item.getAttribute('data-salary')),
      age: parseInt(item.getAttribute('data-age'), 10),
    };
  });
}

function parseSalary(salaryString) {
  return parseInt(salaryString.replace(/[^0-9.-]+/g, ''), 10);
}

function createSortList(list) {
  const employees = getEmployees(list);

  return employees.sort((a, b) => b.salary - a.salary);
}

document.addEventListener('DOMContentLoaded', () => {
  const employeeList = document.querySelectorAll('ul li');
  const sortedEmployees = createSortList(employeeList);

  // eslint-disable-next-line no-console
  console.log(sortedEmployees);
});
