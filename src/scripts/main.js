'use strict';

const list = document.querySelectorAll('li');

function sortList(people) {
  const ulSort = document.querySelector('ul');
  const sortPeople = [...people].sort((a, b) =>
    +(b.dataset.salary.substring(1).split(',').join(''))
    - +(a.dataset.salary.substring(1).split(',').join(''))
  );

  for (const item of sortPeople) {
    ulSort.append(item);
  }
}

function getEmployees(listOfEmployees) {
  const employ = [...listOfEmployees];
  const arrayOfEmployees = [];

  for (let i = 0; i < employ.length; i++) {
    const man = {};

    man.name = employ[i].innerText;
    man.position = employ[i].dataset.position;
    man.salary = employ[i].dataset.salary;
    man.age = employ[i].dataset.age;

    arrayOfEmployees.push(man);
  }

  return arrayOfEmployees;
}
sortList(list);
getEmployees(list);
