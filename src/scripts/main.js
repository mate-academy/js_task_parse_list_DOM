'use strict';

function sortEmployeeBySalary(listEmployees) {
  const sortListEmployees = [...listEmployees.children]
    .sort((person1, person2) => {
      const salary1 = person1.dataset.salary
        .split(',').join('').split('$').join('');

      const salary2 = person2.dataset.salary
        .split(',').join('').split('$').join('');

      return salary2 - salary1;
    });

  for (let i = 0; i < listEmployees.children.length; i++) {
    listEmployees.removeChild(listEmployees.firstChild);
    listEmployees.append(sortListEmployees[i]);
  }
}

function employeeToObject(listEmployees) {
  const arrObjects = [];

  for (const employee of listEmployees.children) {
    arrObjects.push({
      name: employee.textContent.trim(),
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
    });
  }

  return arrObjects;
}

const list = document.querySelector('ul');

sortEmployeeBySalary(list);
employeeToObject(list);
