'use strict';

const list = document.querySelector('ul');

// eslint-disable-next-line no-shadow
function sortList(list) {
  const items = Array.from(list.querySelectorAll('li'));

  items.sort((a, b) => {
    const salaryA = convertToNumber(a.dataset.salary);
    const salaryB = convertToNumber(b.dataset.salary);

    return salaryB - salaryA;
  });

  return items;
}

function convertToNumber(string) {
  return Number(string.replace(/[$,]/g, ''));
}

// eslint-disable-next-line no-shadow
function getEmployees(list) {
  const employees = [];

  list.forEach((element) => {
    employees.push({
      name: element.innerText,
      position: element.dataset.position,
      salary: element.dataset.salary,
      age: element.dataset.age,
    });
  });

  return employees;
}

const listSort = sortList(list);

list.replaceChildren(...listSort);

getEmployees(listSort);
