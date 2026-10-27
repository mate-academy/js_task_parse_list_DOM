'use strict';

// write code here

const ul = document.querySelector('ul');
const lists = document.querySelectorAll('li');

function sortList(list) {
  const items = [...list].sort((a, b) => {
    const ASalary = conversionToANumber(a.dataset.salary);
    const BSalary = conversionToANumber(b.dataset.salary);

    return BSalary - ASalary;
  });

  ul.innerHTML = '';

  items.forEach((item) => {
    ul.append(item);
  });
}

function getEmployees(list) {
  return [...list].map((item) => {
    return {
      ...item.dataset,
      salary: +item.dataset.salary.slice(1).replaceAll(',', ''),
      name: item.textContent,
    };
  });
}

function conversionToANumber(number) {
  return +number.slice(1).replaceAll(',', '');
}

getEmployees(lists);

sortList(lists);
