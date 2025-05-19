/* eslint-disable no-console */
'use strict';

// write code here
document.addEventListener('DOMContentLoaded', () => {
  const list = document.querySelector('ul');

  function getSalaryFromLi(li) {
    return Number(li.dataset.salary.replace(/[$,]/g, ''));
  }

  function sortList() {
    const items = Array.from(list.children);

    items.sort((a, b) => getSalaryFromLi(b) - getSalaryFromLi(a));
    items.forEach((item) => list.appendChild(item));
  }

  function getEmployees() {
    return Array.from(list.children).map((li) => ({
      name: li.textContent.trim(),
      salary: getSalaryFromLi(li),
      position: li.dataset.position,
      age: Number(li.dataset.age),
    }));
  }

  sortList();

  const employees = getEmployees();

  console.log(employees);
});
