'use strict';

function parseSalary(salaryString) {
  return parseFloat(salaryString.replace(/[\$,]/g, ''));
}

function sortList(list) {
  const items = Array.from(list.children);

  items.sort((a, b) => {
    const salaryA = parseSalary(a.getAttribute('data-salary'));
    const salaryB = parseSalary(b.getAttribute('data-salary'));

    return salaryB - salaryA;
  });

  items.forEach(elem => list.appendChild(elem));
}

function getEmployees(list) {
  return Array.from(list.children).map(item => {
    return {
      name: item.textContent.trim(),
      position: item.getAttribute('data-position'),
      salary: parseSalary(item.getAttribute('data-salary')),
      age: item.getAttribute('data-age')
    };
  });
}

const employeeList = document.querySelector('ul');

sortList(employeeList);

const employees = getEmployees(employeeList);

// console.log(employees);
