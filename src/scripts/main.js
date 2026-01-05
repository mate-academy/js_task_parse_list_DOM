'use strict';

const parseSalary = (salaryStr) => {
  return Number(salaryStr.replace(/[^0-9.-]+/g, ''));
};

// eslint-disable-next-line no-shadow
const sortList = (list) => {
  const items = Array.from(list.querySelectorAll('li'));

  items.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  // Append sorted items back to the list
  items.forEach((item) => list.appendChild(item));
};

// eslint-disable-next-line no-shadow
const getEmployees = (list) => {
  const items = Array.from(list.querySelectorAll('li'));

  return items.map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: parseSalary(item.dataset.salary),
    age: Number(item.dataset.age),
  }));
};

// Get the list from the document
const list = document.querySelector('ul');

// Call both functions
sortList(list);

getEmployees(list);
