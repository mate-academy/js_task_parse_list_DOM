'use strict';

const elementUl = document.querySelector('ul');

/**
 *
 * @param {String} str
 * @returns
 */
function Salary2Number(str) {
  return Number(str.replaceAll(',', '').replaceAll('$', ''));
}

/**
 *
 * @param {HTMLElement} list
 */
function sortList(list) {
  const items = [...list.children];

  items.sort((a, b) => {
    const salaryA = Salary2Number(a.dataset.salary);
    const salaryB = Salary2Number(b.dataset.salary);

    return Number(salaryB) - Number(salaryA);
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
      salary: item.dataset.salary,
      age: item.dataset.age,
    };
  });

  return employees;
}

sortList(elementUl);
getEmployees(elementUl);
