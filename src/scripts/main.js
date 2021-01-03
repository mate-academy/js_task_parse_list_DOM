'use strict';

const employees = document.querySelector('ul');

function sortList(list) {
  const employeesArr = [...list.children];

  employeesArr.forEach((employee) => {
    employee.dataset.salary = employee.dataset.salary.slice(1).replace(',', '');
  });

  employeesArr.sort((a, b) => {
    return b.dataset.salary - a.dataset.salary;
  });

  employeesArr.forEach((employee) => {
    const salaryArr = ('' + employee.dataset.salary).split('');

    for (let i = salaryArr.length - 3; i > 0; i -= 3) {
      salaryArr.splice(i, 0, ',');
    }

    employee.dataset.salary = '$' + salaryArr.join('');
  });

  for (const employee of employeesArr) {
    list.append(employee);
  }
}

function getEmployees(list) {
  const employeesArr = [...list.children].map(employee => {
    return {
      name: employee.innerText,
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
    };
  });

  return employeesArr;
}

sortList(employees);

getEmployees(employees);
