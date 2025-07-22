'use strict';

const employers = [...document.body.querySelector('ul').children];

function sortList(employees) {
  const list = getEmployees(employees);

  list.sort((a, b) => {
    return convertSalary(b.salary) - convertSalary(a.salary);
  });

  const listContainer = document.querySelector('ul');

  listContainer.innerHTML = '';

  list.forEach((item) => {
    listContainer.insertAdjacentHTML(
      'beforeend',
      `<li data-position="${item.position}" data-salary="${item.salary}" data-age="${item.age}">${item.name}</li>`,
    );
  });
}

function convertSalary(salary) {
  return parseFloat(salary.replace(/[$,]/g, ''));
}

function getEmployees(list) {
  return list.map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: item.dataset.age,
  }));
}

sortList(employers);
