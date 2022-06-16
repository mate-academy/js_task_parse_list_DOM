'use strict';

const employeesNames = [...document.querySelectorAll('li')]
  .map(item => item.innerText);
const dataAttributesInfo = [...document.querySelectorAll('li')];
const employeesList = getEmployeesList(employeesNames, dataAttributesInfo);

function getEmployeesList(namesList, info) {
  const arr = [];

  for (let i = 0; i < namesList.length; i++) {
    const names = {};

    names.name = namesList[i];
    arr.push(Object.assign({}, names, info[i].dataset));
  }

  return arr;
}

function sortList(list) {
  const sortedList = list
    .sort((a, b) =>
      +b.salary.replace(/[^0-9]/g, '') - +a.salary.replace(/[^0-9]/g, ''));

  const ul = document.querySelector('ul');

  ul.innerHTML = ``;

  for (let i = 0; i < sortedList.length; i++) {
    ul.innerHTML += `
      <li
        data-position=${sortedList[i].position}
        data-salary=${sortedList[i].salary}
        data-age=${sortedList[i].age}
      >
        ${sortedList[i].name}
      </li>
    `;
  }

  return ul;
}

sortList(employeesList);
