'use strict';

const peopleList = document.querySelector('ul');

const peopleArr = [...peopleList.children];

function sortList(list) {
  const convert = salary =>
    +salary.dataset.salary.slice(1).split(',').join('');

  list.sort((a, b) => {
    return convert(b) - convert(a);
  });

  peopleList.append(...list);
}

function getEmployees(list) {
  const employeesArr = list.map(elem => ({
    name: elem.innerText,
    position: elem.dataset.position,
    salary: elem.dataset.salary,
    age: elem.dataset.age,
  }));

  return employeesArr;
}

sortList(peopleArr);
getEmployees(peopleArr);
