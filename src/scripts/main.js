'use strict';

const employees = [...document.querySelectorAll('li')];
const ulList = document.querySelector('ul');

function sortList(list) {
  list.sort(
    (a, b) =>
      Number(b.getAttribute('data-salary').replace(/[$,]/g, '')) -
      Number(a.getAttribute('data-salary').replace(/[$,]/g, '')),
  );

  list.forEach((el) => {
    ulList.appendChild(el);
  });
}

function getEmployees(list) {
  return list.map((el) => ({
    name: el.textContent,
    position: el.getAttribute('data-position'),
    salary: Number(el.getAttribute('data-salary').replace(/,/g, '')),
    age: el.getAttribute('data-age'),
  }));
}

sortList(employees);
getEmployees(employees);
