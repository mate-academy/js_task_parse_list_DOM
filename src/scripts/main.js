'use strict';

const list = document.querySelector('ul');
const listItems = document.querySelectorAll('li');

function convertsSalary(string) {
  return +string.slice(1).replace(',', '');
}

function sortList(item) {
  const salaryList = [...item].sort((a, b) =>
    convertsSalary(b.dataset.salary)
 - convertsSalary(a.dataset.salary));

  list.append(...salaryList);
}

function getEmployees(people) {
  return [...people].map(person => ({
    name: person.innerText,
    position: person.dataset.position,
    salary: person.dataset.salary,
    age: person.dataset.age,
  }));
}

sortList(listItems);
getEmployees(listItems);
