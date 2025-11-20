'use strict';

const ulElementEmployees = document.querySelector('ul');
const dataEmployees = [...ulElementEmployees.children];

function sortList(list) {
  const sortEmployeeSalaries = list.sort((employeeA, employeeB) => {
    const salaryA = Number(employeeA.dataset.salary.replace(/[^\d]/g, ''));
    const salaryB = Number(employeeB.dataset.salary.replace(/[^\d]/g, ''));

    return salaryB - salaryA;
  });

  return sortEmployeeSalaries;
}

const sortedEmployees = sortList(dataEmployees);

ulElementEmployees.innerHTML = '';

sortedEmployees.forEach((li) => ulElementEmployees.append(li));

function getEmployees(list) {
  const allDataEmployees = list.map((employee) => {
    const nameEmployee = employee.innerText;

    return {
      name: nameEmployee,
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
    };
  });

  return allDataEmployees;
}

getEmployees(dataEmployees);
