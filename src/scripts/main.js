'use strict';

const list = [...document.querySelectorAll('li')];

function sortList(arrey) {
  return arrey.sort((el1, el2) => onNumber(el2) - onNumber(el1));
}

function onNumber(el) {
  const number = el.dataset.salary
    .split('')
    .filter((a) => isFinite(a) === true)
    .join('');

  return +number;
}

const newList = [...list];

sortList(newList);

function getEmployees(employeers) {
  const listObject = [];

  // eslint-disable-next-line no-shadow
  function Object(name, position, salary, age) {
    this.name = name;
    this.position = position;
    this.salary = salary;
    this.age = age;
  }

  for (let i = 0; i < employeers.length; i++) {
    const p = new Object(
      employeers[i].textContent,
      employeers[i].dataset.position,
      employeers[i].dataset.salary,
      employeers[i].dataset.age,
    );

    listObject.push(p);
  }

  for (let i = 0; i < list.length; i++) {
    const li = list[i];

    li.textContent = listObject[i].name;
    li.dataset.salary = listObject[i].salary;
    li.dataset.position = listObject[i].position;
    li.dataset.age = listObject[i].age;
  }

  return listObject;
}

getEmployees(newList);
