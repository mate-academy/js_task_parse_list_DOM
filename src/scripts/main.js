'use strict';

const list = document.querySelector('ul');

function getSalaryNumber(salary) {
  return Number(salary.replaceAll('$', '').replaceAll(',', ''));
}

function sortList(listToSort) {
  const items = [...listToSort.children];

  items.sort((firstEmployee, secondEmployee) => {
    return (
      getSalaryNumber(secondEmployee.dataset.salary) -
      getSalaryNumber(firstEmployee.dataset.salary)
    );
  });

  items.forEach((item) => {
    listToSort.append(item);
  });
}

function getEmployees(listToParse) {
  return [...listToParse.children].map((employee) => ({
    name: employee.textContent.trim(),
    position: employee.dataset.position,
    salary: getSalaryNumber(employee.dataset.salary),
    age: Number(employee.dataset.age),
  }));
}

sortList(list);
getEmployees(list);
