'use strict';

const ul = document.querySelector('ul');

function sortList(list) {
  const sortedList = [...list.children]
    .sort((a, b) =>
      b.dataset.salary.replace(/[$,]/g, '')
      - a.dataset.salary.replace(/[$,]/g, '')
    );

  list.innerHTML = '';

  for (const item of sortedList) {
    list.append(item);
  }
}

function getEmployees(list) {
  const arr = [...list.children].map(item => ({
    name: item.innerText,
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: item.dataset.age,
  }));

  return arr;
}

sortList(ul);
getEmployees(ul);
