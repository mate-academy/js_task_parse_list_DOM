'use strict';

// write code here
const employees = document.querySelectorAll('li');
let arrayOfEmployees = getEmployees(employees);

function getEmployees(input) {
  const result = [];

  [...input].map(item => {
    const cell = {};

    cell.name = item.innerText;
    cell.position = item.dataset.position;
    cell.salary = salaryToNumber(item.dataset.salary);
    cell.age = item.dataset.age;
    result.push(cell);
  });

  return result;
}

function salaryToNumber(salary) {
  let array = salary.split('$');

  array = array[1].split(',').join('');

  return +array;
}

const listElement = document.querySelector('body');

function sortList(array) {
  const newArray = [...array];

  newArray.sort((a, b) => b.salary - a.salary);

  listElement.innerHTML = `
  <h1>List of employees</h1>
    <ul>
      ${newArray.map(item => `
        <li
          data-position=${item.position}
          data-salary=${item.salary}
          data-age=${item.age}
        >
          ${item.name}
        </li>`).join('')}
    </ul>`;
}

sortList(arrayOfEmployees);
