'use strict';

const employeesList = document.querySelector('ul');

function sortList(list) {
  const employeesArr = getEmployees(list);
  const sortedEmployeesArr = employeesArr.sort((employee1, employee2) => {
    return salaryToNumber(employee2.salary) - salaryToNumber(employee1.salary);
  });

  const fragment = new DocumentFragment();

  for (const employee of sortedEmployeesArr) {
    const li = document.createElement('li');

    li.textContent = employee.name;
    li.dataset.position = employee.position;
    li.dataset.salary = employee.salary;
    li.dataset.age = employee.age;
    fragment.append(li);
  }

  list.innerHTML = '';
  list.append(fragment);
}

function getEmployees(list) {
  const employees = list.getElementsByTagName('li');
  const result = [];

  for (const employee of employees) {
    const employeeObj = {
      name: employee.textContent,
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
    };

    result.push(employeeObj);
  }

  return result;
}

function salaryToNumber(salary) {
  return +salary.replaceAll(',', '').replaceAll('$', '');
}

getEmployees(employeesList);
sortList(employeesList);
