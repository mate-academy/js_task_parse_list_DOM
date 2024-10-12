'use strict';

const listItems = [...document.querySelectorAll('li')];
const employeesList = document.querySelector('ul');

function convertToNumber(string) {
  const salaryNumber = string.replace('$', '').replace(',', '');

  return +salaryNumber;
}

function sortBySalary(items) {
  items.sort(
    (a, b) =>
      convertToNumber(b.dataset.salary) - convertToNumber(a.dataset.salary),
  );
}

function updateList(list, items) {
  list.innerHTML = '';
  items.forEach((item) => list.appendChild(item));
}

// function getEmployees(items) {
//   return items.map((item) => ({
//     name: item.textContent.trim(),
//     position: item.dataset.position,
//     salary: item.dataset.salary,
//     age: item.dataset.age,
//   }));
// }

sortBySalary(listItems);
updateList(employeesList, listItems);
// getEmployees(listItems);

// eslint-disable-next-line no-unused-vars
const newEmployeesList = updateList;

// eslint-disable-next-line no-unused-vars
// const newEmployeesList = getEmployees(listItems);
