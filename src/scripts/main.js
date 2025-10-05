'use strict';

const list = document.querySelector('ul');

function getSalary(li) {
  return Number(li.dataset.salary.replace(/[^\d.]/g, ''));
}

function sortList(ul) {
  const items = Array.from(ul.children);

  items.sort((a, b) => getSalary(b) - getSalary(a));
  items.forEach((item) => ul.appendChild(item));
}

function getEmployees(ul) {
  return Array.from(ul.children).map((li) => {
    const nameLi = li.querySelector('.name');
    const positionLi = li.querySelector('.position');
    const ageLi = li.querySelector('.age');

    const employeName = nameLi
      ? nameLi.textContent.trim()
      : (li.dataset.name || '').trim();
    const position = positionLi
      ? positionLi.textContent.trim()
      : (li.dataset.position || '').trim();
    const age = ageLi
      ? Number(ageLi.textContent.trim())
      : Number(li.dataset.age);

    return {
      name: employeName,
      position,
      salary: getSalary(li),
      age,
    };
  });
}

sortList(list);

const employees = getEmployees(list);

// eslint-disable-next-line no-console
console.log(employees);
