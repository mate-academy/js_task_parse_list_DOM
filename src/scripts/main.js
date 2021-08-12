'use strict';

const elements = document.querySelectorAll('li');

function getNumber(string) {
  let str = '';

  for (let i = 0; i <= string.length; i++) {
    if (!isNaN(+string[i])) {
      str += string[i];
    }
  }

  return +str;
}

function sortList(list) {
  const sortedArrayOfEmployees = [...list].sort((a, b) =>
    getNumber(b.dataset.salary) - getNumber(a.dataset.salary)
  );

  const listOfEmployees = document.querySelector('ul');

  for (const employee of sortedArrayOfEmployees) {
    listOfEmployees.append(employee);
  }
}

function getEmployees(list) {
  const employeesArray = [ ...list ].map(elem => {
    return {
      name: elem.innerText,
      position: elem.dataset.position,
      salary: elem.dataset.salary,
      age: elem.dataset.age,
    };
  });

  return employeesArray;
}

sortList(elements);
getEmployees(elements);
