'use strict';

const employees = document.getElementsByTagName('li');

function sortList(list) {
  const array = [...list];

  array.sort((first, second) =>
    formatSalary(second.dataset.salary) - formatSalary(first.dataset.salary)
  );

  document.querySelector('ul').append(...array);
}

function formatSalary(string) {
  let checkingArray = string.split('');

  checkingArray = checkingArray.filter(element => !isNaN(element));

  return Number(checkingArray.join(''));
}

function getEmployees(list) {
  const result = [];

  [...list].forEach(element =>
    result.push({
      name: element.innerText,
      position: element.dataset.position,
      salary: element.dataset.salary,
      age: element.dataset.age,
    })
  );

  return result;
}

sortList(employees);
getEmployees(employees);
