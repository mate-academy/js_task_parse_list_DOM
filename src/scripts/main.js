'use strict';

const ulElement = document.querySelector('ul');

const getNumber = (value) => +value.replace(/[^0-9]/g, '');

function sortList(list) {
  const sortedList = [...list.children].sort(
    (a, b) =>
      getNumber(b.getAttribute('data-salary')) -
      getNumber(a.getAttribute('data-salary')),
  );

  list.innerHTML = '';
  sortedList.forEach((item) => list.appendChild(item));
}

sortList(ulElement);

function getEmployees(list) {
  const sortedList = [...list.children];

  return sortedList.map((el) => ({
    name: el.innerText,
    position: el.getAttribute('data-position'),
    salary: el.getAttribute('data-salary'),
    age: el.getAttribute('data-age'),
  }));
}

getEmployees(ulElement);
