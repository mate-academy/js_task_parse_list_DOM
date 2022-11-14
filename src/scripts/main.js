'use strict';

const ul = document.querySelector('ul');
const itemOfList = document.querySelectorAll('li');

function convertingSalary(salary) {
  return +salary.slice(1).split(',').join('');
};

function sortList(list) {
  return [...list]
    .sort((x, y) =>
      convertingSalary(y.dataset.salary) - convertingSalary(x.dataset.salary)
    );
}

ul.append(...sortList(itemOfList));

function getEmployees(list) {
  return [...itemOfList].map(person => ({
    name: person.innerText,
    position: person.dataset.position,
    salary: person.dataset.salary,
    age: person.dataset.age,
  }));
}

getEmployees(itemOfList);
