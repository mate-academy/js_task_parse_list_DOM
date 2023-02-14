'use strict';

const listOfEmployees = document.querySelector('ul');

function sortList(list) {
  [...list.children].map(
    employee =>
      (employee.dataset.salary = +employee.dataset.salary
        .replace('$', '')
        .replace(',', ''))
  );

  const sortedEmployees = [...list.children].sort((emloyeeA, employeeB) =>
    employeeB.dataset.salary - emloyeeA.dataset.salary);

  list.append(...sortedEmployees);
};

function getEmployees(list) {
  return [...list.children].map(employee => ({
    name: employee.textContent.trim(),
    position: employee.dataset.position,
    salary: employee.dataset.salary,
    age: employee.dataset.age,
  }));
}

sortList(listOfEmployees);
getEmployees(listOfEmployees);
