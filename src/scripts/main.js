'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const list = document.querySelector('ul');

  const getSalary = (li) => Number(li.dataset.salary.replace(/[$,]/g, ''));

  function sortList(listElement) {
    const sortedItems = [...listElement.children].sort((a, b) => {
      return getSalary(b) - getSalary(a);
    });

    sortedItems.forEach((li) => listElement.appendChild(li));
  }

  function getEmployees(listElement) {
    return [...listElement.children].map((li) => ({
      name: li.dataset.name,
      position: li.dataset.position,
      salary: Number(li.dataset.salary.replace(/[$,]/g, '')),
      age: Number(li.dataset.age),
    }));
  }

  sortList(list);
  getEmployees(list);
});
