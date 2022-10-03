'use strict';

const ulList = document.querySelector('ul');
const arrListItem = [...document.querySelectorAll('li')];

function getEmployees(employees) {
  const resultArr = [];

  for (const person of employees) {
    const personObj = {};

    personObj.name = person.innerText;

    for (const prop in person.dataset) {
      personObj[prop] = person.dataset[prop];
    }

    resultArr.push(personObj);
  }

  return resultArr;
}

getEmployees(arrListItem);

function sortList(employees, list) {
  const fromStrToValidNum = (num) => {
    return +num.slice(1).split(',').join('');
  };

  const employeesArr = getEmployees(employees)
    .sort(({ salary: a }, { salary: b }) =>
      fromStrToValidNum(b) - fromStrToValidNum(a));

  list.innerHTML = `
    ${employeesArr.map(person => `<li
      data-position="${person.position}"
      data-salary"=${person.salary}"
      data-age="${person.age}"
    >
      ${person.name}
    </li>
    `).join('')}
  `;
}

sortList(arrListItem, ulList);
