'use strict';

function convertSalary(salary) {
  return +salary.replaceAll(/\D/g, '');
}

function sortList(list) {
  const sortedList = list.toSorted(
    (a, b) => convertSalary(b.dataset.salary) - convertSalary(a.dataset.salary),
  );

  document.querySelector('ul').append(...sortedList);
}

function getEmployees(list) {
  return list.map((e) => ({
    name: e.textContent.trim(),
    position: e.dataset.position,
    salary: convertSalary(e.dataset.salary),
    age: +e.dataset.age,
  }));
}

const listOfEmployees = [...document.querySelectorAll('li')];

sortList(listOfEmployees);
getEmployees(listOfEmployees);
