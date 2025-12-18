'use strict';

const unorderedList = document.querySelector('ul');

function salaryToNumber(el) {
  return +el.replace(/\D/g, '');
}

function sortList(list) {
  const listItem = Array.from(list.children);

  listItem.sort((a, b) => {
    const salaryA = salaryToNumber(a.dataset.salary);
    const salaryB = salaryToNumber(b.dataset.salary);

    return salaryB - salaryA;
  });

  listItem.forEach((el) => list.append(el));
}

function getEmployees(list) {
  const listItem = Array.from(list.children);

  return listItem.map((el) => {
    return {
      name: el.textContent.trim(),
      position: el.dataset.position,
      salary: el.dataset.salary,
      age: el.dataset.age,
    };
  });
}

sortList(unorderedList);
getEmployees(unorderedList);
