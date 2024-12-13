'use strict';

const list = [...document.querySelectorAll('li')];

const sortList = (array) => {
  const newList = array.sort(
    (a, b) =>
      Number(b.getAttribute('data-salary').replace('$', '').replace(',', '')) -
      Number(a.getAttribute('data-salary').replace('$', '').replace(',', '')),
  );

  document.querySelector('ul').innerHTML = '';
  newList.forEach((person) => document.querySelector('ul').appendChild(person));
};

function getEmployees(array) {
  const newArray = array.map((person) => ({
    name: person.textContent,
    position: person.getAttribute('data-position'),
    salary: Number(person.getAttribute('data-salary')),
    age: Number(person.getAttribute('data-age')),
  }));

  return newArray;
}

sortList(list);
getEmployees(list);
