'use strict';

const people = document.querySelectorAll('li');
const peopleList = [...people];

function sortList(list) {
  const sortedList = list.sort((a, b) =>
    Number(b.dataset.salary.replace(/[^\d]/g, ''))
    - Number(a.dataset.salary.replace(/[^\d]/g, '')));

  document.querySelector('ul').append(...sortedList);
};

function getEmployess(list) {
  return list.map(item => ({
    name: item.innerText,
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: item.dataset.age,
  }));
}

sortList(peopleList);
getEmployess(peopleList);
