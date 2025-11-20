'use strict';

const ulElementEmployees = document.querySelector('ul');
const dataEmployees = [...ulElementEmployees.children];

function sortList(list, ulElemEmployee) {
  const sortEmployeeSalaries = list.sort((employeeA, employeeB) => {
    const salaryA = getSalaryNumber(employeeA);
    const salaryB = getSalaryNumber(employeeB);

    return salaryB - salaryA;
  });

  ulElemEmployee.innerHTML = '';
  sortEmployeeSalaries.forEach((li) => ulElemEmployee.append(li));
}

function getSalaryNumber(employee) {
  return Number(employee.dataset.salary.replace(/[^\d]/g, ''));
}

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

sortList(dataEmployees, ulElementEmployees);

const employeesData = getEmployees(dataEmployees);

// eslint-disable-next-line no-console
console.log(employeesData);
