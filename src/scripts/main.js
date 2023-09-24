'use strict';

const list = document.querySelector('ul');

sortList(list);

function sortList(employeeslist) {
  const employees = getEmployees(employeeslist);

  employees.sort((person1, person2) => {
    const salary1 = convertSalaryToNum(person1.salary);
    const salary2 = convertSalaryToNum(person2.salary);

    return salary2 - salary1;
  });

  employeeslist.innerHTML = employees.map(person => `
      <li
      data-position="${person.position}"
      data-salary="${person.salary}"
      data-age="${person.age}"
    >
      ${person.name}
    </li>
    `).join('');
}

function getEmployees(employeeslist) {
  const parsedEmployees = [...employeeslist.children]
    .map(item => ({
      name: item.innerText,
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    }));

  return parsedEmployees;
}

function convertSalaryToNum(salary) {
  return +salary.replace(/[$,]/g, '');
}
