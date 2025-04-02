'use strict';

const employeeList = document.querySelector('ul');

function getEmployees(list) {
  const listItems = [...list.querySelectorAll('li')];

  return listItems.map((li) => ({
    name: li.textContent.trim(),
    position: li.dataset.position,
    salary: Number(li.dataset.salary.replace(/[$,]/g, '')),
    age: Number(li.dataset.age),
  }));
}

function sortList(list) {
  const employees = getEmployees(list);

  employees.sort((a, b) => b.salary - a.salary);

  list.innerHTML = '';

  employees.forEach((emp) => {
    const li = document.createElement('li');

    li.textContent = emp.name;
    li.dataset.position = emp.position;
    li.dataset.salary = emp.salary;
    li.dataset.age = emp.age;
    list.appendChild(li);
  });
}

sortList(employeeList);

const employeesArray = getEmployees(employeeList);
console.log(employeesArray);
