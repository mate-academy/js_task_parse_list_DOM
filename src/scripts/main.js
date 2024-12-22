'use strict';

function convertToNumber(salary) {
  return Number(salary.replace(/[^0-9.-]+/g, ''));
}

// Функція для сортування списку за зарплатою в порядку спадання
// eslint-disable-next-line no-shadow
function sortList(list) {
  if (!(list instanceof HTMLElement) || !list.children.length) {
    // eslint-disable-next-line no-console
    console.error('Invalid list element provided or list has no children.');

    return;
  }

  const items = [...list.children];

  items.sort((a, b) => {
    const salaryA = convertToNumber(a.dataset.salary);
    const salaryB = convertToNumber(b.dataset.salary);

    return salaryB - salaryA;
  });

  items.forEach((item) => list.appendChild(item));
}

// eslint-disable-next-line no-shadow
function getEmployees(list) {
  if (!(list instanceof HTMLElement) || !list.children.length) {
    // eslint-disable-next-line no-console
    console.error('Invalid list element provided or list has no children.');

    return [];
  }

  const items = [...list.children];

  return items
    .map((item) => {
      // eslint-disable-next-line no-shadow
      const name = item.textContent.trim();
      const position = item.dataset.position;
      const salary = item.dataset.salary;
      const age = item.dataset.age;

      if (name && position && salary && age) {
        return {
          name,
          position,
          salary: convertToNumber(salary),
          age,
        };
      } else {
        // eslint-disable-next-line no-console
        console.warn('Missing data attributes for item:', item);

        return null;
      }
    })
    .filter((item) => item !== null);
}

const list = document.querySelector('.employee-list');

if (list) {
  sortList(list);

  const employees = getEmployees(list);

  // eslint-disable-next-line no-console
  console.log(employees);
} else {
  // eslint-disable-next-line no-console
  console.error('List of employees not found.');
}
