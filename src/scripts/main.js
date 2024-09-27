'use strict';

const people = document.querySelectorAll('li');
const peopleList = document.querySelector('ul');
const peopleArray = [];

function getEmployees() {
  for (const person of people) {
    const namee = person.innerText;
    const position = person.getAttribute('data-position');
    const salary = person.getAttribute('data-salary');
    const age = person.getAttribute('data-age');

    peopleArray.push({
      name: namee,
      position,
      salary,
      age,
    });
  }
}

getEmployees();

function sortList() {
  const copyP = [...people];

  copyP.sort((personA, personB) =>
    parseInt(personB.dataset.salary.slice(1))
    - parseInt(personA.dataset.salary.slice(1)));

  for (const person of copyP) {
    peopleList.append(person);
  }
}

sortList();
