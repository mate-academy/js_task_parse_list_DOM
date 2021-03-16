'use strict';

const all = [...document.querySelectorAll('li')];

function sortList(list) {
  const arr = [...list].map((person) => person.cloneNode(true));

  arr.forEach(person => (person.dataset.salary
  = person.dataset.salary.replace(/,/g, '').slice(1)));
  arr.sort((a, b) => b.dataset.salary - a.dataset.salary);

  for (let i = 0; i < arr.length; i++) {
    const item = document.querySelector('ul').children[i];

    item.dataset.position = arr[i].dataset.position;
    item.dataset.salary = arr[i].dataset.salary;
    item.dataset.age = arr[i].dataset.age;
    item.textContent = arr[i].textContent;
  }
}

function getEmployees(list) {
  const employes = [];
  const arr = [...list].map((person) => person.cloneNode(true));

  arr.sort((a, b) => b.dataset.salary - a.dataset.salary);

  for (let i = 0; i < arr.length; i++) {
    const person = {};

    person.name = arr[i].textContent;
    person.position = arr[i].dataset.position;
    person.salary = arr[i].dataset.salary;
    person.age = arr[i].dataset.age;

    employes.push(person);
  }

  return employes;
}

sortList(all);
getEmployees(all);
