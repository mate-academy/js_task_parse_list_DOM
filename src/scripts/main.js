'use strict';

const list = document.querySelector('ul');

function sortList(listElement) {
  const items = [...listElement.querySelectorAll('li')];

  items.sort((a, b) => {
    const salaryA = Number(a.dataset.salary.replace(/[^\d]/g, ''));
    const salaryB = Number(b.dataset.salary.replace(/[^\d]/g, ''));

    return salaryB - salaryA;
  });

  listElement.innerHTML = '';
  items.forEach((li) => listElement.append(li));
}

function getEmployees(listElement) {
  const items = [...listElement.querySelectorAll('li')];

  return items.map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: Number(item.dataset.salary.replace(/[^\d]/g, '')),
    age: Number(item.dataset.age),
  }));
}

sortList(list);
getEmployees(list);

// const employees = getEmployees(list);

// console.dir(employees);
