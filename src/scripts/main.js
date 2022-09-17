'use strict';

const employees = [...document.querySelectorAll('li')];

function sortList(list) {
  list.sort((itemA, itemB) => (
    convertToNumber(itemB.dataset.salary)
    - convertToNumber(itemA.dataset.salary)
  ));

  list.forEach(item => (
    document.querySelector('ul').append(item)
  ));
}

function convertToNumber(string) {
  return string.replace(/\D/g, '');
}

function getEmployees(list) {
  return list.map(item => (
    {
      name: item.innerText,
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    }
  ));
}

sortList(employees);
getEmployees(employees);
