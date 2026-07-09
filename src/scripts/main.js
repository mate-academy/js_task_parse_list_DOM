'use strict';

// write code here
const list = document.querySelector('ul');
const items = list.querySelectorAll('li');

function sortList() {
  const itemsArr = [...items];

  itemsArr.sort((a, b) => {
    const salaryA = Number(
      a.dataset.salary.replace('$', '').replaceAll(',', ''),
    );
    const salaryB = Number(
      b.dataset.salary.replace('$', '').replaceAll(',', ''),
    );

    return salaryB - salaryA;
  });

  for (const item of itemsArr) {
    list.append(item);
  }
}

sortList();

function getEmployees() {
  const result = [];

  for (const item of items) {
    const user = {
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    };

    result.push(user);
  }

  return result;
}

getEmployees();
