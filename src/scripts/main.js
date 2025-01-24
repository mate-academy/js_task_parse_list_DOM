'use strict';

const ulElement = document.querySelector('ul');
const employees = Array.from(ulElement.children);

function sortList(ulElem, employeesList) {
  function parseStringNumber(stringNum) {
    const number = parseInt(stringNum.replace(/[$,]/g, ''));

    return number;
  }

  ulElem.innerHTML = '';

  employeesList.sort((a, b) => {
    const parsedA = parseStringNumber(a.dataset.salary);
    const parsedB = parseStringNumber(b.dataset.salary);

    return parsedB - parsedA;
  });

  employeesList.forEach((element) => {
    ulElem.appendChild(element);
  });
}

function getEmployees(list) {
  return list.map((employeeNode) => {
    const personData = employeeNode.dataset;
    const person = Object.assign({}, personData);

    person.name = employeeNode.textContent;

    return person;
  });
}

getEmployees(employees);
sortList(ulElement, employees);
