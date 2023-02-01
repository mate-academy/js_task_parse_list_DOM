'use strict';

const list = document.querySelector('ul');
const listItem = document.querySelectorAll('li');

function sortList(listToSort) {
  const sortedList = [...listToSort].sort((a, b) => {
    const aFormatted = formatSalary(a.getAttribute('data-salary'));
    const bFormatted = formatSalary(b.getAttribute('data-salary'));

    return bFormatted - aFormatted;
  });

  return sortedList.map(el => list.append(el));
}

function formatSalary(str) {
  return +str.slice(1).split(',').join('');
}

function getEmployees(items) {
  return [...items].map(el =>
    Object.assign({ name: el.innerText }, el.dataset)
  );
}

sortList(listItem);
getEmployees(listItem);
