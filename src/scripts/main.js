'use strict';

const listOfEmployees = document.body.querySelector('ul');
const listOfEmployeesChildrens = [...listOfEmployees.children];

listOfEmployees.prepend(...sortList(listOfEmployeesChildrens));
getEmployees(listOfEmployeesChildrens);

function sortList(array) {
  const parser = (string) => {
    return parseInt(string.replaceAll('$', '').replaceAll(',', ''));
  };

  return array.sort((value1, value2) => {
    return parser(value2.dataset.salary) - parser(value1.dataset.salary);
  });
}

function getEmployees(array) {
  return array.map((value) => {
    const person = {};

    person.name = value.textContent.trim();
    person.position = value.dataset.position;
    person.salary = value.dataset.salary;
    person.age = value.dataset.age;

    return person;
  });
}
