'use strict';

const employeeList = document.querySelector('ul');

function sortList(list) {
  const listItem = Array.from(list.children);

  listItem.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  list.innerHTML = '';

  listItem.forEach((item) => list.appendChild(item));
}

function parseSalary(salaryString) {
  return Number(salaryString.replace('$', '').replace(',', ''));
}

function getEmployees(list) {
  const listItems = Array.from(list.querySelectorAll('li'));

  return listItems.map((item) => {
    const employeeName = item.textContent.trim();
    const position = item.dataset.position;
    const salary = parseSalary(item.dataset.salary);
    const age = Number(item.dataset.age);

    return {
      name: employeeName,
      position,
      salary,
      age,
    };
  });
}

sortList(employeeList);
getEmployees(employeeList);
