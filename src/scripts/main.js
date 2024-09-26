'use strict';

const strSalaryToNum = (str) => Number(str.substring(1).replaceAll(',', ''));

const employeeList = document.querySelector('ul');

function sortList(list) {
  const nodes = [...list.children];

  nodes.forEach((element) => element.remove());

  const sorted = nodes.sort((first, second) => {
    return (
      strSalaryToNum(second.dataset.salary) -
      strSalaryToNum(first.dataset.salary)
    );
  });

  list.append(...sorted);
}

function getEmployees(list) {
  return [...list.children]
    .filter((node) => node.hasAttribute('data-position'))
    .map((node) => {
      return {
        name: node.innerText,
        position: node.dataset.position,
        salary: strSalaryToNum(node.dataset.salary),
        age: Number(node.dataset.age),
      };
    });
}

sortList(employeeList);
getEmployees(employeeList);
