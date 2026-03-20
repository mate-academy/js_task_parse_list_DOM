'use strict';

const employees = [...document.querySelectorAll('li')];

const arrEmployees = [];

for (const employee of employees) {
  const fullName = employee.textContent.trim();
  const { position, salary, age } = employee.dataset;

  const obj = {
    fullName,
    position,
    salary: Number(salary.replace(/[$\s,]/g, '')),
    age: Number(age),
  };

  arrEmployees.push(obj);
}

// --- sorted saslary ---

function sortList(list) {
  return list.sort((a, b) => b.salary - a.salary);
}

sortList(arrEmployees);

// --- get employees ---

function getEmployees(list) {
  return list.map((item) => ({
    fullName: item.name,
    position: item.position,
    salary: item.salary,
    age: item.age,
  }));
}

getEmployees(arrEmployees);
