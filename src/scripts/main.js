'use strict';

const list = document.querySelector('ul');
const getSalary = (item) => {
  const rawSalary = item.dataset.salary || '';
  const cleanSalary = rawSalary.replace(/\D/g, '');

  return Number(cleanSalary) || 0;
};
const getName = (item) => item.textContent || '';
const getPosition = (item) => item.dataset.position || '';
const getAge = (item) => Number(item.dataset.age) || 0;

function sortList(listElement) {
  const items = Array.from(listElement.children);

  items.sort((a, b) => getSalary(b) - getSalary(a));
  items.forEach((item) => listElement.appendChild(item));
}

function getEmployees(listElement) {
  const items = Array.from(listElement.children);

  return items.map((item) => {
    return {
      name: getName(item),
      position: getPosition(item),
      age: getAge(item),
      salary: getSalary(item),
    };
  });
}

sortList(list);
getEmployees(list);
