'use strict';

// write code here
const list = [...document.querySelectorAll('li')];
const ul = document.querySelector('ul');

const sortList = (arr) => {
  arr.sort((a, b) => b.salary - a.salary);
  ul.innerHTML = '';

  for (const el of arr) {
    const li = document.createElement('li');

    li.innerHTML = `${el.name}`;
    ul.append(li);
  }
};

const getEmployees = (list) => {
  const people = [];

  for (const el of list) {
    const { position, salary, age } = el.dataset;
    const employee = {
      name: el.innerText,
      position,
      salary: +salary.slice(1).split(',').join(''),
      age,
    };

    people.push(employee);
  }

  return people;
};

sortList(getEmployees(list));
