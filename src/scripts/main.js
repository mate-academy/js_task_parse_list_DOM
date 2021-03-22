'use strict';

const allEmployees = document.querySelectorAll('li');
const employeesList = document.querySelector('ul');

function convertSalary(value) {
  return value.replace(/\D/g, '');
}

function sortList(list, converter) {
  const sortedList = [...list].sort((emploerA, emploerB) =>
    converter(emploerB.dataset.salary) - converter(emploerA.dataset.salary));

  employeesList.append(...sortedList);
}

function getEmployees(list) {
  return [...list].map(person =>
    ({
      name: person.innerText,
      position: person.dataset.position,
      salary: person.dataset.salary,
      age: person.dataset.age,
    })
  );
}

getEmployees(allEmployees);
sortList(allEmployees, convertSalary);
