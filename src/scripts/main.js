'use strict';

const getSalary = (node) => Number(node.dataset.salary.replace(/\$|,/g, ''));

const sortList = (ul) => {
  const items = [...ul.querySelectorAll('li')];

  items.sort((a, b) => getSalary(b) - getSalary(a));
  items.forEach((item) => ul.appendChild(item));
};

const getEmployees = (ul) => {
  const items = [...ul.querySelectorAll('li')];

  return items.map((item) => ({
    name: item.textContent.trim(),
    salary: getSalary(item),
    position: item.dataset.position,
    age: Number(item.dataset.age),
  }));
};

document.addEventListener('DOMContentLoaded', () => {
  const ul = document.querySelector('ul');

  sortList(ul);

  const employeesArray = getEmployees(ul);

  console.log(employeesArray);
});
