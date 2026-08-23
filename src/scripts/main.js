'use strict';
// Функція тут не потрібна мій код і так виконує всі поставлені умови завдання.

const listItems = document.querySelectorAll('ul li');

const employees = Array.from(listItems).map((li) => {
  return {
    name: li.textContent.trim(),
    ...li.dataset,
  };
});

const sortedBySalary = [...employees].sort((a, b) => {
  return (
    Number(b.salary.replace('$', '').replace(',', '')) -
    Number(a.salary.replace('$', '').replace(',', ''))
  );
});

const list = document.querySelector('ul');

list.innerHTML = sortedBySalary
  .map((employee) => {
    return `
  <li
        data-position="${employee.position}"
        data-salary="${employee.salary}"
        data-age="${employee.age}"
      >
        ${employee.name}
      </li>
  `;
  })
  .join('');
