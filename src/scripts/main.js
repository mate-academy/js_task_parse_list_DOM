'use strict';

const listUl = document.querySelector('ul');
const Listli = [...document.querySelectorAll('li')];

function salary(list) {
  const money = el => {
    return +el.dataset.salary.slice(1).split(',').join('');
  };

  const people = [...list.querySelectorAll('li')];

  people.sort((a, b) => money(b) - money(a));
  list.append(...people);
}

function getEmployees(list) {
  return list.map(el => ({
    name: el.innerText,
    position: el.dataset.position,
    salary: el.dataset.salary,
    age: el.dataset.age,
  }));
}
salary(listUl);
getEmployees(Listli);
