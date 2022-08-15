'use strict';

const employees = [...document.querySelectorAll('li')];

function sortList(list) {
  return list.sort((a, b) => (
    b.dataset.salary.replace(/\D/g, '') - a.dataset.salary.replace(/\D/g, '')));
}

sortList(employees);

function getEmployees(list) {
  const result = [];

  list.forEach(element => {
    result.push({
      name: element.innerText,
      position: element.dataset.position,
      salary: element.dataset.salary,
      age: element.dataset.age,
    });
  });

  return result;
}

getEmployees(employees);

employees.forEach(item => {
  document.querySelector('ul').append(item);
});
