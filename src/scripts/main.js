'use strict';

function sortEmployeeBySalary(listEmployees) {
  const sortListEmployees = [...listEmployees.children]
    .sort((person1, person2) => {
      const salary1 = person1.dataset.salary.replace(/[^0-9]/gi, '');
      const salary2 = person2.dataset.salary.replace(/[^0-9]/gi, '');

      return salary2 - salary1;
    });

  listEmployees.append(...sortListEmployees);
}

function employeeToObject(listEmployees) {
  const arrObjects = [];

  for (const employee of listEmployees.children) {
    arrObjects.push({
      name: employee.textContent.trim(),
      ...employee.dataset,
    });
  }

  return arrObjects;
}

const list = document.querySelector('ul');

sortEmployeeBySalary(list);
employeeToObject(list);
