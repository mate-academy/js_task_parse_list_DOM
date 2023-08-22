'use strict';

const employeeList = document.querySelector('ul');

function sortList(list) {
  const items = Array.from(list.children);

  items.sort((a, b) => {
    const salaryA = Number(
      a.getAttribute('data-salary').replace(/[^0-9.-]+/g, '')
    );
    const salaryB = Number(
      b.getAttribute('data-salary').replace(/[^0-9.-]+/g, '')
    );

    return salaryB - salaryA;
  });

  items.forEach(item => list.appendChild(item));
}

function getEmployees(list) {
  const items = Array.from(list.children);
  const employees = items.map(item => ({
    name: item.textContent,
    position: item.getAttribute('data-position'),
    salary: item.getAttribute('data-salary'),
    age: Number(item.getAttribute('data-age')),
  }));

  return employees;
}

sortList(employeeList);

const employeeArray = getEmployees(employeeList);

return employeeArray;
