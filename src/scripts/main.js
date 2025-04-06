'use strict';

const employeCount = document.querySelector('ul');

function sortList(list) {
  [...list.children]
    .sort((employ1, employ2) => {
      const salary1 = parseSalary(employ1.dataset.salary);
      const salary2 = parseSalary(employ2.dataset.salary);

      return salary2 - salary1;
    })
    .forEach((emp) => list.appendChild(emp));
}

function parseSalary(value) {
  return parseInt(value.replace(/[^\d]/g, ''), 10) || 0;
}

function getEmployees(list) {
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

sortList(employeCount);
getEmployees(employeCount);
