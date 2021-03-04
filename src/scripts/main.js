'use strict';

const list = document.querySelector('ul');

const employeesList = [...document.querySelectorAll('li')];

function getFormattedSalary(string) {
  return +string.split('$').join('').split(',').join('');
}

function sortList(listToSort) {
  return listToSort.sort(
    (personA, personB) =>
      getFormattedSalary(personB.dataset.salary)
      - getFormattedSalary(personA.dataset.salary)
  );
}

function getEmployees(listToGet) {
  return listToGet.map(element => {
    return {
      name: element.innerText,
      position: element.dataset.position,
      salary: element.dataset.salary,
      age: element.dataset.age,
    };
  });
}

sortList(employeesList).map(element => list.append(element));

sortList(employeesList);

getEmployees(employeesList);
