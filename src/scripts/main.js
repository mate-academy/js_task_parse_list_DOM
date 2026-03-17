'use strict';

const employeesList = document.querySelector('ul');

function toNumber(value) {
  return Number(value.trim().replace(/\$/g, '').replace(/,/g, ''));
}

function sortList(list) {
  const el = list.querySelectorAll('li');
  const employeesElements = Array.from(el);

  employeesElements.sort((a, b) => {
    return toNumber(b.dataset.salary) - toNumber(a.dataset.salary);
  });

  employeesElements.forEach((item) => {
    list.append(item);
  });
}

function getEmployees(list) {
  const employeesElements = Array.from(list.querySelectorAll('li'));

  return employeesElements.map((item) => {
    return {
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: toNumber(item.dataset.salary),
      age: toNumber(item.dataset.age),
    };
  });
}

sortList(employeesList);
getEmployees(employeesList);
