'use strict';

const salaryConvertion = (string) => string.replace(/[^\d]/g, '');

const sortList = (list) => {
  const sortedList = list.sort((first, second) => {
    const firstSalary = salaryConvertion(first.dataset.salary);
    const secondSalary = salaryConvertion(second.dataset.salary);

    return secondSalary - firstSalary;
  });

  return sortedList;
};

const getEmployees = (tag) => {
  const listOfWorkers = [...document.querySelector(tag).children];

  return listOfWorkers;
};

const formatedList = getEmployees('ul');
const htmlList = document.querySelector('ul');

getEmployees('ul');
sortList(formatedList).forEach(item => htmlList.append(item));
