'use strict';

const listOfEmployee = document.querySelector('ul');

function parseSalary(salary) {
  return +salary
    .split('')
    .map((current) => {
      if (current === '$' || current === ',') {
        return '';
      }

      return current;
    })
    .join('');
}

function sortList(list) {
  const items = [...list.children];

  items.sort(
    (a, b) => parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary),
  );

  items.forEach((item) => {
    list.appendChild(item);
  });
}

function getEmployees(list) {
  return [...list.children].map((item) => ({
    name: item.textContent,
    position: item.dataset.position,
    salary: parseSalary(item.dataset.salary),
    age: +item.dataset.age,
  }));
}

sortList(listOfEmployee);
getEmployees(listOfEmployee);
