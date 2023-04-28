/* eslint-disable max-len */
'use strict';

const list = document.querySelector('ul');

const helperFn = {
  sort(prev, next) {
    return helperFn.convertToNumber(next.dataset.salary) - helperFn.convertToNumber(prev.dataset.salary);
  },
  convertToNumber(number) {
    return +number.replace('$', '').replace(',', '.');
  },
  appendToList(item) {
    list.innerHTML += `
      <li
        data-position="${item.dataset.position}"
        data-salary="${item.dataset.salary}"
        data-age="${item.dataset.age}"
      >
      ${item.innerText}
      </li>
    `;
  },
};

function sortList(array) {
  const sortedList = [...array.querySelectorAll('li')].sort(helperFn.sort);

  // clear list
  list.innerHTML = '';
  // add items
  sortedList.forEach(item => helperFn.appendToList(item));
}

function getEmployees(array) {
  const employeesArr = [];

  [...array.querySelectorAll('li')].forEach(employee => {
    employeesArr.push({
      name: employee.innerText,
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
    });
  });

  return employeesArr;
}

sortList(list);
getEmployees(list);
