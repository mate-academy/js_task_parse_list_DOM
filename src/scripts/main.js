'use strict';

const list = document.querySelector('ul');
const listItems = document.querySelectorAll('li');

const convertToNumber = (str) => {
  return Number(str.slice(1).split(',').join(''));
};

const sortList = (data) => {
  const copy = [...data];

  copy.sort((dataA, dataB) => {
    const salaryA = convertToNumber(dataA.dataset.salary);
    const salaryB = convertToNumber(dataB.dataset.salary);

    return salaryB - salaryA;
  });

  list.append(...copy);
};

const getEmployees = (someList) => {
  return [...someList].map(employee => ({
    name: employee.textContent,
    ...employee.dataset,
  }));
};

sortList(listItems);
getEmployees(listItems);
