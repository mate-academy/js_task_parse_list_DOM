'use strict';

const list = document.querySelectorAll('li');

function toNumber(str) {
  return +str.slice(1).replace(',', '');
};

function sortList(items) {
  const itemsArray = [...items].sort((a, b) =>
    toNumber(b.dataset.salary) - toNumber(a.dataset.salary));

  document.querySelector('ul').append(...itemsArray);
}

function getEmployees(items) {
  return [...items].map(person => {
    return {
      name: person.innerText,
      position: person.dataset.position,
      salary: person.dataset.salary,
      age: person.dataset.age,
    };
  });
}

sortList(list);
getEmployees(list);
