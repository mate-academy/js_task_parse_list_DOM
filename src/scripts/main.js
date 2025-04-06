'use strict';

function getList(dataSalary) {
  return Number(dataSalary.replace(/[$,]/g, ''));
}

function sortList(list) {
  const items = [...list.children];

  items.sort((a, b) => {
    const sortA = getList(a.getAttribute('data-salary'));
    const sortB = getList(b.getAttribute('data-salary'));

    return sortB - sortA;
  });
  items.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  return [...list.children].map((item) => {
    return {
      name: item.textContent.trim(),
      position: item.getAttribute('data-position'),
      salary: getList(item.getAttribute('data-salary')),
      age: Number(item.getAttribute('data-age')),
    };
  });
}

const employee = document.querySelector('ul');

sortList(employee);
getEmployees(employee);
