'use strict';

// write code here
const list = document.querySelectorAll('li');

function getNumber(str) {
  return parseInt(str.replace(/[$,]/g, ''));
}

function sortList(listItems) {
  const sortedList = Array.from(listItems).sort((a, b) => {
    return (
      getNumber(b.getAttribute('data-salary')) -
      getNumber(a.getAttribute('data-salary'))
    );
  });

  const ul = document.querySelector('ul');

  ul.innerHTML = '';
  sortedList.forEach((li) => ul.appendChild(li));
}

function getEmployees(listItems) {
  return Array.from(listItems).map((li) => ({
    name: li.textContent,
    position: li.getAttribute('data-position'),
    salary: getNumber(li.getAttribute('data-salary')),
    age: parseInt(li.getAttribute('data-age')),
  }));
}

sortList(list);
getEmployees(list);
