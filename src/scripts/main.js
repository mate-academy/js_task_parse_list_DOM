'use strict';

const employeesListTag = document.querySelector('ul');
const employeesList = [...employeesListTag.querySelectorAll('li')];

const sortedEmployeesList = employeesList.sort((a, b) => {
  const salaryA = +a.dataset.salary.replace(/[$,]/g, '');
  const salaryB = +b.dataset.salary.replace(/[$,]/g, '');

  return salaryB - salaryA;
});

employeesListTag.innerHTML = '';

sortedEmployeesList.forEach(
  (employee) => employeesListTag.appendChild(employee),
  // eslint-disable-next-line function-paren-newline
);
