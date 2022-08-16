'use strict';

const employeesList = document.querySelector('ul');

function sortedEmployeesList(employes) {
  let count;

  do {
    count = 0;

    for (let i = 1; i < employes.children.length; i++) {
      const first = employes.children[i - 1];
      const second = employes.children[i];

      const firstEmployeSalary = convertingToNumber(first);
      const secondEmployeSalary = convertingToNumber(second);

      if (secondEmployeSalary > firstEmployeSalary) {
        employes.prepend(second);
        count++;
      }
    }
  } while (count > 0);
}

sortedEmployeesList(employeesList);

function convertingToNumber(value) {
  const valueSalary = value.dataset.salary;

  let result = '';

  for (const el of valueSalary) {
    if (el === ',' || el === '$') {

    } else {
      result += el;
    }
  }

  result = +(result);

  return result;
}

function getEmployees(list) {
  const result = [];

  for (const item of list.children) {
    const employes = {
      name: item.innerText,
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: +(item.dataset.age),
    };

    result.push(employes);
  }

  return result;
};

getEmployees(employeesList);
