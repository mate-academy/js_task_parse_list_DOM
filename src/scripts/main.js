'use strict';

const documentList = document.querySelector('ul');

function sortList(list) {
  let employees = getEmployees(list);
  employees = employees.sort((a, b) => b.salary - a.salary);

  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  employees.forEach((employee) => {
    const li = document.createElement('li');
    li.textContent = employee.name;
    li.setAttribute('data-position', employee.position);
    li.setAttribute('data-salary', employee.salary);
    li.setAttribute('data-age', employee.age);
    list.appendChild(li);
  });
}

function getEmployees(list) {
  const listItems = list.children;
  const employees = [];

  for (let i = 0; i < listItems.length; i++) {
    employees[i] = {};
    employees[i].name = listItems[i].textContent.trim();
    employees[i].position = listItems[i].getAttribute('data-position');
    employees[i].salary = getSalaryNum(
      listItems[i].getAttribute('data-salary'),
    );
    employees[i].age = listItems[i].getAttribute('data-age');
  }

  return employees;
}

function getSalaryNum(salaryString) {
  return +salaryString
    .split(',')
    .join('')
    .split('')
    .filter((a) => a !== '$')
    .join('');
}

sortList(documentList);
