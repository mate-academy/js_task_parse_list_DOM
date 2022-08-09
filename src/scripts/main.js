'use strict';

// write code here

const allLi = document.querySelectorAll('ul');

function sortList(list) {
  const listElements = Array.prototype.slice(list.children);
  const sortedListElements = listElements.sort((a, b) =>
    Number(b.getAttribute('data-salary').slice(1).replace(/,/g, ''))
    - Number(a.getAttribute('data-salary').slice(1).replace(/,/g, '')));

  // list.innerHTML = '';

  sortedListElements.forEach(function(el) {
    list.appendChild(el);
  });
}

function getEmployees(list) {
  const arrLi = Array.prototype.slice(list.children);

  return arrLi.map(person => {
    return {
      name: person.innerText,
      position: person.getAttribute('data-position'),
      salary: person.getAttribute('data-salary'),
      age: person.getAttribute('data-age'),
    };
  });
}

sortList(allLi);
getEmployees(allLi);
