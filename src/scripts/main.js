'use strict';

const ul = document.querySelector('ul');

function sortList(list) {
  const sortedList = [...list.children].map(item => {
    item.dataset.salary = item.dataset.salary.replace(/[$,]/g, '');

    return item;
  }).sort((a, b) => b.dataset.salary - a.dataset.salary);

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
