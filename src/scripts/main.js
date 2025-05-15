'use strict';

function parseSalary(salaryString) {
  return parseInt(salaryString.replace(/[^0-9]/g, ''), 10);
}

function sortList(list) {
  const items = Array.from(list.querySelectorAll('li'));

  items.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });
  list.innerHTML = '';

  items.forEach((item) => {
    list.appendChild(item);
  });

  return list;
}

function getEmployees(list) {
  const employeesArray = Array.from(list.children);

  return employeesArray.map((emp) => {
    return {
      name: emp.textContent,
      position: emp.getAttribute('data-position'),
      salary: emp.dataset.salary,
      age: emp.dataset.age,
    };
  });
}

const employeeList = document.querySelector('ul');

sortList(employeeList);
getEmployees(employeeList);
