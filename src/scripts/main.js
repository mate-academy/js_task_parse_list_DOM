'use strict';

function parseSalary(salaryStr) {
  return parseInt(salaryStr.replace('$', '').replaceAll(',', ''));
}

function sortList(list) {
  const listItems = Array.from(list.querySelectorAll('li'));

  listItems.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  list.innerHTML = '';
  listItems.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  const listItems = Array.from(list.querySelectorAll('li'));

  return listItems.map((item) => {
    return {
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: parseSalary(item.dataset.salary),
      age: parseInt(item.dataset.age),
    };
  });
}

const employeeList = document.querySelector('ul');

sortList(employeeList);

getEmployees(employeeList);
