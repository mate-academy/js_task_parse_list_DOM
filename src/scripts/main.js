'use strict';

function sortList(list) {
  const sorted = [...list.children];

  sorted.sort((a, b) => {
    const salaryA = parseInt(a.getAttribute('data-salary').replace(/[$,]/g, ''));
    const salaryB = parseInt(b.getAttribute('data-salary').replace(/[$,]/g, ''));

    return salaryB - salaryA;
  });

  sorted.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  const people = [...list.children];

  people.map((item) => ({
    name: item.dataset.name,
    position: item.dataset.position,
    salary: parseInt(item.dataset.salary),
    age: parseInt(item.dataset.age),
  }));

  return people;
}

const employess = document.querySelector('ul');

sortList(employess);

getEmployees(employess);

