'use strict';

function sortList(list) {
  const sortedEmployees = [...list.children];

  sortedEmployees.sort((el1, el2) => {
    const salary1 = el1.dataset.salary.replace(/[$,]/g, '');
    const salary2 = el2.dataset.salary.replace(/[$,]/g, '');

    return salary2 - salary1;
  });

  sortedEmployees.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  const employees = [];

  for (const person of list.children) {
    const personName = person.textContent.trim();
    const { age, position, salary } = person.dataset;
    const cleanSalary = parseFloat(salary.replace(/[$,]/g, ''));
    const numberAge = parseInt(age);

    employees.push({
      salary: cleanSalary,
      age: numberAge,
      position,
      name: personName,
    });
  }

  return employees;
}

const people = document.querySelector('ul');

sortList(people);

getEmployees(people);
