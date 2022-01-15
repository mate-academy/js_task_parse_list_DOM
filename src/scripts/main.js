'use strict';

const list = document.querySelector('ul');
const itemsOfList = document.querySelectorAll('li');

const convertToNumber = (str) => {
  return Number(str.slice(1).split(',').join(''));
};

const sortList = (people) => {
  const salaries = [];

  for (const person of people) {
    salaries.push(person.dataset.salary);
  }

  salaries.sort((salaryA, salaryB) => {
    const s1 = convertToNumber(salaryA);
    const s2 = convertToNumber(salaryB);

    return s2 - s1;
  });

  for (const salary of salaries) {
    for (const item of itemsOfList) {
      if (item.dataset.salary === salary) {
        list.append(item);
      }
    }
  }
};

const getEmployees = (someList) => {
  const arr = [];

  for (const item of someList) {
    arr.push({
      name: item.textContent,
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    });
  }

  return arr;
};

sortList(itemsOfList);
getEmployees(itemsOfList);
