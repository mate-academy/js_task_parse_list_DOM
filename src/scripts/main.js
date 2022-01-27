'use strict';

const list = document.querySelectorAll('li');
const ul = document.querySelector('ul');

function sortList() {
  const newList = [...list].sort((a, b) =>
    b.dataset.salary.replace(/[^\d]/g, '')
    - a.dataset.salary.replace(/[^\d]/g, ''));

  newList.forEach(x => ul.append(x));

  return newList;
};

function getEmployees() {
  const callback = (prev, person) => {
    return [
      ...prev,
      {
        name: person.innerText,
        position: person.dataset.position,
        salary: person.dataset.salary,
        age: person.dataset.age,
      }];
  };

  return sortList(list).reduce(callback, []);
};

sortList(list);
getEmployees(list);
