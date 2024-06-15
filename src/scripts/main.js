'use strict';

// write code here
const list = [...document.getElementsByTagName('li')];
const ul = document.getElementsByTagName('ul')[0];

function sortList() {
  list.sort((a, b) => {
    const A = a.dataset.salary.slice(1).replaceAll(',', '');
    const B = b.dataset.salary.slice(1).replaceAll(',', '');

    return parseInt(B) - parseInt(A);
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
    const Name = person.textContent;
    const position = person.dataset.position;
    const salary = person.dataset.salary;
    const age = person.dataset.age;

    return {
      name: Name,
      position,
      salary,
      age,
    };
  });
}
getEmployees(list);
