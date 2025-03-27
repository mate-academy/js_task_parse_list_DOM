'use strict';

const listRef = document.querySelector('ul');

const employees = getEmployees([...listRef.children]);
const sortedEmployees = sortList(employees);

listRef.innerHTML = `
  ${sortedEmployees.map(employee => `
    <li
      data-position="${employee.position}"
      data-salary="${employee.salary.toLocaleString()}"
      data-age="${employee.age}"
    >
      ${employee.name}
    </li>
  `).join('')}
`;

function getEmployees(list) {
  return list.map(listElement => {
    const {
      dataset: {
        position,
        salary,
        age,
      },
      textContent,
    } = listElement;

    return {
      name: textContent.trim(),
      position,
      salary,
      age,
    };
  }
  );
}

function sortList(list) {
  return [...list].sort((a, b) => (
    converteSalary(b.salary) - converteSalary(a.salary)
  ));
}

function converteSalary(salary) {
  return Number(salary
    .slice(1)
    .split(',')
    .join(''));
}
