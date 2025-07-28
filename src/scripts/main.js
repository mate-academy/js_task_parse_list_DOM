'use strict';

const employeeList = document.querySelector('ul');

function convertSalaryToNumber(salaryString) {
  return Number(salaryString.replace(/[$,]/g, ''));
}

function sortListBySalary(listElement) {
  const listItems = Array.from(listElement.children);

  listItems.sort((firstItem, secondItem) => {
    const firstSalary = convertSalaryToNumber(firstItem.dataset.salary);
    const secondSalary = convertSalaryToNumber(secondItem.dataset.salary);

    return secondSalary - firstSalary;
  });

  listItems.forEach((itemElement) => {
    listElement.appendChild(itemElement);
  });
}

function getEmployeeObjects(listElement) {
  return Array.from(listElement.children).map((element) => ({
    name: element.textContent.trim(),
    position: element.dataset.position,
    salary: element.dataset.salary,
    age: Number(element.dataset.age),
  }));
}

sortListBySalary(employeeList);
getEmployeeObjects(employeeList);
