'use strict';

const elementUl = document.querySelector('ul');

/**
 *
 * @param {HTMLElement} list
 */
function sortList(list) {
  const items = [...list.children];

  items.sort((a, b) => {
    let selaryA = a.dataset.salary;
    let selaryB = b.dataset.salary;

    selaryA = selaryA.replaceAll(',', '').replaceAll('$', '');
    selaryB = selaryB.replaceAll(',', '').replaceAll('$', '');

    return Number(selaryB) - Number(selaryA);
  });

  items.forEach((item) => list.append(item));
}

/**
 * @param {HTMLElement} list
 */
function getEmployees(list) {
  const items = [...list.children];

  const employees = items.map((item) => {
    return {
      name: item.textContent,
      position: item.dataset.position,
      selary: item.dataset.selary,
      age: item.dataset.age,
    };
  });

  return employees;
}

sortList(elementUl);
getEmployees(elementUl);
