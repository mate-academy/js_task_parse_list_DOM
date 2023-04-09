'use strict';

const people = [...document.querySelectorAll('li')];
const list = document.querySelector('ul');

function transfStrToNum(salary) {
  return +salary.slice(1).replaceAll(',', '');
};

const sortList = listToSort => {
  return listToSort
    .sort((firstPerson, secondPerson) =>
      transfStrToNum(secondPerson.dataset.salary)
      - transfStrToNum(firstPerson.dataset.salary))
    .forEach(person => list.append(person));
};

function getEmployees(listToObjectArray) {
  return listToObjectArray.map(employee => {
    return {
      name: employee.innerText,
      ...employee.dataset,
    };
  });
}

sortList(people);
getEmployees(people);
