'use strict';

const list = document.querySelector('ul');

sortList(list);

function sortList(listElem) {
  const items = listElem.children;

  for (let i = 0; i < items.length; i++) {
    const firstSalary = items[i].getAttribute('data-salary');
    let maxItem = items[i];
    let maxSalary = parseSalary(firstSalary);

    for (let x = i + 1; x < items.length; x++) {
      if (maxSalary < parseSalary(items[x].getAttribute('data-salary'))) {
        maxSalary = parseSalary(items[x].getAttribute('data-salary'));
        maxItem = items[x];
      }
    }

    items[i].before(maxItem);
  }
}

getEmployees(list);

function getEmployees(listElem) {
  const items = listElem.children;
  const result = [];

  for (const elem of items) {
    const newObj = {
      position: elem.getAttribute('data-position'),
      salary: parseSalary(elem.getAttribute('data-salary')),
      age: elem.getAttribute('data-age'),
      name: elem.textContent,
    };

    result.push(newObj);
  }

  return result;
}

function parseSalary(elements) {
  let result = '';

  for (const elem of elements) {
    if (!Number.isNaN(Number(elem))) {
      result += elem;
    }
  }

  return Number(result);
}
// write code here
