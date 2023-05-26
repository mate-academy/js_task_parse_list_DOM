'use strict';

const listOfEmploees = document.querySelectorAll('ul li');

function sortList(list) {
  const sortedList = [...list].sort((employee1, employee2) => {
    const emp1 = toNumber(employee1.dataset.salary);
    const emp2 = toNumber(employee2.dataset.salary);

    return emp2 - emp1;
  });

  const employeeList = document.querySelector('ul');

  sortedList.forEach((employee) => {
    employeeList.appendChild(employee);
  });
};

function toNumber(string) {
  return string.slice(1).split(',').join('') * 1;
}

function getEmployees(array) {
  return array.map((employee) => {
    const employeeName = employee.innerText;
    const position = employee.dataset.position;
    const employeesalary = employee.dataset.salary;
    const age = employee.dataset.age;

    return {
      employeeName,
      position,
      employeesalary,
      age,
    };
  });
};

getEmployees(sortList(listOfEmploees));
