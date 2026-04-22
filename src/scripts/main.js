'use strict';

const parseToNumber = (string) => Number(string.replace(/[^0-9.-]+/g, ''));

const sortList = (listElement) => {
  const items = Array.from(listElement.querySelectorAll('li'));

  const sortedList = [...items].sort(
    (a, b) => parseToNumber(b.dataset.salary) - parseToNumber(a.dataset.salary),
  );

  sortedList.forEach((el) => listElement.appendChild(el));
};

const getEmployees = (listElement) => {
  const items = Array.from(listElement.querySelectorAll('li'));

  return items.map((el) => {
    const { position, salary, age } = el.dataset;

    return {
      name: el.textContent.trim(),
      position,
      salary: parseToNumber(salary),
      age: parseToNumber(age),
    };
  });
};

const list = document.querySelector('ul');

sortList(list);
getEmployees(list);
