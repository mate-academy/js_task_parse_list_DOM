'use strict';

const listNode = document.querySelector('ul');
const employees = listNode.children;

listNode.append(...sortList(employees));
getEmployees(employees);

function sortList(list) {
  return [...list].sort((a, b) => {
    const aSalary = convertToNumber(a.getAttribute('data-salary'));
    const bSalary = convertToNumber(b.getAttribute('data-salary'));

    return bSalary - aSalary;
  });
};

function convertToNumber(string) {
  const glued = string.replaceAll(',', '');

  return Number(glued.slice(1));
};

function getEmployees(list) {
  return [...list].map((person) => ({
    name: person.innerText,
    position: person.getAttribute('data-position'),
    salary: person.getAttribute('data-salary'),
    age: person.getAttribute('data-age'),
  }));
};
