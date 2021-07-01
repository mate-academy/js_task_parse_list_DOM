'use strict';

const employees = document.querySelector('ul');

function sortList(list) {
  let swapped = false;

  for (let i = 0; i < list.children.length - 1; i++) {
    swapped = false;

    for (let j = 1; j < list.children.length; j++) {
      const leftKey = convertToNumber(list.children[j - 1].dataset.salary);
      const rightKey = convertToNumber(list.children[j].dataset.salary);

      if (leftKey < rightKey) {
        swapped = true;
        list.children[j].after(list.children[j - 1]);
      }
    }

    if (!swapped) {
      break;
    }
  }
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

sortList(employees);

getEmployees(employees);
