'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const employeeList = document.querySelector('ul');

  const getSalary = (item) => {
    return parseInt(item.dataset.salary.replace(/[$,]/g, ''), 10);
  };

  const sortList = (list) => {
    const itemsArray = Array.from(list.children);

    itemsArray.sort((a, b) => getSalary(b) - getSalary(a));

    list.innerHTML = '';
    itemsArray.forEach((item) => list.appendChild(item));
  };

  const getEmployees = (list) => {
    return Array.from(list.children).map((item) => ({
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: getSalary(item),
      age: parseInt(item.dataset.age, 10),
    }));
  };

  sortList(employeeList);
  getEmployees(employeeList);
});
