'use strict';

document.addEventListener('DOMContentLoaded', () => {
  function formatSalary(str) {
    return Number(str.replace(/,|\$/g, ''));
  }

  function sortBySalary(items) {
    list.append(...[...items]
      .sort((prev, next) => formatSalary(next.dataset.salary)
        - formatSalary(prev.dataset.salary)));
  }

  function getEmployees(items) {
    return [...items].map((item) =>
      ({
        name: item.innerText,
        position: item.dataset.position,
        salary: item.dataset.salary,
        age: item.dataset.age,
      }));
  }

  const list = document.querySelector('ul');

  sortBySalary(list.children);
  getEmployees(list.children);
});
