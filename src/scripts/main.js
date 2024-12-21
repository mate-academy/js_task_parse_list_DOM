'use strict';

function getEmployees() {
  const list = document.querySelector('ul');

  return [...list.querySelectorAll('li')].map((employee) => {
    return {
      name: employee.textContent.trim(),
      position: employee.dataset.position,
      salary: +employee.dataset.salary.slice(1).replaceAll(',', ''),
      age: +employee.dataset.age,
    };
  });
}

function sortList(employees) {
  return [...employees].sort(
    (employeeA, employeeB) => employeeB.salary - employeeA.salary,
  );
}

function updateList(sortedEmployees) {
  const list = document.querySelector('ul');
  const employees = [...list.querySelectorAll('li')];

  for (let i = sortedEmployees.length - 1; i >= 0; i--) {
    const employee = employees.find(
      (li) => li.textContent.trim() === sortedEmployees[i].name,
    );

    list.prepend(employee);
  }
}

updateList(sortList(getEmployees()));
