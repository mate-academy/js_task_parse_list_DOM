'use strict';

// write code here
const list = document.querySelector('ul');

function getSalary(li) {
  const salaryString = li.dataset.salary;
  const withoutDollar = salaryString.replace('$', '');
  const cleanString = withoutDollar.replace(/,/g, '');

  return Number(cleanString);
}

function sortList(ul) {
  const items = Array.from(ul.querySelectorAll('li'));

  items.sort((a, b) => getSalary(b) - getSalary(a));

  ul.innerHTML = '';

  for (const item of items) {
    ul.append(item);
  }
}

function getEmployees(ul) {
  const items = Array.from(ul.querySelectorAll('li'));

  return items.map((li) => {
    const nameEl = li.querySelector('.name');
    const positionEl = li.querySelector('.position');
    const salaryEl = li.querySelector('.salary');
    const ageEl = li.querySelector('.age');

    return {
      name: nameEl ? nameEl.textContent.trim() : li.textContent.trim(),
      position: positionEl ? positionEl.dataset.position : li.dataset.position,
      salary: salaryEl ? salaryEl.getSalary(li) : getSalary(li),
      age: ageEl ? ageEl.Number(li.dataset.age) : Number(li.dataset.age),
    };
  });
}

sortList(list);

const employees = getEmployees(list);

window.employees = employees;
