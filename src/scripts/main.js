'use strict';

// write code here
const employeeList = document.querySelector('ul');

sortList(employeeList);

function sortList(list) {
  const ulItems = list.querySelectorAll('li');
  const employees = getEmployees(ulItems);

  employees.sort(
    (a, b) => convertSalaryToNumber(b.salary) - convertSalaryToNumber(a.salary)
  );

  for (let i = 0; i < employees.length; i++) {
    const li = document.createElement('li');

    li.dataset.position = employees[i].position;
    li.dataset.salary = employees[i].salary;
    li.dataset.age = employees[i].age;
    li.textContent = employees[i].name;

    list.removeChild(ulItems[i]);
    list.append(li);
  }
}

function convertSalaryToNumber(salary) {
  return parseInt(salary.slice(1).replace(/,/g, ''));
}

function getEmployees(list) {
  return [...list].map((employee) => {
    return {
      name: employee.textContent.trim(),
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
    };
  });
}
