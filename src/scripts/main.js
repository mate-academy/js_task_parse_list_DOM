'use strict';

const employeeList = document.querySelector('.employees');

const convertSalary = (salary) => Number(salary.replace(/,/g, ''));

const sortList = (list) => {
  const items = Array.from(list.children);

  items.sort((a, b) => {
    const salaryA = convertSalary(a.dataset.salary);
    const salaryB = convertSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  items.forEach((item) => list.appendChild(item));
};

sortList(employeeList);
