'use strict';

const employees = [...document.querySelectorAll('li')];
const ul = document.querySelector('ul');

ul.append(...sortList(employees));
getEmployees(employees);

function sortList(list) {
  return list.sort((previous, current) => {
    const num1 = convertToNumber(previous.dataset.salary);
    const num2 = convertToNumber(current.dataset.salary);

    return Number(num2) - Number(num1);
  });
}

function getEmployees(list) {
  const people = [];

  list.map(human => {
    const employee = {};

    employee.name = human.textContent.trim();
    employee.salary = human.dataset.salary;
    employee.age = human.dataset.age;
    employee.position = human.dataset.position;

    people.push(employee);
  });

  return people;
}

function convertToNumber(string) {
  return +string.replace(/[,$]/g, '');
}
