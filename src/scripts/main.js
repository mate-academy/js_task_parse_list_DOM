'use strict';

const employeesList = document.querySelectorAll('[data-salary]');

function convertSalary(salaryString) {
  return parseFloat(salaryString.replace('$', '').replace(',', ''));
}

function sortList(list) {
  const sortedArray = Array.from(list).sort((a, b) => {
    const salaryA = convertSalary(a.dataset.salary);
    const salaryB = convertSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  const parents = list[0].parentNode;

  sortedArray.forEach((element) => parents.appendChild(element));
}

function getEmployees(list) {
  return Array.from(list).map((employee) => ({
    name: employee.textContent.trim(),
    position: employee.dataset.position,
    salary: convertSalary(employee.dataset.salary),
    age: parseInt(employee.dataset.age, 10),
  }));
}

sortList(employeesList);
getEmployees(employeesList);
