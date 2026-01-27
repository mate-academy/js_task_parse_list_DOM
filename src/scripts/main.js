'use strict';

// write code herefunction getEmployees(list) {
function getEmployees(list) {
  return list.map((li) => ({
    name: li.textContent.trim(),
    salary: Number(li.dataset.salary.replace(/[^\d]/g, '')),
    element: li,
  }));
}

function sortList(list) {
  list.sort((a, b) => {
    return (
      Number(b.dataset.salary.replace(/[^\d]/g, '')) -
      Number(a.dataset.salary.replace(/[^\d]/g, ''))
    );
  });
}

const people = [...document.querySelectorAll('li[data-salary]')];

sortList(people);

const employees = getEmployees(people);

const ul = document.querySelector('ul');

employees.forEach((person) => {
  ul.append(person.element);
});
