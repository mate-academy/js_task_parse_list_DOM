'use strict';

function parseSalary(salary) {
  return parseInt(salary.replace('$', '').replace(',', ''));
}

function sortList(list) {
  const items = Array.from(list.children);

  items.sort((a, b) => {
    const salaryA = parseSalary(a.getAttribute('data-salary'));
    const salaryB = parseSalary(b.getAttribute('data-salary'));

    return salaryB - salaryA;
  });

  // Re-append the sorted items back to the list
  items.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  const items = Array.from(list.children);

  return items.map((item) => {
    return {
      name: item.textContent.trim(),
      position: item.getAttribute('data-position'),
      salary: parseSalary(item.getAttribute('data-salary')),
      age: parseInt(item.getAttribute('data-age')),
    };
  });
}

const employeeList = document.querySelector('ul');

sortList(employeeList);
getEmployees(employeeList);
