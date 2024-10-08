'use strict';

const listItems = document.querySelectorAll('li');

const listArray = Array.from(listItems).map((el) => {
  return {
    name: el.textContent.trim(),
    position: el.getAttribute('data-position'),
    salary: el.getAttribute('data-salary'),
    age: el.getAttribute('data-age'),
  };
});

listArray.sort((a, b) => {
  const salaryA = parseInt(a.salary.replace(/[$,]/g, ''));
  const salaryB = parseInt(b.salary.replace(/[$,]/g, ''));

  return salaryB - salaryA;
});

const getEmployees = (sortList) => {
  const arr = [];

  for (const ch of sortList) {
    arr.push(ch.name);
  }

  return arr;
};

getEmployees(listArray);
