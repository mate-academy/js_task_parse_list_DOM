'use strict';

function sortList(list) {
  return [...list].sort((employee1, employee2) => {
    const first = +employee1.dataset.salary.split(',').join('').slice(1);
    const second = +employee2.dataset.salary.split(',').join('').slice(1);

    return second - first;
  });
}

function getEmployees(list) {
  const employeesArr = [];

  for (const item of list) {
    const obj = {
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    };

    employeesArr.push(obj);
  }

  return employeesArr;
}

const employeesList = document.querySelectorAll('li');
const sortedArray = getEmployees(sortList(employeesList));

document.querySelector('ul').innerHTML = `
  ${sortedArray.map(item => `
  <li
    data-position="${item.position}"
    data-salary="${item.salary}"
    data-age="${item.age}"
  >
    ${item.name}
  </li>
  `).join('')}
`;
