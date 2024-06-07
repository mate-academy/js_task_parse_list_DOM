'use strict';

const list = [...document.getElementsByTagName('li')]; // array of list items
const ul = document.getElementsByTagName('ul')[0]; // ul consists of

function sortList() {
  // sorting all list items in descending order (by salary)
  list.sort((a, b) => {
    // getting rid of $ sign and commas
    const filteredA = a.dataset.salary.slice(1).replaceAll(',', '');
    const filteredB = b.dataset.salary.slice(1).replaceAll(',', '');

    return parseInt(filteredB) - parseInt(filteredA);
  });

  // deleting all list items that were not sorted
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }

  // appending sorted list items
  list.forEach((child) => {
    ul.appendChild(child);
  });
}
sortList(list);

function getEmployees() {
  list.map((person) => {
    const inititals = person.textContent; // name
    const position = person.dataset.position;
    const salary = person.dataset.salary;
    const age = person.dataset.age;

    // object with information about employee
    return {
      name: inititals,
      position,
      salary,
      age,
    };
  });
}
getEmployees(list);
