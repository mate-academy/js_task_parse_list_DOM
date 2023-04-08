'use strict';

const people = document.querySelectorAll('li');
const list = document.querySelector('ul');

function change(salary) {
  return +salary.slice(1).replaceAll(',', '');
};

const sortList = listToSort => {
  const currentList = Array.prototype.slice.call(listToSort, 0);

  currentList
    .sort((a, b) => change(b.dataset.salary) - change(a.dataset.salary))
    .map(x => list.append(x));

  return currentList;
};

function getEmployees(listToObjectArray) {
  const currentList = Array.prototype.slice.call(listToObjectArray, 0);

  for (let i = 0; i < currentList.length; i++) {
    const newPerson = {
      name: currentList[i].textContent
        .replaceAll('\n', '')
        .trim(),
      position: currentList[i].dataset.position,
      salary: currentList[i].dataset.salary,
      age: currentList[i].dataset.age,
    };

    currentList[i] = newPerson;
  }

  return currentList;
}

sortList(people);
getEmployees(people);
