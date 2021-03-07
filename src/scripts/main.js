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
  list.map(element => ({
    name: element.innerText.name,
    position: element.innerText.position,
    salary: element.innerText.salary,
    age: element.innerText.age,
  }));
}

sortList(employees).forEach(element => {
  employeesList.append(element);
});

sortList(employees);
getEmployees(employees);
