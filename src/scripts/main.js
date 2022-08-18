'use strict';

const listItems = document.querySelectorAll('li');
const listUi = document.querySelector('ul');

function sortList(list) {
  function converter(number) {
    return number.slice(1).split(',').join('');
  }

  const sorted = [...list]
    .sort((a, b) => converter(b.dataset.salary) - converter(a.dataset.salary));

  for (const index of sorted) {
    listUi.append(index);
  }
}

function getEmployees(list) {
  return [...list].map(el => ({
    name: el.innerText,
    position: el.dataset.position,
    salary: el.dataset.salary,
    age: el.dataset.age,
  }));
}

sortList(listItems);
getEmployees(listItems);
