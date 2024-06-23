'use strict';

// write code here

const persons = [...document.querySelectorAll('[data-salary]')];
const personsList = document.querySelector('[data-salary]').parentElement;

function sortEmployees() {
  const salarys = persons.map((person) => {
    return {
      salary: +person.dataset.salary.replace(/[/$/,]/g, ''),
      person: person,
    };
  });

  salarys.sort((a, b) => b.salary - a.salary);

  const sortingPersons = salarys.map((salary) => salary.person);

  persons.forEach((el) => personsList.removeChild(el));
  sortingPersons.forEach((el) => personsList.appendChild(el));
}

function createObjOfEmployees() {
  const result = [];

  for (let i = 0; i < persons.length; i++) {
    result.push({
      name: persons[i].innerText,
      position: persons[i].dataset.position,
      salary: persons[i].dataset.salary,
      age: persons[i].dataset.age,
    });
  }

  return result;
}

sortEmployees();
createObjOfEmployees();
