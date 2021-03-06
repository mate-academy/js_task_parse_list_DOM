'use strict';

const listAll = document.querySelector('ul');
const list = document.querySelectorAll('li');

function sortList(arr) {
  const listArr
   = [...arr].sort((a, b) => b.dataset.salary
     .slice(1).split(',').join('') - a.dataset.salary
     .slice(1).split(',').join(''));

  listAll.append(...listArr);

  return listArr;
}

function getEmployees(arr) {
  return [...arr].map(person => ({
    name: person.innerText,
    position: person.dataset.position,
    salary: person.dataset.salary,
    age: person.dataset.age,
  })
  );
}

const sortedList = sortList(list);

getEmployees(sortedList);
