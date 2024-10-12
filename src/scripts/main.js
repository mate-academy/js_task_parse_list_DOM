'use strict';

const listItems = [...document.querySelectorAll('li')];
const employeesList = document.querySelector('ul');

function convertToNumber(string) {
  const salaryString = string;
  const salaryNumber = salaryString.replace('$', '').replace(',', '');

  return +salaryNumber;
}

function sortBySalary(items, list) {
  items.sort(
    (a, b) =>
      convertToNumber(b.dataset.salary) - convertToNumber(a.dataset.salary),
  );

  list.innerHTML = '';
  items.forEach((item) => list.appendChild(item));
}

function getEmployees(items) {
  return items.map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: item.dataset.age,
  }));
}

sortBySalary(listItems, employeesList);

getEmployees(listItems);
