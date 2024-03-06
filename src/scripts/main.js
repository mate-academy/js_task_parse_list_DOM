'use strict';

// write code here
function sortList(list) {
  const arr = Array.from(list.children);

  arr.sort((a, b) => {
    const salaryA = salaryToNumber(a.dataset.salary);
    const salaryB = salaryToNumber(b.dataset.salary);

    return salaryB - salaryA;
  });

  for (const element of arr) {
    list.append(element);
  }
}

function getEmployees(list) {
  return Array.from(list.children).map(element => {
    return {
      name: element.innerText,
      ...element.dataset,
    };
  });
}

function salaryToNumber(string) {
  return +string.replace(/\D/g, '');
}

const listElement = document.querySelector('ul');

sortList(listElement);
getEmployees(listElement);
