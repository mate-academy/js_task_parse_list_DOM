'use strict';

function convertToNumber(string) {
  return parseInt(string.replace(/\$|,/g, ''));
}

function sortList() {
  const ul = document.querySelector('ul');
  const list = Array.from(ul.children);

  list.sort((a, b) => {
    const aSalary = convertToNumber(a.dataset.salary);
    const bSalary = convertToNumber(b.dataset.salary);

    return bSalary - aSalary;
  });

  list.forEach((li) => ul.append(li));
}

function getEmployees() {
  const employees = [];

  const list = Array.from(document.querySelectorAll('ul li'));

  list.forEach((li) => {
    const employee = {
      name: li.textContent,
      position: li.dataset.position,
      salary: convertToNumber(li.dataset.salary),
      age: li.dataset.age,
    };

    employees.push(employee);
  });

  return employees;
}

sortList();
getEmployees();
