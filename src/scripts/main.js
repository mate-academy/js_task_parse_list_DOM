'use strict';

const list = document.querySelectorAll('ul li');

function sortList() {
  const listItems = [...list];

  const numeric = () => {
    for (const item of listItems) {
      item.dataset.salary = Number(
        item.dataset.salary.replace(/[^0-9.-]+/g, ''),
      );
    }
  };

  numeric();

  listItems.sort((a, b) => b.dataset.salary - a.dataset.salary);

  const ul = document.querySelector('ul');

  listItems.forEach((item) => {
    ul.appendChild(item);
  });
}

function getEmployees() {
  const arrayEmployees = [];

  list.forEach((item) => {
    const employee = {
      name: item.textContent,
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    };

    arrayEmployees.push(employee);
  });

  return arrayEmployees;
}

sortList();
getEmployees();
