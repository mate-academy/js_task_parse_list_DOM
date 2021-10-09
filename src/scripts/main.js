'use strict';

const element = document.querySelector('ul');

const sortedList = (list) => {
  const elChildren = [...list.children];

  const sortedElChild = elChildren.sort((x, y) => {
    const n1 = +x.dataset.salary.replace(/[$,]/g, '');
    const n2 = +y.dataset.salary.replace(/[$,]/g, '');

    return n2 - n1;
  });

  list.innerHTML = '';

  sortedElChild.forEach(el => list.appendChild(el));
};

const getEmployees = (list) => {
  const employees = [...element.children];
  const obj = {};
  let count = 0;

  for (const person of employees) {
    const human = {};

    human.name = person.innerText;
    human.position = person.dataset.position;
    human.salary = person.dataset.salary;
    human.age = person.dataset.age;

    obj[count] = human;
    count++;
  }

  return obj;
};

sortedList(element);
getEmployees(element);
