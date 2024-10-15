'use strict';

// write code here

const employees = document.querySelectorAll('li');
const listEmployees = document.querySelector('ul');

function getSalary(element) {
  const salary = element.dataset.salary;

  if (!salary) {
    throw new Error(`Salary not found for employee: ${element.textContent}`);
  }

  const cleanedSalary = salary.substring(1).replace(',', '');
  const numericSalary = Number(cleanedSalary);

  if (isNaN(numericSalary)) {
    throw new Error(`Invalid salary format for employee:
      ${element.textContent}`);
  }

  return numericSalary;
}

function sortList(list) {
  const listItem = Array.from(list);

  const sortedList = listItem.slice().sort((a, b) => {
    return getSalary(b) - getSalary(a);
  });

  listEmployees.innerHTML = '';

  sortedList.forEach((element) => {
    listEmployees.appendChild(element);
  });
}

function getEmployees(employeesList) {
  const emplArr = Array.from(employeesList);

  return emplArr.map((element) => {
    const nameElement = element.textContent.trim();
    const position = element.dataset.position;
    const salary = element.dataset.salary;
    const age = element.dataset.age;

    return {
      name: nameElement,
      position,
      salary,
      age,
    };
  });
}

sortList(employees);
getEmployees(employees);
