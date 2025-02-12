'use strict';

document.addEventListener('DOMContentLoaded', function () {
  function getEmployees() {
    const listItems = document.querySelectorAll('ul li');

    return Array.from(listItems).map((item) => ({
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: Number(item.dataset.salary.replace(/[$,]/g, '')),
      age: Number(item.dataset.age),
    }));
  }

  function sortList() {
    const list = document.querySelector('ul');
    const items = Array.from(list.querySelectorAll('li'));

    function getSalaryNumbers(salary) {
      return Number(salary.replace(/[$,]/g, ''));
    }

    items.sort(
      (a, b) =>
        getSalaryNumbers(b.dataset.salary) - getSalaryNumbers(a.dataset.salary),
    );

    items.forEach((item) => list.appendChild(item));
  }

  getEmployees();
  sortList();
});
