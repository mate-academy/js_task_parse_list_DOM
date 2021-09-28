'use strict';

const list = document.querySelector('ul');

function sortList(arr) {
  const listItems = [...arr.children];

  listItems.sort((a, b) => {
    const aSalary = a.dataset.salary;
    const bSalary = b.dataset.salary;

    return bSalary.localeCompare(aSalary, 'en', { numeric: true });
  });

  listItems.forEach(employee => arr.append(employee));
}

function getEmployees(arr) {
  return [...arr.children].map((employee) => {
    const { dataset: {
      position,
      salary,
      age,
    } } = employee;

    return {
      name: employee.innerText,
      position,
      salary,
      age,
    };
  });
}

sortList(list);
getEmployees(list);
