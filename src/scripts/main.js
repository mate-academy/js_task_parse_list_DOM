'use strict';

const element = [...document.querySelectorAll('li')];

function sortList(list) {
  return list
    .sort((a, b) => (
      cleanNumber(b.dataset.salary) - cleanNumber(a.dataset.salary)
    ));
}

function getEmployees(list) {
  return list.map(employee => ({
    name: employee.innerText,
    age: employee.dataset.age,
    position: employee.dataset.position,
    salary: employee.dataset.salary,
  }));
}

function cleanNumber(string) {
  return string.replace(/\D/g, '');
}

getEmployees(sortList(element));

element.forEach(employee => {
  document.querySelector('ul').append(employee);
});
