'use strict';

const employees = document.querySelector('ul');

function sortList(list) {
  const sortedList = [...list.children]
    .sort((a, b) =>
      +b.dataset.salary.replace(/[^0-9]/g, '')
      - +a.dataset.salary.replace(/[^0-9]/g, ''));

  list.append(...sortedList);
}

function getEmployees(list) {
  return [...list.children].map(employee =>
    ({
      name: employee.innerText,
      ...employee.dataset,
    })
  );
}

sortList(employees);
getEmployees(employees);
