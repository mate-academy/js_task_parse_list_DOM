'use strict';

const employsList = [...document.querySelectorAll('li')];
const listParent = document.querySelector('ul');

function sortList(list) {
  list.sort((a, b) => {
    return normalize(b.dataset.salary) - normalize(a.dataset.salary);
  });

  list.forEach(element => listParent.append(element));
}

function normalize(item) {
  return Number(item.replace(/[$,]/g, ''));
}

sortList(employsList);

function getEmployees(list) {
  return list.map(item => {
    return {
      name: item.innerText,
      ...item.dataset,
    };
  });
}

getEmployees(employsList);
