'use strict';

const employees = [...document.querySelectorAll('[data-salary]')];

document.querySelector('ul').append(...sortList(employees));
getEmployees(employees);

/* 4) Call both functions.
5) Done. <----- якщо чесно то не зрозумів для чого викликати getEmployees() */

function sortList(list) {
  return list.sort((first, second) => {
    const num1 = convertToNumber(first.dataset.salary);
    const num2 = convertToNumber(second.dataset.salary);

    return Number(num2) - Number(num1);
  });
}

function getEmployees(list) {
  const people = [];

  for (const human of list) {
    const employee = {};

    employee.name = human.textContent.trim();
    employee.salary = human.dataset.salary;
    employee.age = human.dataset.age;
    employee.position = human.dataset.position;

    people.push(employee);
  }

  return people;
}

function convertToNumber(string) {
  return +string.replace(/[,$]/g, '');
}
