'use strict';

function toNumber(str) {
  return +str.replace(/\D/g, '');
}

function sort(list) {
  const employees = [...list.children];

  employees.sort((employeeA, employeeB) => {
    const salaryA = toNumber(employeeA.dataset.salary);
    const salaryB = toNumber(employeeB.dataset.salary);

    return salaryB - salaryA;
  });

  return employees;
}

function getEmployees(list) {
  const employees = [...list.children];
  const result = [];

  employees.forEach((employee) => {
    result.push({
      name: employee.innerText,
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
    });
  });

  return result;
}

const listOfEmployees = document.querySelector('ul');
const sortedListOfEmployees = sort(listOfEmployees);

listOfEmployees.innerHTML = '';
sortedListOfEmployees.forEach((element) => listOfEmployees.append(element));
getEmployees(listOfEmployees);
