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
  return [...listOfEmployees].map(el => ({
    name: el.innerText,
    position: el.dataset.position,
    salary: el.dataset.salary,
    age: el.dataset.age,
  }));
}
sortList(list);
getEmployees(list);
