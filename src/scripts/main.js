'use strict';

const listElement = document.querySelector('ul');

const getSalary = (li) => {
  const salaryStr = li.dataset.salary;
  const cleanSalary = salaryStr.replace(/\D/g, '');

  return Number(cleanSalary);
};

const sortList = (list) => {
  const items = Array.from(list.children);

  items.sort((a, b) => getSalary(b) - getSalary(a));

  list.append(...items);
};

const getEmployees = (list) => {
  const result = [];

  for (const li of list.children) {
    result.push({
      name: li.textContent.trim(),
      position: li.dataset.position,
      salary: getSalary(li),
      age: Number(li.dataset.age),
    });
  }

  return result;
};

sortList(listElement);

getEmployees(listElement);
