'use strict';

let list = document.querySelectorAll('li');

function sortList(someList) {
  list = [...someList].sort((person1, person2) =>
    +person2.dataset.salary.slice(1).split(',').join('')
      - +person1.dataset.salary.slice(1).split(',').join(''));

  document.querySelector('ul').append(...list);
}

function getEmployees(someList) {
  return [...someList].map(person => {
    return {
      name: person.innerText,
      ...person.dataset,
    };
  });
}

sortList(list);

getEmployees(list);
