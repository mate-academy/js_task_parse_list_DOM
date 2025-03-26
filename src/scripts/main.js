'use strict';

const getSalaryFromData = (item) => {
  const salary = item.dataset.salary;

  return Number(salary.replace(/[$,]/g, ''));
};

const sortList = (list) => {
  const listItems = Array.from(list.children);

  listItems.sort((a, b) => getSalaryFromData(b) - getSalaryFromData(a));

  listItems.forEach((item) => list.append(item));
};

const getEmployees = (list) => {
  return Array.from(list.children).map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: getSalaryFromData(item),
    age: Number(item.dataset.age),
  }));
};

const employeesList = document.querySelector('ul');

sortList(employeesList);
getEmployees(employeesList);
