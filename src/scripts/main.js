'use strict';

function getArrayOfEmployees() {
  const listOfEmployeesHTML = [...document.querySelectorAll('[data-salary]')];

  const arrayOfEmployees = listOfEmployeesHTML.map((employee) => {
    const salaryString = employee
      .getAttribute('data-salary')
      .replace('$', '')
      .replace(',', '');
    const salaryNumber = parseFloat(salaryString);

    return {
      name: employee.textContent,
      position: employee.getAttribute('data-position'),
      salary: salaryNumber,
      age: parseInt(employee.getAttribute('data-age'), 10),
    };
  });

  return arrayOfEmployees;
}

function sortEmployeesBySalary(employeesArray) {
  return employeesArray.sort(
    (employee1, employee2) => employee2.salary - employee1.salary,
  );
}

const ListItem = (text) => {
  const li = document.createElement('li');

  li.textContent = text;

  return li;
};

function updateEmployeeList(employeesArray) {
  const list = document.querySelector('ul');

  list.innerHTML = '';

  for (const employeer of employeesArray) {
    const li = ListItem(employeer.name);

    li.setAttribute(
      'data-salary',
      `$${employeer.salary.toLocaleString('en-US')}`,
    );
    li.setAttribute('data-position', employeer.position);
    li.setAttribute('data-age', employeer.age);

    list.append(li);
  }
}

const employees = getArrayOfEmployees();

const sortedEmployees = sortEmployeesBySalary(employees);

updateEmployeeList(sortedEmployees);
