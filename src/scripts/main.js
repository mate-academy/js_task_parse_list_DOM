'use strict';

const employee = document.querySelector('ul');

function sortList(employeeList) {
  const sortListEmployees = [ ...employeeList.children ].sort((a, b) => {
    const first = +((a.dataset.salary).split(',').join('').slice(1));
    const second = +((b.dataset.salary).split(',').join('').slice(1));

    return second - first;
  });

  employeeList.append(...sortListEmployees);
}

function getEmployees(listEmployee) {
  const arrObjects = [];

  for (const key of listEmployee.children) {
    arrObjects.push({
      name: key.textContent.trim(),
      ...key.dataset,
    });
  }

  return arrObjects;
}

sortList(employee);
getEmployees(employee);
