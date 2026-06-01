'use strict';

// write code here
const listNode = document.querySelector('ul');

function sortList(list) {
  const items = [...list.querySelectorAll('li')];

  items.sort((a, b) => {
    const aSalary = a.dataset.salary.replace(/[$,]/g, '');
    const bSalary = b.dataset.salary.replace(/[$,]/g, '');

    return bSalary - aSalary;
  });

  list.append(...items);
}

function getEmployees(list) {
  const items = [...list.querySelectorAll('li')];

  const persons = items.map((item) => {
    const person = { name: item.textContent.trim() };

    for (const key of Object.keys(item.dataset)) {
      person[key] = item.dataset[key];
    }

    return person;
  });

  return persons;
}

sortList(listNode);
getEmployees(listNode);
