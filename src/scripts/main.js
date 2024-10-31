'use strict';

let employees = Array.from(document.querySelectorAll('ul li'));

function sortList(list) {
  employees = list.sort((a, b) => {
    const salaryA = parseFloat(
      a.getAttribute('data-salary').replace(/[^\d.-]/g, ''),
    );
    const salaryB = parseFloat(
      b.getAttribute('data-salary').replace(/[^\d.-]/g, ''),
    );

    return salaryB - salaryA;
  });

  return employees;
}

function getEmployees(list) {
  const employeeList = document.querySelector('ul');

  employeeList.innerHTML = '';

  list.forEach((employee) => {
    employeeList.appendChild(employee);
  });

  return list;
}

sortList(employees);
getEmployees(employees);
