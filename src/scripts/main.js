'use strict';

const people = document.querySelectorAll('li');
const peopleList = document.querySelector('ul');
const peopleArray = [];

function getEmployees() {
  for (const person of people) {
    const fullName = person.innerText;
    const position = person.getAttribute('data-position');
    const salary = person.getAttribute('data-salary');
    const age = person.getAttribute('data-age');

    peopleArray.push({
      name: fullName,
      position,
      salary,
      age,
    });
  }
}

getEmployees();

function sortList() {
  const copyPeople = [...people];

  copyPeople.sort((personFirst, personSecond) =>
    parseInt(personSecond.dataset.salary.slice(1))
    - parseInt(personFirst.dataset.salary.slice(1)));

  for (const person of copyPeople) {
    peopleList.append(person);
  }
}

sortList();
