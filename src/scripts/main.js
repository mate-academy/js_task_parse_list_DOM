'use strict';

const employeesList = document.querySelector('ul');

const sortedList = sortList([...employeesList.children]);
const employees = getEmployees(sortedList);

employeesList.innerHTML = employees
  .map(
    ({ position, salary, age, name: employeeName }) => `
      <li
        data-position="${position}"
        data-salary="${salary}"
        data-age="${age}"
      >
        ${employeeName}
      </li>`,
  )
  .join('');

function sortList(list) {
  return list.toSorted(
    (item1, item2) =>
      getNumber(item2.dataset.salary) - getNumber(item1.dataset.salary),
  );
}

function getEmployees(list) {
  return list.map((employee) => ({
    name: employee.textContent,
    position: employee.dataset.position,
    salary: employee.dataset.salary,
    age: employee.dataset.age,
  }));
}

function getNumber(stringNumber) {
  return stringNumber.replaceAll('$', '').replaceAll(',', '');
}
