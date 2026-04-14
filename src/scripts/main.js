'use strict';

const users = document.querySelectorAll('[data-salary]');
const listContainer = document.querySelector('ul');

function sortList(list) {
  return [...list].sort(
    (a, b) =>
      Number(b.dataset.salary.replace(/[$,]/g, '')) -
      Number(a.dataset.salary.replace(/[$,]/g, '')),
  );
}

const sortUsers = sortList(users);

listContainer.prepend(...sortUsers);

function getEmployees(list) {
  return list.map((item) => {
    return {
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    };
  });
}

getEmployees(sortUsers);
