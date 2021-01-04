'use strict';

const listUl = document.querySelector('ul');
const list = document.querySelectorAll('li');

function sortList(arr) {
  const sortedList = [...arr].sort((a, b) =>
    convert(b.dataset.salary) - convert(a.dataset.salary));

  listUl.append(...sortedList);
}

function convert(salary) {
  return salary.replace(/\D/g, '');
}

function getEmployees(arr) {
  return [...arr].map(person =>
    ({
      name: person.innerText.trim(),
      position: person.dataset.position,
      salary: person.dataset.salary,
      age: person.dataset.age,
    })
  );
}

sortList(list);
getEmployees(list);
