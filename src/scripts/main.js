'use strict';

// write code here
const listFromDocument = document.querySelectorAll('li');

function sortList(list) {
  const arrList = Array.from(list);

  arrList.sort(function(a, b) {
    const salaryA = Number(a.dataset.salary.replace(/[$,]/g, ''));
    const salaryB = Number(b.dataset.salary.replace(/[$,]/g, ''));

    return salaryB - salaryA;
  });

  return arrList;
}

const sortedList = sortList(listFromDocument);

const ulElement = document.querySelector('ul');

ulElement.append(...sortedList);
