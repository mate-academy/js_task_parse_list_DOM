'use strict';

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
}

const employeeList = document.querySelector('ul');

sortList(employeeList);
