'use strict';

const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

function sortList(listProporties) {
  return [...listItems].sort((a, b) =>
    changingSignes(b.dataset.salary) - changingSignes(a.dataset.salary));
};

const sortedList = sortList(listItems);

function changingSignes(string) {
  return +string.replace(',', '').replace('$', '');
};

list.innerHTML
= sortedList.map(employee => `
  <li
    data-position = ${employee.dataset.position}
    data-salary = ${employee.dataset.salary}
    data-age = ${employee.dataset.age}
  >
  ${employee.innerText}
  </li>`).join('');

function getEmployees(listProperties) {
  return [...listProperties].map(employee => {
    return {
      ...employee,
      name: employee.innerText.replace('\n', '').trim(),
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
    };
  });
};

getEmployees(sortedList);
