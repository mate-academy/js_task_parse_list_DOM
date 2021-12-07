'use strict';

const list = document.querySelector('ul');

const sortedList = sortList(list.children);

const result = getEmployees(sortedList);

// eslint-disable-next-line no-console
console.log(result);

for (const item of sortedList) {
  list.append(item);
}

function sortList(people) {
  return [...people].sort((a, b) => {
    return fromStringToNumber(b.dataset.salary)
      - fromStringToNumber(a.dataset.salary);
  });
}

function fromStringToNumber(value) {
  return Number(value.slice(1).split(',').join(''));
}

function getEmployees(data) {
  return [...data].map(elem => {
    return {
      name: elem.innerText,
      position: elem.dataset.position,
      salary: elem.dataset.salary,
      age: elem.dataset.age,
    };
  });
}
