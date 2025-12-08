'use strict';

const listNodes = document.querySelector('.employees').children;

// write code here
function sortList(list) {
  if (!list.length) {
    return;
  }

  const copiedList = [...list];

  copiedList.sort((a, b) => {
    return parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary);
  });

  // allList.children[0].before(...copiedList)
  list[0].parentNode.append(...copiedList);
}

function getEmployees(list) {
  const employeeObjects = [];

  list.forEach((i) => {
    employeeObjects.push({
      name: i.innerText,
      position: i.dataset.position,
      salary: parseSalary(i.dataset.salary),
      age: +i.dataset.age,
    });
  });

  return employeeObjects;
}

function parseSalary(salaryString) {
  if (!salaryString) {
    return 0;
  }

  const regexp = /\d+/g;

  return +salaryString.match(regexp).join('');
}

sortList(listNodes);

export const employees = getEmployees(listNodes);
