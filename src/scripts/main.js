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

  for (const node of listArray) {
    document.querySelector('ul').append(node);
  }
}

function getEmployees(list) {
  const listArray = Array.from(list);

  return listArray.reduce((accumulator, current) => {
    const fullName = current.innerText;
    const { position, salary, age } = current.dataset;

    return [...accumulator, {
      fullName,
      position,
      salary,
      age,
    }];
  }, []);
}

sortList(nodesList);
getEmployees(nodesList);
