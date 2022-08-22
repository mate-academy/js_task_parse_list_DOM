'use strict';

const employees = [...document.querySelectorAll('li')];

function sortList(list) {
  return list.sort((a, b) => (
    b.dataset.salary.replace(/\D/g, '') - a.dataset.salary.replace(/\D/g, '')));
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
