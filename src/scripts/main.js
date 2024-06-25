'use strict';

const list = document.querySelector('ul');
const listItems = Array.from(list.querySelectorAll('li'));

function parseStr(str) {
  return parseFloat(str.replace(/[$,]/g, ''));
}

function sortList() {
  listItems.sort((a, b) => {
    const salaryA = parseStr(a.dataset.salary);
    const salaryB = parseStr(b.dataset.salary);

    return salaryB - salaryA;
  });

  list.innerHTML = '';
  listItems.forEach((item) => list.appendChild(item));
}

function getEmployees() {
  const employees = listItems.map((item) => {
    return {
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: parseStr(item.dataset.salary),
      age: parseInt(item.dataset.age, 10),
    };
  });

  return employees;
}

sortList(list);
getEmployees(list);
