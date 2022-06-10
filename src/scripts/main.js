'use strict';

const peopleList = document.querySelector('ul');
const peopleArr = [...peopleList.children];

function sortList(list) {
  const humanSalary = salary =>
    +salary.dataset.salary.split('$').join('').split(',').join('');

  list.sort((a, b) => {
    return humanSalary(b) - humanSalary(a);
  });

  peopleList.append(...list);
}

function getEmployees(list) {
  const employeesArray = list.map(result => ({
    name: result.outerText,
    position: result.dataset.position,
    salary: result.dataset.salary,
    age: result.dataset.age,
  }));

  return employeesArray;
}

sortList(peopleArr);
getEmployees(peopleArr);
