'use strict';

const listUl = document.querySelector('ul');
const listELems = [...listUl.children];

function sortList(list) {
  list.sort((a, b) => {
    const salaryA = a.dataset.salary.replace(/[$,]/g, '');
    const salaryB = b.dataset.salary.replace(/[$,]/g, '');

    return +salaryB - +salaryA;
  });

  listUl.append(...list);
};

function getEmployees(list) {
  return list.map(person => {
    return {
      name: person.textContent,
      position: person.dataset.position,
      salary: person.dataset.salary,
      age: person.dataset.age,
    };
  });
};

sortList(listELems);
getEmployees(listELems);
