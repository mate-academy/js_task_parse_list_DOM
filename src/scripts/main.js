'use strict';

// write code here
const list = document.querySelector('ul');

function getSalary(salary) {
  return Number(salary.replace('$', '').replace(/,/g, ''));
}

function sortList(soringList) {
  const people = [...soringList.children];

  people.sort((a, b) => {
    return getSalary(b.dataset.salary) - getSalary(a.dataset.salary);
  });

  people.forEach((person) => {
    list.append(person);
  });
}

sortList(list);
