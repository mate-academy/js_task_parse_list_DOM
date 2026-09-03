'use strict';

const employeesList = document.body.querySelector('ul');

function getSalary(employee) {
  const salaryStr = employee.dataset.salary.replace(',', '');

  const salary = +salaryStr.replace('$', '');

  return salary;
}

function sortList(list) {
  const listItems = list.querySelectorAll('li');

  const sortedList = Array.from(listItems).sort(
    (a, b) => getSalary(b) - getSalary(a),
  );

  list.append(...sortedList);
}

function getEmployees(list) {
  return Array.from(list).map((employee) => {
    return {
      name: employee.dataset.name,
      position: employee.dataset.position,
      salary: getSalary(employee),
      age: +employee.dataset.age,
    };
  });
}

sortList(employeesList);
getEmployees(employeesList.querySelectorAll('li'));
