'use strict';

const nodesList = document.querySelectorAll('[data-salary]');

function prepareNumber(string) {
  return +string
    .slice(1)
    .split(',')
    .join('');
}

function sortList(list) {
  const listArray = Array.from(list);

  listArray.sort((a, b) => (
    prepareNumber(b.dataset.salary) - prepareNumber(a.dataset.salary)
  ));

  listArray.forEach(node => document.querySelector('ul').append(node));
}

function getEmployees(list) {
  const listArray = Array.from(list);

  return listArray.map(node => {
    const fullName = node.innerText;
    const { position, salary, age } = node.dataset;

    return {
      fullName,
      position,
      salary,
      age,
    };
  });
}

sortList(nodesList);
getEmployees(nodesList);
