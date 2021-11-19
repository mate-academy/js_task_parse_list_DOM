'use strict';

function convertToNumber(str) {
  return str.split('').filter(element => {
    if (isNaN(+element)) {
      return false;
    }

    return true;
  }).join('');
}

const listOfEmployees = document.querySelector('ul');

function sortList(list) {
  const children = list.children;
  const employees = [...children];

  employees.sort((employee1, employee2) => {
    const salary1 = employee1.dataset.salary;
    const salary2 = employee2.dataset.salary;

    return convertToNumber(salary2) - convertToNumber(salary1);
  });

  list.innerHTML = `
  ${employees.map(employee => (`
    <li
      data-position = "${employee.dataset.position}"
      data-salary = "${employee.dataset.salary}"
      data-age = "${employee.dataset.age}"
    >${employee.innerHTML.trim()}
    </li>`
  )).join('')}`;
}

function getEmployees(list) {
  const children = list.children;
  const employees = [...children];

  return employees.map((employee) => ({
    name: employee.innerHTML.trim(),
    position: employee.dataset.position,
    salary: employee.dataset.salary,
    age: employee.dataset.age,
  }));
}

sortList(listOfEmployees);
getEmployees(listOfEmployees);
