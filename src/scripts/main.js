'use strict';

const listOfEmployees = [...document.querySelectorAll('li')];
const listObj = document.querySelector('ul');

const getSalatyFromAttribute = (item) => {
  return +item
    .getAttribute('data-salary')
    .replaceAll(',', '')
    .replaceAll('$', '');
};

const sortList = (list) => {
  list.sort((a, b) => {
    const salaryA = getSalatyFromAttribute(a);
    const salaryB = getSalatyFromAttribute(b);

    return salaryB - salaryA;
  });
};

const getEmployees = (list) => {
  return list.map((i) => ({
    name: i.innerText,
    position: i.getAttribute('data-position'),
    salary: getSalatyFromAttribute(i),
    age: +i.getAttribute('data-age'),
  }));
};

getEmployees(listOfEmployees);
sortList(listOfEmployees);

listObj.replaceChildren(...listOfEmployees);
