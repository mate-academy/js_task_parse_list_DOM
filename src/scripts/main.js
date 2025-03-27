'use strict';

const list = [...document.getElementsByTagName('li')];
const ul = document.getElementsByTagName('ul')[0];

function sortList() {
  list.sort((a, b) => {
    const filteredA = a.dataset.salary.slice(1).replaceAll(',', '');
    const filteredB = b.dataset.salary.slice(1).replaceAll(',', '');

    return parseInt(filteredB) - parseInt(filteredA);
  });

  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }

  list.forEach((child) => {
    ul.appendChild(child);
  });
}
sortList(list);

function getEmployees() {
  list.map((person) => {
    const inititals = person.textContent;
    const position = person.dataset.position;
    const salary = person.dataset.salary;
    const age = person.dataset.age;

    return {
      name: inititals,
      position,
      salary,
      age,
    };
  });
}
getEmployees(list);
