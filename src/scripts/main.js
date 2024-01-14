'use strict';

const fullList = document.querySelector('ul');
const elementOfFullList = document.querySelectorAll('li');

const gettingEmployees
 = (list) => [...list].map((item) => ({
   name: item.textContent,
   postion: item.getAttribute('data-position'),
   salary: item.getAttribute('data-salary'),
   age: item.getAttribute('data-age'),
 }));

const gettingSalaries = (salary) => {
  return +salary.getAttribute('data-salary').replace(/[$,]/g, '');
};

const sortingEmployees = (list) => {
  const sortedList = [...list].sort((x, y) => {
    return gettingSalaries(y) - gettingSalaries(x);
  });

  sortedList.forEach((item) => {
    fullList.append(item);
  });
};

while (fullList.firstChild) {
  fullList.removeChild(fullList.firstChild);
};

gettingEmployees(elementOfFullList);
sortingEmployees(elementOfFullList);
