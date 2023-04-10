'use strict';

const employeesList = document.querySelector('ul');
const employees = [...employeesList.children];

const convertToNumber = (string) => Number(string.replace(/[$,]/g, ''));

const sortList = (list) => {
  list.sort((empA, empB) => {
    const salaryA = convertToNumber(empA.dataset.salary);
    const salaryB = convertToNumber(empB.dataset.salary);

    return salaryB - salaryA;
  });

  employeesList.append(...list);
};

const getEmployees = (list) => {
  return list.map((employee) => ({
    name: employee.innerText,
    position: employee.dataset.position,
    salary: employee.dataset.salary,
    age: +employee.dataset.age,
  }));
};

getEmployees(employees);
sortList(employees);
