'use strict';

const employees = document.querySelectorAll('li');
const employeesList = document.querySelector('ul');

employeesList.innerHTML = '';

function sortList(list) {
  const listOfEmployees = getEmployees(list);

  listOfEmployees.sort((a, b) => b.salary - a.salary);

  listOfEmployees.forEach(item => {
    employeesList.innerHTML += `
      <li
        data-position="${item.position}"
        data-salary="$${item.salary.toFixed(3).replace(/\./g, ',')}"
        data-age="${item.age}"
      >
        ${item.name}
    </li>
    `;
  });
}

sortList(employees);

function getEmployees(list) {
  const listOfEmployees = [...list].map(employee => (
    {
      name: employee.textContent.trim(),
      position: employee.dataset.position,
      salary: +employee.dataset.salary.slice(1).replace(/,/g, '.'),
      age: employee.dataset.age,
    }
  ));

  return listOfEmployees;
};
