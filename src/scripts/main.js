'use strict';

const employeeList = document.querySelector('ul');

const parseSalary = (salary) => Number(salary.replace(/[$,]/g, ''));

function sortList(list) {
  const sortedItems = Array.from(list.children).sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  sortedItems.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  return Array.from(list.children).map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: parseSalary(item.dataset.salary),
    age: parseInt(item.dataset.age, 10),
  }));
}

getEmployees(employeeList);
sortList(employeeList);
