'use strict';

const patternNumbers = /\D/g;

const getSalaryEmployee = (employee) =>
  +employee.dataset.salary.replace(patternNumbers, '');

const sortList = (list) => {
  const items = Array.from(list.children);

  const sortedItems = items.sort(
    (employeeOne, employeeTwo) =>
      getSalaryEmployee(employeeTwo) - getSalaryEmployee(employeeOne),
  );

  list.innerHTML = '';

  sortedItems.forEach((item) => list.appendChild(item));
};

const getEmployees = (list) =>
  Array.from(list.children).map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: item.dataset.age,
  }));

const listUl = document.querySelector('ul');

sortList(listUl);
getEmployees(listUl);
