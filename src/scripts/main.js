'use strict';

const employeeList = document.querySelector('ul');
const employees = employeeList.children;

employeeList.append(...sortList(employees));
getEmployees(employees);

function sortList(list) {
  return [...list].sort(
    (currentElement, nextElement) => convertToNumber(nextElement.dataset.salary)
      - convertToNumber(currentElement.dataset.salary)
  );
}

function convertToNumber(string) {
  return +string.replace(/[^0-9.]/g, '');
}

function getEmployees(list) {
  return [...list].map(
    employee => {
      const newEmployeeObject = {};

      newEmployeeObject.name = employee.innerText;
      newEmployeeObject.position = employee.dataset.position;
      newEmployeeObject.salary = convertToNumber(employee.dataset.salary);
      newEmployeeObject.age = convertToNumber(employee.dataset.age);

      return newEmployeeObject;
    }
  );
}
