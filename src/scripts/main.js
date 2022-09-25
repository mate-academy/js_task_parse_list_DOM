'use strict';

const employees = [...document.body.querySelectorAll('li')];

function sortlist(list) {
  list.sort((personA, personB) => (
    stringSalaryToNumber(personB.dataset.salary)
    - stringSalaryToNumber(personA.dataset.salary)
  ));

  list.forEach(person => (
    document.body.querySelector('ul').append(person)
  ));
}

function stringSalaryToNumber(string) {
  return Number(string
    .split('')
    .filter(item => '0123456789'.includes(item))
    .join('')
  );
}

function getEmployees(list) {
  return list.map(employee => (
    {
      name: employee.textContent,
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
    }
  ));
}

sortlist(employees);
getEmployees(employees);
