'use strict';

// write code here
const employeesList = document.querySelector('ul');
const employees = [...employeesList.children];

function sortList(array) {
  function getNumber(string) {
    return Number(string.replace(/[^0-9]+/g, ''));
  }

  const sortedEmployees = array.sort((a, b) => {
    const sallaryA = getNumber(a.getAttribute('data-salary'));
    const sallaryB = getNumber(b.getAttribute('data-salary'));

    return sallaryA < sallaryB;
  });

  employeesList.innerHTML = '';
  sortedEmployees.forEach((person) => employeesList.appendChild(person));

  return sortedEmployees;
}

function getEmployees(array) {
  function nameValidator(string) {
    return string
      .split(' ')
      .map((item) => item.replace(/\n+/, ''))
      .filter((item) => item.length)
      .join(' ');
  }

  function getNumber(string) {
    return Number(string.replace(/[^0-9]+/g, ''));
  }

  return array.map((person) => {
    return {
      name: nameValidator(person.textContent),
      position: person.getAttribute('data-position'),
      salary: getNumber(person.getAttribute('data-salary')),
      age: getNumber(person.getAttribute('data-age')),
    };
  });
}

sortList(employees);
getEmployees(employees);
