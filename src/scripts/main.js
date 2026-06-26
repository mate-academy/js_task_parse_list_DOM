'use strict';

const employeesList = document.querySelector('ul');

const parseSalary = (salaryStr) => {
  if (!salaryStr) {
    return 0;
  }

  return Number(salaryStr.replace(/[^0-9.]/g, '')) || 0;
};

const sortList = (list) => {
  const items = Array.from(list.querySelectorAll('li'));

  items.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  items.forEach((item) => list.appendChild(item));
};

const getEmployees = (list) => {
  const items = Array.from(list.querySelectorAll('li'));

  return items.map((item) => {
    const { position, salary, age } = item.dataset;
    const employeeName = item.textContent.trim();

    return {
      name: employeeName,
      position,
      salary,
      age,
    };
  });
};

sortList(employeesList);
getEmployees(employeesList);
