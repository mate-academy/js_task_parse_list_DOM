'use strict';

const listElm = document.querySelector('.employees');
const listNodes = listElm ? listElm.children : [];

// write code here
function sortList(list) {
  if (!list.length) {
    return;
  }

  const container = list[0].parentNode;
  const copiedList = [...list];

  copiedList.sort((a, b) => {
    return parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary);
  });

  // allList.children[0].before(...copiedList)
  container.append(...copiedList);
}

function getEmployees(list) {
  const employeeObjects = [];

  Array.from(list).forEach((i) => {
    employeeObjects.push({
      name: i.querySelector('.name').textContent.trim(),
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

  const digits = salaryString.match(regexp);

  return digits ? +digits.join('') : 0;
}

sortList(listNodes);

export const employees = getEmployees(listNodes);
