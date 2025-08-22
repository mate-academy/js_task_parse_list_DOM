'use strict';

const employeesList = document.querySelector('ul');

function sortList(list) {
  const listItems = [...list.children];

  listItems.sort(
    (a, b) =>
      getSalaryAsNum(b.dataset.salary) - getSalaryAsNum(a.dataset.salary),
  );

  listItems.forEach((element) => {
    list.append(element);
  });
}

function getEmployees(list) {
  return [...list.children].map((employee) => ({
    name: employee.childNodes[0].data.trim(),
    position: employee.dataset.position,
    salary: getSalaryAsNum(employee.dataset.salary),
    age: +employee.dataset.age,
  }));
}

function getSalaryAsNum(salary) {
  return +salary.slice(1).replace(',', '');
}

sortList(employeesList);
getEmployees(employeesList);
