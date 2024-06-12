'use strict';

const employeesList = document.querySelector('ul');

const employeesItems = document.querySelectorAll('li');

function stringToNumber(el) {
  return parseInt(el.split(',').join('').replace(/\D/g, ''));
}

function sortList(list) {
  return list.sort(
    (employee1, employee2) =>
      stringToNumber(employee2.dataset.salary) -
      stringToNumber(employee1.dataset.salary),
  );
}

function getEmployees(list) {
  return list.map((employee) => {
    return {
      name: employee.innerText,
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
    };
  });
}

getEmployees(sortList([...employeesItems]));

while (employeesList.firstChild) {
  employeesList.removeChild(employeesList.firstChild);
}

sortList([...employeesItems]).forEach((item) => {
  return employeesList.appendChild(item);
});
