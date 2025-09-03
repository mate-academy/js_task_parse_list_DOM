'use strict';
import { parseSalary } from './helpers/parseSalary.js';

/**
 * Sort list items by salary in-place
 * @param {Element} elTarget
 */
function sortList(elTarget) {
  const listItems = Array.from(elTarget.children);

  listItems.forEach((el) => {
    el.dataset.salary = el.dataset.salary || '0';
    el.dataset.position = el.dataset.position || '';
    el.dataset.age = el.dataset.age || '0';
  });

  listItems.sort(
    (a, b) => parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary),
  );
  listItems.forEach((el) => elTarget.appendChild(el));
}

/**
 * Return array of employee objects
 * @param {Element} elTarget
 * @return {Array<Object>}
 */
function getEmployees(elTarget) {
  return Array.from(elTarget.querySelectorAll(':scope > li')).map((el) => ({
    name: el.textContent.trim(),
    position: el.dataset.position || undefined,
    salary: parseSalary(el.dataset.salary),
    age: !isNaN(el.dataset.age) ? Number(el.dataset.age) : 0,
  }));
}

// Select container
const targetElement = document.querySelector('ul');

sortList(targetElement);

// eslint-disable-next-line no-unused-vars
const employees = getEmployees(targetElement);
