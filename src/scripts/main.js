'use strict';

const list = document.querySelector('ul');
const items = list.querySelectorAll('li');
const employeesArr = Array.from(items);

function sortList(arr) {
  arr.sort(
    (a, b) =>
      +b.getAttribute('data-salary').replace(/[$,]/g, '') -
      +a.getAttribute('data-salary').replace(/[$,]/g, ''),
  );

  list.innerHTML = '';
  arr.forEach((item) => list.appendChild(item));
}

function getEmployees(arr) {
  return arr.map((employee) => ({
    name: employee.innerText,
    position: employee.getAttribute('data-position'),
    salary: employee.getAttribute('data-salary'),
    age: employee.getAttribute('data-age'),
  }));
}

sortList(employeesArr);
getEmployees(employeesArr);
