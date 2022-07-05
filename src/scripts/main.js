'use strict';

const employeeElems = [...document.querySelectorAll('li')];

const getEmployees = (list) => {
  return list.map(employee => {
    return {
      name: employee.innerText,
      position: employee.dataset.position,
      salary: +employee.dataset.salary.replace(/\D/g, ''),
      age: employee.dataset.age,
    };
  });
};

const sortList = (list) => list.sort((a, b) => b.salary - a.salary);

const employees = getEmployees(employeeElems);
const sortedEmployees = sortList(employees);

sortedEmployees.forEach((employee, i) => {
  employeeElems[i].innerText = employee.name;
  employeeElems[i].dataset.position = employee.position;

  employeeElems[i].dataset.salary = `$${employee.salary
    .toLocaleString('en-US')}`;
  employeeElems[i].dataset.age = employee.age;
});
