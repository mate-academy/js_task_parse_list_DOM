'use strict';

'use strict';

const ul = document.querySelector('ul');

function convertSalaryToNumber(value) {
  return Number(value.replace(/[$,]/g, ''));
}

function sortList(list) {
  const items = [...list.querySelectorAll('[data-salary]')];

  const sortedItems = items.sort(
    (a, b) =>
      convertSalaryToNumber(b.dataset.salary) -
      convertSalaryToNumber(a.dataset.salary),
  );

  list.append(...sortedItems);

  return sortedItems;
}

function getEmployees(list) {
  return [...list.querySelectorAll('[data-salary]')].map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: convertSalaryToNumber(item.dataset.salary),
    age: item.dataset.age,
  }));
}

sortList(ul);

getEmployees(ul);
