'use strict';

function getSalary(item) {
  const rawSalary = item.replace(/[$,]/g, '');

  return +rawSalary;
}

function sortList(list) {
  const newList = Array.from(list.children);

  newList.sort((a, b) => {
    return getSalary(b.dataset.salary) - getSalary(a.dataset.salary);
  });

  list.append(...newList);
}

function getEmployees(list) {
  const newList = Array.from(list.children);
  const result = [];

  newList.forEach((item) => {
    const nameEmployee = item.textContent.trim();
    const position = item.dataset.position;
    const salary = getSalary(item.dataset.salary);
    const age = +item.dataset.age;

    const employee = {
      name: nameEmployee,
      position: position,
      salary: salary,
      age: age,
    };

    result.push(employee);
  });

  return result;
}

const listEmployees = document.querySelector('ul');

sortList(listEmployees);
getEmployees(listEmployees);
