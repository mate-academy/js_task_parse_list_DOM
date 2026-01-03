'use strict';

// write code here
const ul = document.querySelector('ul');

function sortList(lists) {
  const li = [...lists.querySelectorAll('li')];

  li.sort((a, b) => {
    const A = getSalaryNumber(a.dataset.salary);
    const B = getSalaryNumber(b.dataset.salary);

    return B - A;
  });

  li.forEach((el) => lists.append(el));
}

function getSalaryNumber(salary) {
  return Number(salary.slice(1).split(',').join(''));
}

function getEmployees(list) {
  const li = [...list.querySelectorAll('li')];

  return li.map((el) => ({
    name: el.textContent.trim(),
    position: el.dataset.position,
    salary: Number(el.dataset.salary),
    age: Number(el.dataset.age),
  }));
}

sortList(ul);
getEmployees(ul);
