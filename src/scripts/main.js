'use strict';

const employers = document.querySelector('ul');

const empArr = [...employers.children];

function convertToNum(num) {
  return +(num.slice(1).split(',').join(''));
}

function sortList(employerL) {
  const sorted = employerL.sort((a, b) =>
    convertToNum(b.dataset.salary) - convertToNum(a.dataset.salary));

  employers.append(...sorted);
}

function getEmployers(listEmp) {
  return listEmp.map(employer => ({
    name: employer.innerText,
    ...employer.dataset,
  }));
};

sortList(empArr);
getEmployers(empArr);
