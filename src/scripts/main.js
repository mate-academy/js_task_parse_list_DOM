'use strict';

function parseSalary(salaryString) {
  return parseFloat(salaryString.replace(/[$,]/g, ''));
}

function sortList(list) {
  const listItems = list.querySelectorAll('li');

  const sortedItems = Array.from(listItems).sort((a, b) => {
    const salaryB = parseSalary(b.dataset.salary);
    const salaryA = parseSalary(a.dataset.salary);

    return salaryB - salaryA;
  });

  for (const item of sortedItems) {
    list.append(item);
  }
}

function getEmployees(list) {
  return Array.from(list.querySelectorAll('li')).map((li) => ({
    name: li.textContent.trim(),
    position: li.dataset.position,
    salary: parseSalary(li.dataset.salary),
    age: parseInt(li.dataset.age, 10),
  }));
}

const employeeList = document.querySelector('ul');

sortList(employeeList);
getEmployees(employeeList);
