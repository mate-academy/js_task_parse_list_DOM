'use strict';

const list = document.querySelectorAll('li');

const salaryToNumber = (string) => string.match(/\d+/g).join('');

function sortList(elements) {
  const ul = document.querySelector('ul');

  const sortedEmployees = [...elements].sort(
    (a, b) =>
      salaryToNumber(b.getAttribute('data-salary'))
      - salaryToNumber(a.getAttribute('data-salary'))
  );

  sortedEmployees.forEach((x) => ul.appendChild(x));

  return sortedEmployees;
}

sortList(list);

const getEmployees = (elements) =>
  [...elements].map(element => ({
    name: element.innerText,
    position: element.getAttribute('data-position'),
    salary: element.getAttribute('data-salary'),
    age: element.getAttribute('data-age'),
  }));

function curry(firstCallback, secondCallback) {
  return function(...args) {
    return secondCallback(firstCallback(...args));
  };
}

const sortAndGetEmployees = curry(sortList, getEmployees);

sortAndGetEmployees(list);
