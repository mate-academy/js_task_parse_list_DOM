'use strict';

const employeeList = document.querySelector('ul');

function sortList(listContainer) {
  const listElements = Array.from(listContainer.children);

  listElements.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  listElements.forEach((item) => listContainer.appendChild(item));
}

function getEmployees(listContainer) {
  return Array.from(listContainer.children).map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: parseSalary(item.dataset.salary),
    age: Number(item.dataset.age),
  }));
}

function parseSalary(salaryStr) {
  const sanitizedSalary = salaryStr.replace(/[^0-9.-]+/g, '');
  const salary = Number(sanitizedSalary);

  return isNaN(salary) ? 0 : salary;
}

sortList(employeeList);

getEmployees(employeeList);
