'use strict';

function parseSalary(salaryStr) {
  return parseFloat(salaryStr.replace(/[$,]/g, ''));
}

function getEmployees(list) {
  return [...list.children].map((item) => ({
    name: item.textContent.trim(),
    position: item.getAttribute('data-position'),
    salary: parseSalary(item.getAttribute('data-salary')),
    age: parseInt(item.getAttribute('data-age'), 10),
  }));
}

function sortList(list) {
  const employees = getEmployees(list);

  // eslint-disable-next-line no-console
  console.log('Before sort:', employees);

  employees.sort((a, b) => Number(b.salary) - Number(a.salary));

  // eslint-disable-next-line no-console
  console.log('After sort:', employees);

  list.innerHTML = '';

  employees.forEach((employee) => {
    const li = document.createElement('li');

    li.textContent = employee.name;
    li.setAttribute('data-position', employee.position);
    li.setAttribute('data-salary', employee.salary);
    li.setAttribute('data-age', employee.age);
    list.appendChild(li);
  });
}

const employeeList = document.querySelector('ul');

sortList(employeeList);

// eslint-disable-next-line no-console
console.log(getEmployees(employeeList));
