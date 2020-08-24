'use strict';

const listOfItems = document.querySelector('ul');

function createEmployeesList(list) {
  const arr = [];

  for (const item of list.children) {
    const employee = {
      name: item.innerText,
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    };

    arr.push(employee);
  }

  return arr;
}

createEmployeesList(listOfItems);

function sortBySalary(list) {
  const sortList = [...list.children].sort((a, b) => {
    const aSalary = a.dataset.salary.replace(/[^0-9]/g, '');
    const bSalary = b.dataset.salary.replace(/[^0-9]/g, '');

    return bSalary - aSalary;
  });

  list.append(...sortList);
}

sortBySalary(listOfItems);
