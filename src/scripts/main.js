'use strict';

const listHTML = document.querySelector('ul');

listHTML.innerHTML = `
  ${getEmployees(sortList(listHTML)).map(employee => {
    return `
      <li
        data-position="${employee.position}"
        data-salary="${employee.salary}"
        data-age="${employee.age}"
      >
        ${employee.name}
      </li>
    `;
  }).join('')}
`;

function sortList(list) {
  const salaryToNumber = (salary) => {
    return +salary.replace('$', '').replace(',', '');
  };

  return [...list.children].sort((li1, li2) => {
    return salaryToNumber(li2.dataset.salary)
      - salaryToNumber(li1.dataset.salary);
  });
}

function getEmployees(list) {
  return list.map(li => {
    return {
      'name': li.textContent,
      'position': li.dataset.position,
      'salary': li.dataset.salary,
      'age': li.dataset.age,
    };
  });
}
