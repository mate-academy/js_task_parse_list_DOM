/* eslint-disable no-console */
'use strict';

function parseSalary(salary) {
  if (!salary) {
    return 0;
  }

  return +salary.replaceAll(/[$,.]/g, '') || 0;
}

function sortList(list) {
  if (!list) {
    return [];
  }

  const items = [...list.children].filter((el) => el.dataset.salary);

  items.sort(
    (a, b) => parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary),
  );

  return items;
}

function getEmployees(list) {
  if (!list) {
    return [];
  }

  return [...list.children].map((element) => {
    const { salary = '0', position = 'Unknown', age = '0' } = element.dataset;

    return {
      name: element.textContent.trim(),
      position,
      salary: parseSalary(salary),
      age: +age || 0,
    };
  });
}

const domList = document.querySelector('ul');

if (domList) {
  const sortedList = sortList(domList);

  domList.append(...sortedList);
  console.log(getEmployees(domList));
}
