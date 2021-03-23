'use strict';

function sortList(list) {
  const listCopy = [...list];

  listCopy.sort(
    (a, b) => parseInt(b.dataset.salary.replace(/[,$]/g, ''))
    - parseInt(a.dataset.salary.replace(/[,$]/g, ''))
  );

  peopleListContainer.append(...listCopy);
}

function getEmployees(list) {
  const peopleArray = [];

  for (let i = 0; i < list.length; i++) {
    peopleArray.push(
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

const peopleList = document.querySelectorAll('li');
const peopleListContainer = document.querySelector('ul');

sortList(peopleList);

getEmployees(peopleList);
