'use strict';

const employeesList = document.querySelector('ul');

function parseSalary(s) {
  return Number(s.replace(/[$,]/g, ''));
}

function sortList(list) {
  let newArr = [];

  for (const child of list.children) {
    newArr.push({
      element: child,
      salary: parseSalary(child.dataset.salary),
    });
  }
  newArr = newArr.sort((a, b) => b.salary - a.salary);

  const sortedListBySalary = [];

  for (const employe of newArr) {
    sortedListBySalary.push(employe.element);
  }
  list.append(...sortedListBySalary);
}

sortList(employeesList);

function getEmployees(list) {
  const newArr = [];

  for (const child of list.children) {
    newArr.push({
      name: child.innerText,
      position: child.dataset.position,
      salary: child.dataset.salary,
      age: child.dataset.age,
    });
  }

  return newArr;
}

getEmployees(employeesList);
