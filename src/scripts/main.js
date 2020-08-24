'use strict';

const employeesList = document.querySelector('ul');

function sortList(list) {
  const sorted = [...list.children].sort((a, b) =>
    Number(b.dataset.salary.replace(/[^0-9]/gi, ''))
    - Number(a.dataset.salary.replace(/[^0-9]/gi, ''))
  );

  employeesList.append(...sorted);
}

function getEmployees(list) {
  return [...list.children].map(employee => {
    return {
      name: employee.innerHTML.trim(),
      ...employee.dataset,
    };
  });
}

sortList(employeesList);
getEmployees(employeesList);
