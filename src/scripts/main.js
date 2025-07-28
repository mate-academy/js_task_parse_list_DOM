'use strict';

// utils
const getConvertedNumber = (numberStr) =>
  Number(numberStr.replace(/[$,]/g, ''));

// vars
const nodeList = document.querySelector('ul');
const nodeItems = document.querySelectorAll('li');

const sortList = (list) => {
  if (!Array.isArray(list)) {
    return [];
  }

  const copyList = [...list];

  copyList.sort((a, b) => {
    const convertedNumberA = getConvertedNumber(a.dataset.salary);
    const convertedNumberB = getConvertedNumber(b.dataset.salary);

    return convertedNumberB - convertedNumberA;
  });

  copyList.forEach((el) => nodeList.appendChild(el));
};

const getEmployees = (list) => {
  if (!Array.isArray(list)) {
    return [];
  }

  const copyList = [...list];

  return copyList.map((el) => ({
    name: el.textContent.trim(),
    salary: getConvertedNumber(el.dataset.salary),
  }));
};

const itemsData = Array.from(nodeItems);

sortList(itemsData);
console.log(getEmployees(itemsData));
