'use strict';

const ul = document.querySelector('ul');

function parseSalary(money) {
  return Number(money.replace(/[$,]/g, ''));
}

function sortList(listEl) {
  const list = [...listEl.querySelectorAll('li')];

  list.sort(
    (a, b) => parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary),
  );

  list.forEach((li) => {
    listEl.appendChild(li);
  });
}

function getEmployees(listEl) {
  const result = listEl.map((employee) => {
    return {
      name: employee.textContent.trim(),
      position: employee.dataset.position,
      salary: parseSalary(employee.dataset.salary),
      age: Number(employee.dataset.age),
    };
  });

  return result;
}

sortList(ul);
getEmployees(ul);
// write code here
