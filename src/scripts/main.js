'use strict';

function getEmployees(list) {
  return list.map((employee) => ({
    name: employee.innerText,
    position: employee.dataset.position,
    salary: employee.dataset.salary,
    age: employee.dataset.age,
  }));
}

function sortList(list) {
  return [...list].sort((a, b) => getNumber(b.salary) - getNumber(a.salary));
}

function getNumber(value) {
  return value.replace(/\D/g, '');
}

const employeesList = document.querySelector('ul');
const employees = getEmployees([...employeesList.children]);
const sortedEmployees = sortList(employees);

sortedEmployees.forEach((employee, id) => {
  employeesList.children[id].innerText = employee.name;
  employeesList.children[id].dataset.position = employee.position;
  employeesList.children[id].dataset.salary = employee.salary;
  employeesList.children[id].dataset.age = employee.age;
});
