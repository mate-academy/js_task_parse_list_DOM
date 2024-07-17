'use strict';

const employees = document.querySelectorAll('li');

const employeeList = Array.from(employees).map((employee) => ({
  name: employee.textContent.trim(),
  position: employee.getAttribute('data-position'),
  salary: employee.getAttribute('data-salary'),
  age: employee.getAttribute('data-age'),
}));

function sortList(list) {
  return list.sort((employee1, employee2) => {
    function salaryToNum(employee) {
      return parseInt(employee.salary.slice(1).split(',').join(''));
    }

    return salaryToNum(employee2) - salaryToNum(employee1);
  });
}

function getEmployees(list) {
  const ul = document.querySelector('ul');

  ul.innerHTML = '';

  list.forEach((employee) => {
    const li = document.createElement('li');

    li.textContent = employee.name;
    li.setAttribute('data-position', employee.position);
    li.setAttribute('data-salary', employee.salary);
    li.setAttribute('data-age', employee.age);
    ul.appendChild(li);
  });
}

sortList(employeeList);
getEmployees(employeeList);
