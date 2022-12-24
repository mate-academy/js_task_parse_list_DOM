'use strict';

const salaryNum = str => +str.slice(1).split(',').join('');

function sortList(parseList) {
  return [...parseList].sort((a, b) =>
    salaryNum(b.dataset.salary) - salaryNum(a.dataset.salary)
  );
};

function getEmployees(parseList) {
  return [...parseList].map(employee => {
    return {
      name: (employee.innerText).trim(),
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
    };
  });
};

const listOfEmployees = document.querySelectorAll('li');
const list = document.querySelector('ul');
const sortedEmployees = sortList(listOfEmployees);

list.innerHTML = `
  ${(sortedEmployees.map(employee => `
    <li
      data-position=${employee.dataset.position}
      data-salary=${employee.dataset.salary}
      data-age=${employee.dataset.age}
    >
      ${employee.innerText}
    </li>
  `).join(''))}
`;

getEmployees(listOfEmployees);
