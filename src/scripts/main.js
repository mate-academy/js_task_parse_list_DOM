'use strict';

const employees = [...document.querySelectorAll('li')];

function toNumber(string) {
  return string.replace(/\D/g, '');
}

function sortList(list) {
  return list.sort((a, b) => (
    toNumber(b.dataset.salary) - toNumber(a.dataset.salary)));
}

function getEmployees(list) {
  return list.map(element => (
    {
      name: element.innerText,
      position: element.dataset.position,
      salary: element.dataset.salary,
      age: element.dataset.age,
    }
  ));
}

getEmployees(sortList(employees));

employees.forEach(item => {
  document.querySelector('ul').append(item);
});
