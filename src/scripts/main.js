'use strict';

function toNumber(str) {
  return parseInt(str.replace(/[$,]/g, ''));
}

function sortList() {
  const list = document.getElementsByTagName('ul')[0];
  const listItems = [...list.children];

  listItems.sort((a, b) => {
    const salaryA = toNumber(a.getAttribute('data-salary'));
    const salaryB = toNumber(b.getAttribute('data-salary'));

    return salaryB - salaryA;
  });

  listItems.forEach(item => list.appendChild(item));
}

function getEmployees() {
  const list = document.getElementsByTagName('ul')[0];
  const listItems = [...list.children];

  const employees = listItems.map(item => {
    return {
      name: item.innerText,
      position: item.getAttribute('data-position'),
      salary: item.getAttribute('data-salary'),
      age: item.getAttribute('data-age'),
    };
  });

  return employees;
}

sortList();
getEmployees();
