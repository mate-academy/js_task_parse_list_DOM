'use strict';

const employees = document.querySelector('ul');

const getNum = (string) => Number(string.replace(/[$,]/g, ''));

function sortList(list) {
  const sortedList = [...list.children].sort(
    (currentEmployee, nextEmployee) =>
      getNum(nextEmployee.dataset.salary) -
      getNum(currentEmployee.dataset.salary),
  );

  list.append(...sortedList);
}

function getEmployees(list) {
  return [...list.children].map((employee) => ({
    name: employee.textContent,
    position: employee.dataset.position,
    salary: employee.dataset.salary,
    age: employee.dataset.age,
  }));
}

if (employees) {
  sortList(employees);
  getEmployees(employees);
}
