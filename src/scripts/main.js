'use strict';

const peopleOfList = document.querySelectorAll('li');

const listString = function(string) {
  return +string.slice(1).split(',').join('');
};

const sortPeople = function(list) {
  return [...list].sort((a, b) =>
    listString(b.dataset.salary) - listString(a.dataset.salary));
};

document.querySelector('ul').append(...sortPeople(peopleOfList));

const getEmployees = function(list) {
  const allList = [...list];

  return allList.map(people => (
    {
      name: people.innerText,
      position: people.dataset.position,
      salary: people.dataset.salary,
      age: people.dataset.age,
    }));
};

getEmployees(peopleOfList);
