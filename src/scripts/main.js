'use strict';

// write code here
const workers = document.querySelector('ul');

function sortList(array) {
  for (let i = 0; i < array.length; i++) {
    array[i].dataset.salary = Number(
      array[i].dataset.salary.replace(/[$,]/g, ''));
  };

  const newArray = [...array];

  newArray.sort((a, b) => {
    return b.dataset.salary - a.dataset.salary;
  });

  return newArray;
}

workers.append(...sortList(workers.children));
