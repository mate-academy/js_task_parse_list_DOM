'use strict';

const listItems = document.querySelectorAll('li');

function getEmployees(list) {
  const employees = [];

  for (let i = 0; i < list.length; i++) {
    const employeeInfo = {
      name: list[i].innerText,
      position: list[i].dataset.position,
      salary: list[i].dataset.salary,
      age: list[i].dataset.age,
    };

    employees.push(employeeInfo);
  }

  return employees;
}

function sortList(list) {
  list
    .sort((a, b) => +b.salary
      .split('$')[1]
      .split(',')
      .join('') - +a.salary
      .split('$')[1]
      .split(',')
      .join(''));

  for (let i = 0; i < list.length; i++) {
    listItems[i].innerText = list[i].name;
    listItems[i].dataset.position = list[i].position;
    listItems[i].dataset.salary = list[i].salary;
    listItems[i].dataset.age = list[i].age;
  }
}

sortList(getEmployees(listItems));
