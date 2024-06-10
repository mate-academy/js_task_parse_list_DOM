'use strict';

const list = document.querySelector('ul');
const listItems = [].slice.call(list.querySelectorAll('li'));

function sortList(items) {
  function extractSalary(salaryString) {
    return +salaryString.replace(/[^0-9]/g, '');
  }

  items.sort((a, b) => {
    const salaryA = extractSalary(a.dataset.salary);
    const salaryB = extractSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  list.innerHTML = '';

  items.forEach((item) => list.appendChild(item));
}

function getEmployees(items) {
  const employees = [];

  items.forEach((item) => {
    const employee = {
      name: item.textContent,
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    };

    employees.push(employee);
  });

  return employees;
}

sortList(listItems);
getEmployees(listItems);
