'use strict';

const listNode = document.querySelector('ul');
const [...employees] = listNode.children;

sortList(employees);
getEmployees(employees);

function sortList(list) {
  list.sort((a, b) => {
    const aSalary = convertToNumber(a.getAttribute('data-salary'));
    const bSalary = convertToNumber(b.getAttribute('data-salary'));

    return bSalary - aSalary;
  });

  listNode.append(...employees);
};

function convertToNumber(string) {
  const glued = string.replaceAll(',', '');

  return Number(glued.slice(1));
};

function getEmployees(list) {
  return list.map((person) => {
    return {
      name: person.innerText,
      position: person.getAttribute('data-position'),
      salary: person.getAttribute('data-salary'),
      age: person.getAttribute('data-age'),
    };
  });
};
