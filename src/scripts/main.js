'use strict';

const employees = document.querySelector('ul');

function sortList(list) {
  const listItems = Array.from(list);

  listItems.sort((left, right) => (
    convertToNumber(right.dataset.salary)
    - convertToNumber(left.dataset.salary)
  ));

  employees.append(...listItems);
}

function convertToNumber(string) {
  return +string.slice(1).split(',').join('');
}

function getEmployees(list) {
  const listItems = [ ...list.children ];

  return listItems.map(listItem => {
    const employee = {};

    employee.name = listItem.innerText;
    employee.position = listItem.dataset.position;
    employee.salary = listItem.dataset.salary;
    employee.age = listItem.dataset.age;

    return employee;
  });
}

sortList(employees.children);

getEmployees(employees);
