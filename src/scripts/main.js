'use strict';

// write code here

const nodeListLi = document.querySelectorAll('li');
const arrLi = Array.from(nodeListLi);

function sortList(list) {
  const sortedItems = list.sort((a, b) => {
    const salaryA = parseFloat(a.dataset.salary.replace(/[$,]/g, ''));
    const salaryB = parseFloat(b.dataset.salary.replace(/[$,]/g, ''));

    return salaryB - salaryA;
  });

  const parentList = document.querySelector('ul');

  parentList.replaceChildren(...sortedItems);
}

function getEmployees(list) {
  const employeesObjs = [];

  list.forEach((item) => {
    const employee = {
      name: item.textContent.replace(/^\s+|\s+$/g, '').replace(/\n/g, ''),
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    };

    employeesObjs.push(employee);
  });

  return employeesObjs;
}

sortList(arrLi);
getEmployees(arrLi);
