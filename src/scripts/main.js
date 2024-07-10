'use strict';

// Find and get a list from the document.
const listOfPersons = [...document.querySelectorAll('li')];
const listOfEmployees = document.querySelector('ul');

function convertSalary(el) {
  const salaryStr = el.getAttribute('data-salary');
  const salaryNum = Number(salaryStr.slice(1).split(',').join(''));

  return salaryNum;
}

function sortList(list, elements) {
  elements.innerHTML = '';

  return list
    .sort((a, b) => convertSalary(b) - convertSalary(a))
    .forEach((item) => elements.appendChild(item));
}

function getEmployees(list) {
  return list.map((el) => {
    const personName = el.innerText;
    const personPosition = el.getAttribute('data-position');
    const personSalary = el.getAttribute('data-salary');
    const personAge = el.getAttribute('data-age');

    return {
      name: personName,
      position: personPosition,
      salary: personSalary,
      age: personAge,
    };
  });
}

getEmployees(listOfPersons);
sortList(listOfPersons, listOfEmployees);
