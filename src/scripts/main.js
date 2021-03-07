'use strict';

const employeesList = document.querySelector('ul');
const employees = [...document.querySelectorAll('li')];

const stringToNumber = (string) =>
  Number(string.replace(/[^0-9]/g, ''));

function sortList(list) {
  return list.sort((personA, personB) =>
    stringToNumber(personB.dataset.salary)
    - stringToNumber(personA.dataset.salary)
  );
};

function getEmployees(list) {
  return list.map(element => ({
    name: element.innerText,
    position: element.dataset.position,
    salary: element.dataset.salary,
    age: element.dataset.age,
  }));
}

sortList(employees).forEach(element => {
  employeesList.append(element);
});

sortList(employees);
getEmployees(employees);
