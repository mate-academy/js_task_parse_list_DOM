'use strict';

const elementUl = document.querySelector('ul');
const list = document.querySelectorAll('li');

function sortList(item) {
  const sortedList = [...item].sort((a, b) =>
    +b.dataset.salary.split('$').join('').split(',').join('')
 - +a.dataset.salary.split('$').join('').split(',').join(''));

  elementUl.append(...sortedList);
}

function sortEmployees(empList) {
  return [...empList].map(person => ({
    name: person.innerText,
    ...person.dataset,
  }));
}

sortList(list);
sortEmployees(list);
