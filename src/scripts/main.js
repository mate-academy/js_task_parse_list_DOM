'use strict';

// write code here
const outerList = document.querySelectorAll('li');

function sortList(list) {
  const sortedList = [...list];

  sortedList.sort((a, b) => {
    const salaryA = transformSalary(a.dataset.salary);
    const salaryB = transformSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  const ul = document.querySelector('ul');

  sortedList.forEach((li) => ul.appendChild(li));
}

function transformSalary(salary) {
  const value = salary.slice(1).replaceAll(',', '');

  return Number(value);
}

function getEmployees(list) {
  const employees = [...list].map((li) => {
    return {
      ...li.dataset,
      age: Number(li.dataset.age),
      salary: transformSalary(li.dataset.salary),
      name: li.textContent.trim(),
    };
  });

  return employees;
}

sortList(outerList);
getEmployees(outerList);
