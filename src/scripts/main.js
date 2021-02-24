'use strict';

// write code here
const employesList = document.querySelector('ul');

function covnertToNumber(string) {
  return Number(string.match(/\d/g).join(''));
}

function sortList(list) {
  const employes = list.children;
  const sortedEmployes = [...employes].sort((curent, next) => covnertToNumber(
    next.dataset.salary) - covnertToNumber(curent.dataset.salary)
  );

  list.append(...sortedEmployes);

  return sortedEmployes;
}

function getEmployees(list) {
  const employes = list.children;

  return [...employes].map(person => ({
    name: person.innerText,
    ...person.dataset,
  }));
}

sortList(employesList);
getEmployees(employesList);
