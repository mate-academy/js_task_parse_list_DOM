'use strict';

const collection = document.querySelectorAll('li');

function sortList(list) {
  const set = Array.from(list);

  for (let i = 0; i < set.length; i++) {
    for (let j = 0; j < set.length - i - 1; j++) {
      const salaryA = parseInt(
        set[j].dataset.salary.slice(1).split(',').join(''),
      );
      const salaryB = parseInt(
        set[j + 1].dataset.salary.slice(1).split(',').join(''),
      );

      if (salaryA < salaryB) {
        const temp = set[j];

        set[j] = set[j + 1];
        set[j + 1] = temp;
      }
    }
  }

  return set;
}

function getEmployees(list) {
  const sortedList = sortList(list);

  const employeesArr = [];

  for (const human of sortedList) {
    const tempArr = {};

    tempArr.name = human.innerText;
    tempArr.position = human.dataset.position;
    tempArr.salary = human.dataset.salary;
    tempArr.age = human.dataset.age;
    employeesArr.push(tempArr);
  }

  const ul = document.querySelector('ul');

  ul.innerHTML = '';

  for (const li of sortedList) {
    ul.appendChild(li);
  }

  return employeesArr;
}

getEmployees(collection);
