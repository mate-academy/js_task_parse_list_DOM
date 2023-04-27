'use strict';

const ulList = document.querySelector('ul');
const liList = ulList.querySelectorAll('li');

function sortList(list) {
  const persons = [...list].sort((personA, personB) =>
    getSalary(personA) - getSalary(personB));

  const newList = document.createElement('ul');

  for (const person of persons) {
    newList.insertAdjacentHTML('beforeend', `
      <li
        data-position = ${person.dataset.position}
        data-salary=${person.dataset.salary}
        data-age=${person.dataset.age}
      >
        ${person.innerText}
      </li>
  `);
  }

  ulList.replaceWith(newList);
}

function getSalary(person) {
  const salaryString = person.dataset.salary;
  const salary = parseFloat(salaryString.replace(/[$,]/g, ''));

  return salary;
}

function getEmployees(list) {
  const result = [];

  for (let i = 0; i < list.length; i++) {
    const person = list[i];

    const personSummary = {
      name: person.innerText.trim(),
      position: person.dataset.position,
      salary: person.dataset.salary,
      age: person.dataset.age,
    };

    result.push(personSummary);
  }

  return result;
}

sortList(liList);

getEmployees(liList);
