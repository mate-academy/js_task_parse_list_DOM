'use strict';

const li = document.querySelectorAll('li');
const ul = document.querySelector('ul');

function extractNumber(str) {
  let num = '';

  for (const n of str) {
    if (!isNaN(n)) {
      num += n;
    }
  }

  return +num;
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

ul.innerHTML = '';

items.forEach((item) => {
  const newLi = document.createElement('li');

  newLi.textContent = item.textContent;

  Object.keys(item.dataset).forEach((attr) => {
    newLi.setAttribute(attr, item.dataset[attr]);
  });

  ul.appendChild(newLi);
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
