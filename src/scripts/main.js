'use strict';

const employeesList = document.getElementsByTagName('li');

function toNumber(string = '') {
  const parsedValue = string.replace(/[^0-9.]/g, '');

  return Number(parsedValue);
}

function sortList(list) {
  const items = Array.from(list);

  if (!items.length) {
    return [];
  }

  const comparator = (a, b) => {
    const s1 = toNumber(a.dataset.salary);
    const s2 = toNumber(b.dataset.salary);

    return s2 - s1;
  };

  const sorted = items.sort(comparator);

  sorted.forEach((el) => {
    el.parentNode.appendChild(el);
  });
}

function getEmployees(list) {
  const items = Array.from(list);

  if (!items.length) {
    return [];
  }

  return items.map((el) => {
    // eslint-disable-next-line no-shadow
    const name = el.innerText || '';
    const position = el.dataset.position || '';
    const salary = el.dataset.salary || '';
    const age = el.dataset.age || '';

    return {
      name,
      position,
      salary,
      age,
    };
  });
}

sortList(employeesList);
getEmployees(employeesList);
