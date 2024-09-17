'use strict';

function sortList(employeeList) {
  return [...employeeList].sort((a, b) => b.salary - a.salary);
}

function getEmployees(list) {
  const employee = [];

  for (const li of list) {
    employee.push({
      name: li.textContent.trim(),
      position: li.dataset.position,
      salary: +li.dataset.salary.replace(/[$,]/g, ''),
      age: +li.dataset.age,
    });
  }

  return employee;
}

const employees = getEmployees(document.querySelectorAll('li'));
const sortedList = sortList(employees);

const makeList = document.querySelector('ul');

makeList.innerHTML = '';

for (const employee of sortedList) {
  makeList.insertAdjacentHTML('beforeend', `<li
  data-position=${employee.position}
  data-salary="$" + ${employee.salary.toLocaleString()}
  data-age=${employee.age}
>
  ${employee.name}
</li>`);
}
