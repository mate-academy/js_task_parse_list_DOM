'use strict';

function sortList(list) {
  const employees = getEmployees(list);

  employees.sort((a, b) => b.salary - a.salary);

  employees.forEach((emp) => {
    const li = Array.from(list.children).find(
      (el) => el.textContent.trim() === emp.name,
    );

    if (li) {
      list.appendChild(li);
    }
  });

  return employees;
}

function getEmployees(list) {
  return Array.from(list.children).map((element) => {
    return {
      name: element.textContent.trim(),
      position: element.dataset.position,
      salary: Number(element.dataset.salary.replace(/[^0-9]/g, '')),
      age: Number(element.dataset.age),
    };
  });
}

const employeeList = document.querySelector('ul');

sortList(employeeList);

const employeeArray = getEmployees(employeeList);

window.getEmployees = getEmployees;
window.sortList = sortList;
window.employees = employeeArray;
