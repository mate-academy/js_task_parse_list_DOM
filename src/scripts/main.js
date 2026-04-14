'use strict';

const users = document.querySelectorAll('[data-salary]');
const listContainer = document.querySelector('ul');

function convertSalaryToNumber(value) {
  return Number(value.replace(/[$,]/g, ''));
}

function sortList(list) {
  const sortedItems = [...list].sort(
    (a, b) =>
      convertSalaryToNumber(b.dataset.salary) -
      convertSalaryToNumber(a.dataset.salary),
  );

  listContainer.append(...sortedItems);

  return sortedItems;
}

const sortUsers = sortList(users);

function getEmployees(list) {
  return list.map((item) => {
    const firstName = item.textContent.trim().split(' ');

    return {
      name: firstName[0],
      position: item.dataset.position,
      salary: convertSalaryToNumber(item.dataset.salary),
      age: item.dataset.age,
    };
  });
}

getEmployees(sortUsers);
