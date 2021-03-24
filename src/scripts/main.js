'use strict';

function sortList(list) {
  const listCopy = [...list];

  listCopy.sort(
    (a, b) => parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary)
  );

  peopleContainer.append(...listCopy);
}

function getEmployees(list) {
  const peopleList = [];

  for (let i = 0; i < list.length; i++) {
    peopleList.push(
      {
        name: list[i].textContent,
        position: list[i].dataset.position,
        salary: list[i].dataset.salary,
        age: list[i].dataset.age,
      }
    );
  }

  return peopleList;
}

function parseSalary(salary) {
  return parseInt(salary.replace(/[,$]/g, ''));
}

const people = document.querySelectorAll('li');
const peopleContainer = document.querySelector('ul');

sortList(people);

getEmployees(people);
