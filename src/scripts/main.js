'use strict';

const findedList = document.querySelectorAll('li');

const convertStr = function(string) {
  return +string.slice(1).split(',').join('');
};

const sortPeople = function(list) {
  return [...list].sort((a, b) =>
    convertStr(b.dataset.sallary) - convertStr(a.dataset.sallary));
};

document.querySelector('ul').append(...sortPeople(findedList));

const getEmployees = function(list) {
  const allList = [...list];

  return allList.map(person => (
    {
      name: person.innerText,
      position: person.dataset.position,
      sallary: person.dataset.age,
    }));
};

getEmployees(findedList);
