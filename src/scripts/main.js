'use strict';

function sortList(list) {
  const itemArray = getItemsArray(list);

  itemArray.sort((a, b) => {
    const salaryA = parseNumber(a?.dataset?.salary);
    const salaryB = parseNumber(b?.dataset?.salary);

    return salaryB - salaryA;
  });

  const checklist = document.querySelector(list);

  itemArray.forEach((item) => {
    checklist.appendChild(item);
  });
}

function getEmployees(list) {
  const itemArray = getItemsArray(list);

  const employees = itemArray.map((item) => {
    return {
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: parseNumber(item?.dataset?.salary),
      age: item.dataset.age,
    };
  });

  return employees;
}

const getItemsArray = (selector) => {
  const checklist = document.querySelector(selector);
  const listItem = checklist.querySelectorAll('li');

  return Array.from(listItem);
};

const parseNumber = (item) => parseInt(item.replace(/[^\d]/g, ''));

sortList('ul');
getEmployees('ul');
