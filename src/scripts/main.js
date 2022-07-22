'use strict';

const HTMLList = document.querySelector('ul');
const HTMLElementlist = HTMLList.querySelectorAll('li');

function convertationToNumber(item) {
  return Number(item.dataset.salary
    .slice(1)
    .split(',')
    .join(''));
}

function sortList(list) {
  return [...list].sort((a, b) =>
    convertationToNumber(b) - convertationToNumber(a)
  )
    .forEach(item => HTMLList.append(item));
}

function getEmployees(list) {
  const employes = [];

  list.forEach((item) => employes.push({
    name: item.textContent.trim(),
    ...item.dataset,
  }));

  return employes;
}

sortList(HTMLElementlist);
getEmployees(HTMLElementlist);
