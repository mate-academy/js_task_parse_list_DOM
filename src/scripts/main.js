'use strict';

const employeesList = [...document.querySelectorAll('li')];
const employeesListContainer = document.querySelector('ul');

function sortList(employeesListArr, employeesListParent) {
  const sortedEmployeesList = employeesListArr.sort((a, b) => {
    return (
      +b.dataset.salary.replace(/[^0-9]/g, '') -
      +a.dataset.salary.replace(/[^0-9]/g, '')
    );
  });

  sortedEmployeesList.forEach((item) => employeesListParent.append(item));
}

function getEmployees(employeesListArr) {
  return employeesListArr.map((el) => {
    return {
      name: el.innerText,
      position: el.dataset.position,
      salary: +el.dataset.salary.replace(/[^0-9]/g, ''),
      age: +el.dataset.age,
    };
  });
}

sortList(employeesList, employeesListContainer);
getEmployees(employeesList);
