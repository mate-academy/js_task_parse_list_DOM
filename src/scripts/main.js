'use strict';

const elements = document.querySelectorAll('li');

function number(string) {
  let str = '';

  for (let i = 0; i <= string.length; i++) {
    if (!isNaN(+string[i])) {
      str += string[i];
    }
  }

  return +str;
}

function sortList(list) {
  const newSort = [...list].sort((a, b) =>
    number(b.dataset.salary) - number(a.dataset.salary)
  );

  const listOfEmployees = document.querySelector('ul');

  for (const employee of newSort) {
    listOfEmployees.append(employee);
  }
}

function mployees(list) {
  const employee = [ ...list ].map(elem => {
    return {
      name: elem.innerText,
      position: elem.dataset.position,
      salary: elem.dataset.salary,
      age: elem.dataset.age,
    };
  });

  return employee;
}

sortList(elements);
mployees(elements);
