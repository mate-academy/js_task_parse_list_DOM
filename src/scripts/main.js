'use strict';

function getEmployees() {
  const employeesHTML = document.querySelectorAll('li');

  const formattedEmployees = [];

  employeesHTML.forEach((item) => {
    const salary = item.getAttribute('data-salary');
    const age = item.getAttribute('data-age');
    const position = item.getAttribute('data-position');
    const personName = item.innerText;

    formattedEmployees.push({
      personName,
      position,
      salary,
      age,
    });
  });

  return formattedEmployees;
}

function sortList(list) {
  return list.sort(
    (a, b) =>
      -(
        +a.salary.slice(1).split(',').join('') -
        +b.salary.slice(1).split(',').join('')
      ),
  );
}

const employees = getEmployees();

sortList(employees);

const ul = document.querySelector('ul');
const items = [];

employees.forEach((item) => {
  items.push(`
      <li
        data-position="${item.position}"
        data-salary="${item.salary}"
        data-age="${item.age}"
      >
        ${item.personName}
      </li>
  `);
});

ul.innerHTML = items.join('');
