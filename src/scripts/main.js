'use strict';

const root = document.querySelector('ul');
const list = document.querySelectorAll('li');

function convertToNumber(str) {
  const number = parseInt(str.slice(1).split(',').join(''));

  return number;
}

function sortList(arr) {
  const sortedList = [...arr].sort((a, b) =>
    convertToNumber(b.dataset.salary) - convertToNumber(a.dataset.salary));

  sortedList.forEach(element => {
    root.append(element);
  });
}

function getEmployees(arr) {
  // const employees = [...arr];
  const employees = [...arr].map(person => {
    const obj = {
      name: person.textContent.trim(),
      position: person.dataset.position,
      salary: person.dataset.salary,
      age: person.dataset.age,
    };

    return obj;
  });

  return employees;
}

sortList(list);
getEmployees(list);
