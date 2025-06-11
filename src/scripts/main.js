'use strict';

const elements = document.querySelector('ul');

function sortList(list) {
  const listItems = Array.from(list.children);

  const sorted = listItems.sort((a, b) => {
    const salaryA = parseInt(
      a.getAttribute('data-salary').replace(/[$,]/g, ''),
    );
    const salaryB = parseInt(
      b.getAttribute('data-salary').replace(/[$,]/g, ''),
    );

    return salaryB - salaryA;
  });

  list.append(...sorted);
}

function getEmployees(list) {
  const employees = [];
  const listItems = Array.from(list.children);

  listItems.forEach((item) => {
    const employee = {
      name: item.textContent.trim(),
      position: item.getAttribute('data-position'),
      salary: item.getAttribute('data-salary'),
      age: item.getAttribute('data-age'),
    };

    employees.push(employee);
  });

  return employees;
}

sortList(elements);
getEmployees(elements);
