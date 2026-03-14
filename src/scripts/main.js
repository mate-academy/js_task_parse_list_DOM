'use strict';

const list = document.querySelector('ul');

if (!list) {
  throw new Error('List not found');
}

function parseSalary(el) {
  return Number(el.dataset.salary) || 0;
}

function sortList(ul) {
  const items = Array.from(ul.querySelectorAll('li'));

  items.sort((a, b) => parseSalary(b) - parseSalary(a));
  items.forEach((i) => ul.appendChild(i));
}

function getEmployees(ul) {
  return Array.from(ul.querySelectorAll('li')).map((li) => {
    const nameEl = li.querySelector('.name');
    const posEl = li.querySelector('.position');

    return {
      name: nameEl ? nameEl.textContent.trim() : '',
      position: posEl ? posEl.textContent.trim() : '',
      salary: parseSalary(li),
      age: li.dataset.age ? Number(li.dataset.age) : undefined,
    };
  });
}
sortList(list);
getEmployees(list);
