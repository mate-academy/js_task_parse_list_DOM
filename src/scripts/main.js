'use strict';

// write code here

const allLi = document.querySelector('ul');

function format(element) {
  return +element.slice(1).split(',').join('');
}

function sortList(list) {
  const listElements = list.querySelectorAll('li');
  const sortedListElements = [...listElements].sort((a, b) =>
    format(b.dataset.salary) - format(a.dataset.salary));

  // list.innerHTML = '';

  sortedListElements.forEach(function(el) {
    return list.appendChild(el);
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
