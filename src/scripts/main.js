'use strict';

const employees = [...document.querySelectorAll('li')];
const employeesList = document.querySelector('ul');

function toNumber(string) {
  return +string.replace(/[^\d]/g, '');
}

function sortList(list) {
  return list.sort((firstEmployee, secondEmployee) =>
    toNumber(secondEmployee.dataset.salary)
      - toNumber(firstEmployee.dataset.salary));
}

employeesList.append(...sortList(employees));

function getEmployees(list) {
  return list.map(employee => {
    const profile = {};

    profile.name = employee.innerText;
    profile.position = employee.dataset.position;
    profile.salary = employee.dataset.salary;
    profile.age = employee.dataset.age;
  });
};

getEmployees(employees);
