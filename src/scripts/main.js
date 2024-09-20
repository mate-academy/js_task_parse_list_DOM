'use strict';

// write code here
'use strict';

function parseSalary(salaryStr) {
  return parseFloat(salaryStr.replace(/[$,]/g, ''));
}

function sortList(list) {
  const listItems = Array.from(list.children);

  listItems.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  listItems.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  const listItems = Array.from(list.children);

  return listItems.map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: parseSalary(item.dataset.salary),
    age: parseInt(item.dataset.age),
  }));
}

const employeeList = document.getElementById('employee-list');

sortList(employeeList);
getEmployees(employeeList);

// const employees = getEmployees(employeeList);
// console.log(employees);
