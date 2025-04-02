'use strict';

const employeCount = document.querySelector('ul');

function sortEmployees(list) {
  const employees = [...list.children];

  employees.sort((employ1, employ2) => {
    const salary1 = parseSalary(employ1.dataset.salary);
    const salary2 = parseSalary(employ2.dataset.salary);

    return salary2 - salary1;
  });

  employees.forEach((emp) => list.appendChild(emp));
}

function parseSalary(value) {
  return parseInt(value.replace(/[^\d]/g, ''), 10) || 0;
}

function createInfo(list) {
  return [...list.children].map((employe) => {
    const data = employe.dataset;

    return {
      name: employe.textContent,
      position: data.position,
      salary: data.salary,
      age: data.age,
    };
  });
}

sortEmployees(employeCount);
createInfo(employeCount);
