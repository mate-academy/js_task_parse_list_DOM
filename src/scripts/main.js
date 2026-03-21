'use strict';

const listEmployees = document.querySelector('ul');
const listEmployee = [...listEmployees.querySelectorAll('li')];

const parseSalary = (salary) => Number(salary.replace(/[$\s,]/g, ''));

// --- sorted salary ---

function sortList(list) {
  const sortedSalary = [...list].sort((a, b) => {
    return parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary);
  });

  sortedSalary.forEach((item) => listEmployees.append(item));
}

// --- get employees ---

function getEmployees(list) {
  return list.map((employee) => ({
    name: employee.textContent.trim(),
    position: employee.dataset.position,
    salary: parseSalary(employee.dataset.salary),
    age: Number(employee.dataset.age),
  }));
}

sortList(listEmployee);
getEmployees(listEmployee);
