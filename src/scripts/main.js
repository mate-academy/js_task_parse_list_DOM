'use strict';

// write code here

document.addEventListener('DOMContentLoaded', () => {
  const employeeList = document.querySelector('ul');

  function convertSalaryToNumber(salaryString) {
    const cleanedString = salaryString.replace(/\$|,/g, '');

    return parseInt(cleanedString, 10);
  }

  function sortList(listElement) {
    const listItems = listElement.querySelectorAll('li');
    const itemsArray = Array.from(listItems);

    itemsArray.sort((a, b) => {
      const salaryA = a.dataset.salary;
      const salaryB = b.dataset.salary;

      const numSalaryA = convertSalaryToNumber(salaryA);
      const numSalaryB = convertSalaryToNumber(salaryB);

      return numSalaryB - numSalaryA;
    });

    listElement.innerHTML = '';

    itemsArray.forEach((item) => {
      listElement.appendChild(item);
    });
  }

  function getEmployees(listElement) {
    const employees = [];
    const listItems = listElement.querySelectorAll('li');

    listItems.forEach((item) => {
      const employeeName = item.textContent.trim();
      const position = item.dataset.position;
      const salaryString = item.dataset.salary;
      const ageString = item.dataset.age;
      const salary = convertSalaryToNumber(salaryString);
      const age = parseInt(ageString, 10);

      const employee = {
        name: employeeName,
        position: position,
        salary: salary,
        age: age,
      };

      employees.push(employee);
    });

    return employees;
  }

  sortList(employeeList);

  getEmployees(employeeList);
});
