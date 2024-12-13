'use strict';

function parseSalary(salary) {
  return parseFloat(salary.replace('$', '').replace(',', ''))
}

function sortList(list) {
  const items = Array.from(list.children);

  items.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  items.forEach(item => list.appendChild(item));
}

function getEmployees(list) {
  const employees = Array.from(list.children).map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: parseSalary(item.dataset.salary),
    age: parseInt(item.dataset.age, 10)
  }));

  return employees;
}

const employeesList = document.querySelector('ul');
sortList(employeesList);
const employees = getEmployees(employeesList);
