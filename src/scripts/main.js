'use strict';

function sortList(list) {
  function toNumber(element) {
    return Number(
      element.dataset.salary.split('$').join('').split(',').join('.')
    );
  }

  const sortedList = [...list].sort((a, b) => toNumber(b) - toNumber(a));

  document.querySelector('ul').append(...sortedList);
}

function getEmployees(list) {
  const callback = (arr, person) => {
    return [
      ...arr,
      {
        name: person.textContent.trim(),
        position: person.dataset.position,
        salary: person.dataset.salary,
        age: +person.dataset.age,
      },
    ];
  };
  const employees = [...list].reduce(callback, []);

  return employees;
}

const employeesList = [...document.querySelectorAll('li')];

sortList(employeesList);
getEmployees(employeesList);
