'use strict';

const list = document.querySelector('ul');

function getSalary(element) {
  return Number(element.dataset.salary.replace('$', '').replace(',', ''));
}

function sortList(employeeList) {
  const employees = [...employeeList.children];

  const sortedList = employees.sort((a, b) => {
    return getSalary(b) - getSalary(a);
  });

  sortedList.forEach((item) => employeeList.append(item));
}

function getEmployees(employeeList) {
  return [...employeeList.children].map((employee) => {
    return {
      name: employee.textContent.trim(),
      position: employee.dataset.position,
      salary: getSalary(employee),
      age: Number(employee.dataset.age),
    };
  });
}

sortList(list);

const employeeData = getEmployees(list);

// eslint-disable-next-line no-console
console.log(employeeData);
