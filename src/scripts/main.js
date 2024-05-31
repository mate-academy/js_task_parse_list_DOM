'use strict';

const empList = document.querySelector('ul');

function salaryParser(salary) {
  return salary.replace('$', '').replace(',', '');
}

const sortList = (employeesList) => {
  const employees = Array.from(employeesList.children);

  employees.sort((a, b) => {
    const salaryA = parseFloat(salaryParser(a.getAttribute('data-salary')));
    const salaryB = parseFloat(salaryParser(b.getAttribute('data-salary')));

    return salaryB - salaryA;
  });

  employees.forEach((employee) => employeesList.appendChild(employee));
};

sortList(empList);
