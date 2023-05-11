'use strict';

const listUl = document.querySelector('ul');
const collectionOfListEmployees = document.querySelectorAll('li');

function sortList(list) {
  const sortCollection = [...list].sort((a, b) =>
    +(b.dataset.salary.replace('$', '').replace(',', ''))
    - +(a.dataset.salary.replace('$', '').replace(',', '')));

  for (const li of sortCollection) {
    listUl.append(li);
  }
}

function getEmployees(list) {
  return [...list].map(employee => {
    employee.dataset.name = employee.innerText;
  });
}

sortList(collectionOfListEmployees);
getEmployees(collectionOfListEmployees);
