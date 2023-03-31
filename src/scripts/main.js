'use strict';

const list = document.querySelectorAll('li');

function getNumbers(number) {
  return +number.split('')
    .filter(el => '0123456789'.includes(el))
    .join('');
}

function sortList([...items]) {
  items.sort((a, b) => {
    return getNumbers(b.dataset.salary) - getNumbers(a.dataset.salary);
  });
  document.querySelector('ul').append(...items);
}

function getEmployees([...items]) {
  return items.map(person => ({
    name: person.innerText,
    position: person.dataset.position,
    salary: person.dataset.salary,
    are: person.dataset.age,
  }));
}
sortList(list);
getEmployees(list);
