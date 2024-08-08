'use strict';

const employeeList = document.querySelectorAll('li');
const container = document.querySelector('li').parentNode;

function sortList(list) {
  const sortedData = [...list]
    .sort((a, b) => getSalary(b.dataset.salary) - getSalary(a.dataset.salary));

  container.append(...sortedData);
}

function getSalary(string) {
  let number = '';

  for (const char of string) {
    if (char !== '$' && char !== ',') {
      number += char;
    }
  }

  return +number;
}

function getEmployees(list) {
  const employees = [];

  list.forEach(li => {
    const employeeName = li.innerText;
    const position = li.dataset.position;
    const salary = li.dataset.salary;
    const age = li.dataset.age;

    employees.push({
      employeeName, position, salary, age,
    });
  });

  return employees;
}

sortList(employeeList);

const sortedEmployeeList = container.querySelectorAll('li');

getEmployees(sortedEmployeeList);
