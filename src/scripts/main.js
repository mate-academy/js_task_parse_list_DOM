'use strict';

const getEmployees = (list) => [...list].map(item => ({
  name: item.textContent.trim(),
  position: item.getAttribute('data-position'),
  salary: item.getAttribute('data-salary'),
  age: item.getAttribute('data-age'),
}));

const getSalary = (item) => {
  return +item.getAttribute('data-salary').replace(/[$,]/g, '');
};

const sortList = (list) => [...list].sort(
  (x, y) => getSalary(y) - getSalary(x));

const sortedListItems = sortList(document.querySelectorAll('li'));
const ulElement = document.querySelector('ul');

while (ulElement.firstChild) {
  ulElement.removeChild(ulElement.firstChild);
}

sortedListItems.forEach((item) => {
  ulElement.append(item);
});

getEmployees(document.querySelectorAll('li'));
