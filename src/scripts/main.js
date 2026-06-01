'use strict';

// write code here
const listNode = document.querySelector('ul');

function sortList(list) {
  const items = [...list.querySelectorAll('li')];

  items.sort((a, b) => {
    return parseSalary(a) - parseSalary(b);
  });

  list.append(...items);
}

function getEmployees(list) {
  const items = [...list.querySelectorAll('li')];

  const persons = items.map((item) => {
    const person = {
      name: item.textContent.trim(),
      salary: parseSalary(item),
      age: +item.dataset.age,
      position: item.dataset.position,
    };

    return person;
  });

  return persons;
}

function parseSalary(element) {
  return Number(element.dataset.salary.replace(/[$,]/g, ''));
}

sortList(listNode);
getEmployees(listNode);
