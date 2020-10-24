'use strict';

const ul = document.querySelector('ul');

const sortList = (list) => {
  const items = [...list.children];

  items.sort((a, b) => {
    const aSalary = Number(a.dataset.salary.replace(',', '').replace('$', ''));
    const bSalary = Number(b.dataset.salary.replace(',', '').replace('$', ''));

    return aSalary - bSalary;
  });

  ul.innerHTML = `${items
    .map((item) => {
      const { position, salary, age } = item.dataset;

      return `<li
              data-position=${position}
              data-salary=${salary}
              data-age=${age}>
                ${item.innerText}
              </li>`;
    })
    .join('')}`;
};

const getEmployees = (list) => {
  const employees = [];
  const items = [...list.children];

  items.forEach((item) => {
    const { position, salary, age } = item.dataset;

    employees.push({
      name: item.innerText,
      position,
      salary,
      age,
    });
  });

  return employees;
};

sortList(ul);
getEmployees(ul);
