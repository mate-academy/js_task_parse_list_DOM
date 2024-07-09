'use strict';

const ul = document.querySelector('ul');
const allPersons = [...ul.children];

function sortList() {
  allPersons.sort((first, second) => {
    const getNormalized = (item) => {
      return +item.dataset.salary.slice(1).split(',').join('');
    };

    return getNormalized(second) - getNormalized(first);
  });

  for (const key of allPersons) {
    ul.append(key);
  }
}

const getEmployees = (list) =>
  [...ul.children].map((employee) => ({
    name: employee.innerText,
    position: employee.dataset.position,
    age: employee.dataset.age,
    salary: employee.dataset.salary,
  }));

sortList();
getEmployees();
