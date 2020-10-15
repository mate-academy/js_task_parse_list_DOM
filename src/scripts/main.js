'use strict';

const listOfEmployee = document.querySelector('ul');
const employee = document.getElementsByTagName('li');
const arrayOfEmployee = [...employee];

function sortList(list) {
  list
    .sort((prev, cur) => (
      convert(cur.dataset.salary) - convert(prev.dataset.salary)
    ))
    .map(person => listOfEmployee.append(person));
}

function convert(string) {
  return string.replace(/\$|,/g, '');
}

function getEmployees(list) {
  list.map(human => {
    return {
      name: human.textContent.trim(),
      position: human.dataset.position,
      salary: human.dataset.salary,
      age: Number(human.dataset.age),
    };
  });
}

getEmployees(arrayOfEmployee);
sortList(arrayOfEmployee);
