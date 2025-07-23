'use strict';

const list = document.querySelector('ul');

// eslint-disable-next-line no-shadow
function sortList(list) {
  const listItems = list.getElementsByTagName('li');
  const itemsArray = Array.from(listItems);

  itemsArray.sort((a, b) => {
    const salaryA = Number(a.dataset.salary.replace(/[$,]/g, ''));
    const salaryB = Number(b.dataset.salary.replace(/[$,]/g, ''));

    return salaryB - salaryA;
  });

  list.innerHTML = '';

  for (const item of itemsArray) {
    list.appendChild(item);
  }
}

// eslint-disable-next-line no-shadow
function getEmployees(list) {
  const listItems = list.getElementsByTagName('li');
  const employees = [];

  for (const item of listItems) {
    const employee = {
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: Number(item.dataset.salary.replace(/[$,]/g, '')),
      age: Number(item.dataset.age),
    };

    employees.push(employee);
  }

  return employees;
}

sortList(list);
getEmployees(list);

// write code here
