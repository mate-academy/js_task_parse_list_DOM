'use strict';

const space = document.querySelector('ul');

function conversion(value) {
  return +value.dataset.salary
    .split('').slice(1).join('').split(',').join('');
}

function sortList1(list) {
  const result = [...list.children].sort((a, b) => {
    const value1 = conversion(a);
    const value2 = conversion(b);

    return value2 - value1;
  });

  space.append(...result);
}

function getEmployees(list) {
  return [...list.children].map(element => {
    return {
      name: element.innerText,
      position: element.dataset.position,
      salary: element.dataset.salary,
      age: element.dataset.age,
    };
  });
}

sortList1(space);
getEmployees(space);
