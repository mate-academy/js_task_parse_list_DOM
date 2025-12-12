'use strict';

const allEmployees = document.querySelectorAll('ul li');

function conversionSalaryInNum(str) {
  return Number(str.slice(1).replace(/,/g, ''));
}

function getEmployees(list) {
  return Array.from(list).map((item) => {
    return {
      name: item.textContent.trim(),
      ...item.dataset,
    };
  });
}

function sortList(list) {
  const arr = Array.from(list);

  arr.sort((a, b) => {
    const firstSalary = conversionSalaryInNum(a.dataset.salary);
    const secondSalary = conversionSalaryInNum(b.dataset.salary);

    return secondSalary - firstSalary;
  });

  const listOfEmployees = document.querySelector('ul');

  arr.forEach((item) => listOfEmployees.append(item));

  return arr;
}

const sortedLi = sortList(allEmployees);

getEmployees(sortedLi);
