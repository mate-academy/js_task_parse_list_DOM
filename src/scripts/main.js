'use strict';

const employeesListHtml
  = document.querySelector('#employees-list');

const filteredEmployeesListHtml = employeesListHtml.querySelectorAll('li');

function Employee(employeeName, position, salary, age) {
  this.name = employeeName;
  this.position = position;
  this.salary = salary;
  this.age = age;
}

const employees = [];

for (const employee of filteredEmployeesListHtml) {
  employees.push(
    new Employee(
      employee.innerText,
      employee.dataset.position,
      employee.dataset.salary,
      employee.dataset.age
    )
  );
}

function sortBySalary(employee1, employee2) {
  const salary1 = parseInt(employee1.salary.replaceAll(/\$|,/g, ''));
  const salary2 = parseInt(employee2.salary.replaceAll(/\$|,/g, ''));

  if (salary1 > salary2) {
    return -1;
  }

  if (salary1 < salary2) {
    return 1;
  }
}

employees.sort(sortBySalary);

while (employeesListHtml.firstChild) {
  employeesListHtml.firstChild.remove();
}

for (let i = 0; i < employees.length; i++) {
  const employeeListItem = document.createElement('li');

  employeeListItem.dataset.position = employees[i].position;
  employeeListItem.dataset.salary = employees[i].salary;
  employeeListItem.dataset.age = employees[i].age;
  employeeListItem.innerText = employees[i].name;
  employeesListHtml.append(employeeListItem);
}
