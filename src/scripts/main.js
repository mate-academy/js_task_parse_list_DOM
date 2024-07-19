'use strict';

const employee = document.querySelectorAll('li');
const allEmployees = document.querySelector('ul');

function getEmployees(list) {
  return Array.from(list).map((li) => ({
    name: li.textContent.trim(),
    position: li.getAttribute('data-position'),
    salary: parseFloat(
      li.getAttribute('data-salary').replaceAll('$', '').replaceAll(',', ''),
    ),
    age: parseInt(li.getAttribute('data-age')),
  }));
}

const arrayEmployees = getEmployees(employee);

function sortList(employees) {
  return employees.sort((a, b) => b.salary - a.salary);
}

const sorted = sortList(arrayEmployees);

function newSortedHtml(sortedEmployees) {
  allEmployees.innerHTML = '';

  sortedEmployees.forEach((person) => {
    const li = document.createElement('li');

    li.textContent = person.name;
    li.setAttribute('data-position', person.position);
    li.setAttribute('data-salary', person.salary);
    li.setAttribute('data-age', person.age);

    allEmployees.appendChild(li);
  });
}

newSortedHtml(sorted);

console.log(getEmployees(employee));
console.log(sorted);
