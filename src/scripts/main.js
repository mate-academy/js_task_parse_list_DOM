'use strict';

const inputList = document.querySelectorAll('li');

function sortList(list) {
  const outList = [...list].sort((a, b) => {
    return convert(b.dataset.salary) - convert(a.dataset.salary);
  });

  function convert(inputSalary) {
    return +(inputSalary.slice(1, -1).split(',').join(''));
  }

  return outList;
}

const sorted = sortList(inputList);
const newList = document.querySelector('ul');

newList.append(...sorted);

function getEmployees(list) {
  const result = [];

  for (const item of list) {
    result.push({
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    });
  }

  return result;
}

getEmployees(inputList);
