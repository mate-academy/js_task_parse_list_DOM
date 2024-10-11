'use strict';

const listEl = document.querySelector('ul');
const listItems = [...listEl.children];

const convertToNumber = str => {
  if (typeof str === 'string') {
    const cleanedStr = str.replace(/[^\d.-]/g, '');
    return Number(cleanedStr);
  }
  return NaN;
};

const sortList = (list, sortParam) => {
  return [...list].sort((a, b) =>
    convertToNumber(b.dataset[sortParam]) - convertToNumber(a.dataset[sortParam])
  );
};

const getEmployees = (sortedList) => {
  listEl.innerHTML = '';

  sortedList.forEach(item => {
    listEl.appendChild(item);
  });
};

const sortedEmployees = sortList(listItems, 'salary');
getEmployees(sortedEmployees);
