'use strict';

const li = document.querySelectorAll('li');
const ul = document.querySelector('ul');

function extractNumber(str) {
  if (!str || typeof str !== 'string') {
    return 0;
  }

  return parseFloat(str.replace(/[^\d.-]/g, '')) || 0;
}

const sortList = (list) => {
  const arrList = Array.from(list);

  const sortedList = arrList.sort((a, b) => {
    const salaryA = extractNumber(a.dataset.salary);
    const salaryB = extractNumber(b.dataset.salary);

    return salaryB - salaryA;
  });

  return sortedList;
};

const items = sortList(li);

items.forEach((item) => {
  ul.appendChild(item);
});

const getEmployees = (list) => {
  const employees = [];

  list.forEach((employee) => {
    employees.push({
      name: employee.textContent.trim(),
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
    });
  });

  return employees;
};

getEmployees(items);
