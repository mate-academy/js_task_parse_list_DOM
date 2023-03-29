'use strict';

// write code here
const liElements = document.querySelectorAll('li');

function getSalaryNum(str) {
  return +str.replace(/[$,]/g, '');
}

function sortList(list) {
  const sorted = [...list].sort((a, b) =>
    getSalaryNum(b.dataset.salary) - getSalaryNum(a.dataset.salary));

  document.querySelector('ul').append(...sorted);
}

function getEmployees(list) {
  const employeesArr = [...list].map(elem => {
    return {
      name: elem.innerText.trim(),
      position: elem.dataset.position,
      salary: elem.dataset.salary,
      age: elem.dataset.age,
    };
  });

  return employeesArr;
}

sortList(liElements);
getEmployees(liElements);
