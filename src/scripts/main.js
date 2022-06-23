'use strict';

const list = document.querySelector('ul');
const listEmployees = [...list.children];

function formatToNumber(str) {
  return +(str.replace(/,/g, '').slice(1));
}

function sortList(arr) {
  const sortedBySalary = arr.sort((a, b) =>
    formatToNumber(b.dataset.salary) - formatToNumber(a.dataset.salary));

  list.append(...sortedBySalary);
}

function getEmployees(arr) {
  return arr.map(person => {
    return {
      name: person.innerText,
      position: person.dataset.position,
      salary: person.dataset.salary,
      age: person.dataset.age,
    };
  });
}

sortList(listEmployees);
getEmployees(listEmployees);
