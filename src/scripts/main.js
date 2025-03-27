'use strict';

const employeesContainer = document.querySelector('ul');
const employeesAll = employeesContainer.querySelectorAll('li');

function sortList(list) {
  const arr = [...list].sort((a, b) => {
    return (
      replaceToNumber(b.dataset.salary) - replaceToNumber(a.dataset.salary)
    );
  });

  arr.forEach((node) => {
    employeesContainer.appendChild(node);
  });
}

sortList(employeesAll);

function getEmployees(list) {
  const arr = [...list].map((item) => ({
    name: item.innerHTML.trim(),
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: item.dataset.age,
  }));

  return arr;
}

getEmployees(employeesAll);

function replaceToNumber(string) {
  return Number(string.replace(/[^0-9.,-]/g, '').replace(',', ''));
}
