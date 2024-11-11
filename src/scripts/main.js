'use strict';

// write code here
const sortList = (attribute) => {
  const list = [...document.querySelectorAll(`[${attribute}]`)];

  if (list.length <= 0) {
    return;
  }

  return list.sort((a, b) => {
    const aSalary = +a.getAttribute(attribute).replace(/[^0-9.-]+/g, '');
    const bSalary = +b.getAttribute(attribute).replace(/[^0-9.-]+/g, '');

    return bSalary - aSalary;
  });
};

const getEmployees = (getedList) => {
  if (!getedList || getedList.length <= 0) {
    return [];
  }

  const upperDomElem = getedList[0].parentElement;

  upperDomElem.innerHTML = '';
  getedList.forEach((item) => upperDomElem.appendChild(item));

  return getedList;
};

const sorterList = sortList('data-salary');

getEmployees(sorterList);
