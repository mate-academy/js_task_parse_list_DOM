'use strict';

// write code here
function sortList(list) {
  const itemsArray = Array.from(list.children);

  itemsArray.sort((a, b) => {
    const salaryA = parseSalary(a.getAttribute('data-salary'));
    const salaryB = parseSalary(b.getAttribute('data-salary'));

    return salaryB - salaryA;
  });

  itemsArray.forEach((item) => list.appendChild(item));
}

function parseSalary(salaryStr) {
  return parseFloat(salaryStr.replace(/[$,]/g, ''));
}

const employeeList = document.querySelector('ul');

sortList(employeeList);
