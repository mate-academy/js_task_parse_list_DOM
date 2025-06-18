'use strict';

function sortList(list) {
  const salarySort = list.sort((element1, element2) => {
    const salary1 = +element1.dataset.salary.replace(/[^0-9.]/g, '');
    const salary2 = +element2.dataset.salary.replace(/[^0-9.]/g, '');

    return salary2 - salary1;
  });

  const upper = list[0].parentElement;

  for (const item of salarySort) {
    upper.appendChild(item);
  }
}

function getEmployees(list) {
  const employees = [];

  for (const element of list) {
    const worker = element.textContent.trim();
    const position = element.dataset.position;
    const salary = +element.dataset.salary.replace(/[^0-9.]/g, '');
    const age = +element.dataset.age;

    const employee = {
      worker,
      position,
      salary,
      age,
    };

    employees.push(employee);
  }

  return employees;
}

const example = [...document.querySelectorAll('li')];

sortList(example);

getEmployees(example);
