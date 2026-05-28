'use strict';

function parseSalaryToNumber(salaryString) {
  const cleanString = salaryString.replace(/[$,]/g, '');

  return Number(cleanString);
}

function getEmployees() {
  const listChildren = document.querySelectorAll('ul li');
  const arrayListChildren = [...listChildren];

  return arrayListChildren.map((li) => {
    return {
      element: li,
      name: li.textContent.trim(),
      position: li.dataset.position,
      salary: li.dataset.salary,
      age: Number(li.dataset.age),
    };
  });
}


function sortList(list) {
  const employees = getEmployees();

  employees.sort((a, b) => {
    const salaryA = parseSalaryToNumber(a.salary);
    const salaryB = parseSalaryToNumber(b.salary);

    return salaryB - salaryA;
  });

  list.innerHTML = '';

  employees.forEach((employee) => {
    list.appendChild(employee.element);
  });
}

const listElement = document.querySelector('ul');

sortList(listElement);
