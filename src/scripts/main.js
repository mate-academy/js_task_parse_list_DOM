'use strict';

const employeeList = document.querySelector('ul');

function salaryParse(salary) {
  const cleanSalary = salary.replace(/[^0-9.]/g, '');

  return parseFloat(cleanSalary);
}

function sortList(list) {
  const items = Array.from(list.children);

  items.sort((a, b) => {
    const salaryA = salaryParse(a.getAttribute('data-salary'));
    const salaryB = salaryParse(b.getAttribute('data-salary'));

    return salaryB - salaryA;
  });

  items.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  return Array.from(list.children).map((item) => ({
    name: item.getAttribute('data-name'),
    position: item.getAttribute('data-position'),
    salary: salaryParse(item.getAttribute('data-salary')),
    age: item.getAttribute('data-age'),
  }));
}

sortList(employeeList);
getEmployees(employeeList);
// write code here
