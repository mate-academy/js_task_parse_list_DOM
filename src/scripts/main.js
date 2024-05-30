'use strict';

const empList = document.querySelector('ul');
const employees = Array.from(empList.children);

function salaryParser(salary) {
  return salary.replace('$', '').replace(',', '');
}

const sortList = () => {
  employees.sort((a, b) => {
    const salaryA = salaryParser(a.getAttribute('data-salary'));
    const salaryB = salaryParser(b.getAttribute('data-salary'));

    return salaryB - salaryA;
  });

  employees.forEach((employee) => empList.appendChild(employee));
};

sortList(empList);
