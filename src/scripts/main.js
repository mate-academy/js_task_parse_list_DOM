'use strict';

function normalSalary(value) {
  return +value.replace(/[^0-9]/g, '');
}

const employList = [...document.querySelectorAll('li')];

function sortList(list) {
  const sortedList = list.sort((employ1, employ2) =>
    normalSalary(employ2.getAttribute('data-salary'))
    - normalSalary(employ1.getAttribute('data-salary')));

  sortedList.forEach(elem =>
    document.querySelector('ul').append(elem));
}

function getEmployees(list) {
  return list.map(elem => ({
    name: elem.innerText,
    position: elem.getAttribute('data-position'),
    salary: elem.getAttribute('data-salary'),
    age: elem.getAttribute('data-age'),
  }));
}

sortList(employList);
getEmployees(employList);
