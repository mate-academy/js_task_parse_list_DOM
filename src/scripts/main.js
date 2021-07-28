'use strict';

const objectList = document.querySelectorAll('li');

function sortList(list) {
  const ulAdd = document.querySelector('ul');
  const sortedList = [...list].sort((a, b) => (
    +(b.dataset.salary.slice(1).replace(/,/g, ''))
    - +(a.dataset.salary.slice(1).replace(/,/g, ''))
  ));

  for (const i of sortedList) {
    ulAdd.append(i);
  }
};

function getEmployees(list) {
  return [...list].map(a => {
    return {
      position: a.dataset.position,
      salary: a.dataset.salary,
      age: a.dataset.age,
    };
  });
}

sortList(objectList);
getEmployees(objectList);
