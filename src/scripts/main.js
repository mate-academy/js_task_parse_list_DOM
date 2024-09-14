'use strict';

const listOfEmployees = document.querySelectorAll('li');

function getEmployees(list) {
  return Array.from(list, (employee) => ({
    name: employee.textContent.trim(),
    position: employee.dataset.position,
    salary: employee.dataset.salary,
    age: employee.dataset.age,
  }));
}

getEmployees(listOfEmployees);

function sortList(list) {
  const employeeData = Array.from(list, (employee) => {
    return {
      element: employee,
      salary: convert(employee.dataset.salary),
    };
  });

  employeeData.sort((ee1, ee2) => ee2.salary - ee1.salary);

  const parentOflist = list[0].parentNode;

  parentOflist.innerHTML = '';

  employeeData.forEach((employee) => {
    parentOflist.append(employee.element);
  });
}

sortList(listOfEmployees);

function convert(value) {
  return Number(value.replace(/[$,]/g, ''));
}
