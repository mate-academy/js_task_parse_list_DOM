'use strict';

// write code here

const employeeList = document.querySelector('ul');

function sortList(list) {
  function convertSalaryToNumber(salaryString) {
    return Number(salaryString.replace(/\$|,/g, ''));
  }

  const sortedItems = [...list.children]
    .sort((a, b) => {
      const salaryA = convertSalaryToNumber(a.dataset.salary);
      const salaryB = convertSalaryToNumber(b.dataset.salary);

      return salaryB - salaryA;
    });

  sortedItems.forEach(item => list.appendChild(item));
}

function getEmployees(list) {
  return [...list.children].map(item => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: item.dataset.age,
  }));
}

sortList(employeeList);

getEmployees(employeeList);
