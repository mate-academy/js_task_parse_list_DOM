'use strict';

const list = [...document.querySelectorAll('li')];
const ul = document.querySelector('ul');

function sortList(param) {
  param.sort((a, b) => {
    const salary1 = +a.dataset.salary.slice(1).replace(',', '');
    const salary2 = +b.dataset.salary.slice(1).replace(',', '');

    return salary2 - salary1;
  });

  param.forEach((li) => {
    ul.append(li);
  });
}

function getEmployees(param) {
  const arr = param.map((employee) => {
    return {
      name: employee.textContent.trim(''),
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
    };
  });

  return arr;
}

sortList(list);
getEmployees(list);
