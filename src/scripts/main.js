'use strict';

function convertToNumber(str) {
  return str.split('').filter(element => {
    if (isNaN(+element)) {
      return false;
    }

    return true;
  }).join('');
}

function getEmployees(list) {
  const employees = [...list.children];

  return employees.map((employee) => ({
    name: employee.innerHTML.trim(),
    ...employee.dataset,
  }));
}

function sortList(list) {
  const employees = getEmployees(list);

  return employees.sort((employee1, employee2) => {
    const salary1 = employee1.salary;
    const salary2 = employee2.salary;

    return convertToNumber(salary2) - convertToNumber(salary1);
  });
}

const listOfEmployees = document.querySelector('ul');

const workers = sortList(listOfEmployees);

listOfEmployees.innerHTML = (`
${workers.map(employee => (`
  <li
    data-position = "${employee.position}"
    data-salary = "${employee.salary}"
    data-age = "${employee.age}"
  >${employee.name}
  </li>`
  )).join('')}
`);
