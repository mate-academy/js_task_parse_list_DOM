'use strict';

function sortList(list) {
  const listItems = Array.from(list.children);

  listItems.sort((a, b) => {
    const salaryA = Number(
      a.dataset.salary.replace('$', '').split(',').join(''),
    );
    const salaryB = Number(
      b.dataset.salary.replace('$', '').split(',').join(''),
    );

    return salaryB - salaryA;
  });

  listItems.forEach((item) => {
    list.appendChild(item);
  });
}

function getEmployees(list) {
  const listItems = Array.from(list.children);

  const employeesArray = listItems.map((item) => {
    const salaryValue = Number(
      item.dataset.salary.replace('$', '').split(',').join(''),
    );

    return {
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: salaryValue,
      age: Number(item.dataset.age),
    };
  });

  return employeesArray;
}

const employeeList = document.querySelector('ul');

sortList(employeeList);

getEmployees(employeeList);
