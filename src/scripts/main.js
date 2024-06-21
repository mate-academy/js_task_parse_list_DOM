'use strict';

const employeesList = [...document.querySelectorAll('li')];

function getEmployees(listOfEmployee) {
  const result = [];

  listOfEmployee.forEach((employee) => {
    result.push({
      name: employee.textContent.replace(/\s+/g, ' ').trim(),
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
    });
  });

  return result;
}

getEmployees(employeesList);

function sortList(listWithEmployees) {
  const list = listWithEmployees.map((employee) => {
    return {
      employeeElement: employee,
      salary: Number(employee.dataset.salary.replace(/\$|,/g, '')),
    };
  });

  list.sort((a, b) => b.salary - a.salary);

  const ulElement = document.querySelector('ul');

  list.forEach((employee, index) => {
    ulElement.insertBefore(employee.employeeElement, ulElement.children[index]);
    employee.employeeElement.setAttribute('order-state', index.toString());
  });

  return list.map((employee) => employee.employeeElement);
}

sortList(employeesList);
