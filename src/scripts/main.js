'use strict';

const parseList = document.querySelector('ul');

const numSalary = (salary) => +(salary.slice(1).split(',').join(''));

function sortList(list) {
  const items = Array.from(list.children);

  items.sort((a, b) => {
    const salaryA = numSalary(a.dataset.salary);
    const salaryB = numSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  list.append(...items);
}

function getEmployees(list) {
  return [...list.children].map(item => ({
    name: item.innerText, ...item.dataset,
  }));
}

sortList(parseList);
getEmployees(parseList);
