'use strict';

const board = document.querySelector('ul');
const people = document.querySelectorAll('li');

function sortList(list) {
  return list.sort(({ salary: prevSalary }, { salary: nextSalary }) => {
    return convertToNumber(nextSalary) - convertToNumber(prevSalary);
  });
}

function getEmployees(list) {
  return [...list].map(person => ({
    name: person.innerText,
    ...person.dataset,
  }));
}

function convertToNumber(stringOfNumber) {
  return +stringOfNumber
    .slice(1)
    .replace(/,/g, '');
}

const peopleMap = getEmployees(people);

sortList(peopleMap);

board.insertAdjacentHTML('afterend', `
  <h1>Sorted employees</h1>
  <ul>
    ${peopleMap.map(({ name, position, salary, age }) => `
      <li
        data-position="${position}"
        data-salary="${salary}"
        data-age="${age}"
      >
        ${name}
      </li>
    `).join('')}
  </ul>
`);
