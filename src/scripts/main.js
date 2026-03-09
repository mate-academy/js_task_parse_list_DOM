'use strict';

const listEmployees = document.querySelector('ul');

const toNumber = (str) => {
  const cleaned = String(str ?? '').replace(/\D/g, '');

  return cleaned ? Number(cleaned) : 0;
};

const sortList = (list) => {
  [...list.querySelectorAll('li')]
    .sort((a, b) => toNumber(b.dataset.salary) - toNumber(a.dataset.salary))
    .forEach((item) => list.appendChild(item));
};

const getEmployees = (list) => {
  return [...list.querySelectorAll('li')].map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: toNumber(item.dataset.salary),
    age: toNumber(item.dataset.age),
  }));
};

(() => {
  if (!listEmployees || !listEmployees.children.length) {
    return;
  }
  sortList(listEmployees);
  getEmployees(listEmployees);
})();
