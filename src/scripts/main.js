'use strict';

// getting an array of list items
const list = [...document.getElementsByTagName('li')];

// function for sorting values by a descending order (according to a salary)
function sortList() {
  // sorting by a descending order
  list.sort((a, b) => parseInt(b.dataset.salary) - parseInt(a.dataset.salary));

  const ul = document.getElementsByTagName('ul')[0];

  // deleting all list items that were inside ul before
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }

  // adding sorted list items inside ul
  list.forEach((li) => {
    ul.appendChild(li);
  });
}
sortList(list);

// function to get information about employees
function getEmployees() {
  list.map((person) => {
    const initials = person.textContent; // 'initials' bc 'name' is a global val
    const position = person.dataset.position;
    const salary = person.dataset.salary;
    const age = person.dataset.age;

    return {
      name: initials,
      position,
      salary,
      age,
    };
  });
}
getEmployees(list);
