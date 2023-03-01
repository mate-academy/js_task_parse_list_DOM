'use strict';

function convertToNumber(string) {
  const number = Number(string.replace(/[$,]/g, ''));

  return number;
}

const employees = document.querySelectorAll('li');
const arrayOfEmployees = [...employees];

function sortList(list) {
  const ul = document.querySelector('ul');
  const sortedList = arrayOfEmployees.sort((a, b) =>
    convertToNumber(b.dataset.salary) - convertToNumber(a.dataset.salary)
  );

  for (const element of sortedList) {
    ul.append(element);
  }
}

function getEmployees(list) {
  return list.map(item => ({
    name: item,
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: item.dataset.age,
  }));
}

getEmployees(arrayOfEmployees);
sortList(arrayOfEmployees);
