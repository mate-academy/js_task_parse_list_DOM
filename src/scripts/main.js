'use strict';

const employeesList = [...document.querySelectorAll('li')];

function sortList(list) {
  const ul = document.querySelector('ul');

  list.sort((a, b) => {
    const salary1 = +a.dataset.salary.slice(1).replace(',', '');
    const salary2 = +b.dataset.salary.slice(1).replace(',', '');

    return salary2 - salary1;
  });

  list.forEach((li) => ul.append(li));
}

function getEmployees(list) {
  return list.map((li) => {
    const { position, salary, age } = li.dataset;

    return {
      name: li.textContent.trim(),
      position,
      salary,
      age,
    };
  });
}

sortList(employeesList);
getEmployees(employeesList);
