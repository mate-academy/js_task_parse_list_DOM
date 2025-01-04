'use strict';

// write code here
const getSalary = (salaryStr) => {
  return parseInt(salaryStr.replace(/[$,]/g, ''), 10);
};

const sortList = (list) => {
  const items = Array.from(list.children);

  items.sort((a, b) => {
    const salaryA = getSalary(a.dataset.salary);
    const salaryB = getSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  items.forEach((item) => list.appendChild(item));
};

const getEmployees = (list) => {
  return Array.from(list.children).map((item) => ({
    name: item.textContent,
    position: item.dataset.position,
    salary: getSalary(item.dataset.salary),
    age: parseInt(item.dataset.age, 10),
  }));
};

const employeeList = document.querySelector('ul');

sortList(employeeList);
getEmployees(employeeList);
