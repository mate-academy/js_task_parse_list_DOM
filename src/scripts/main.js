'use strict';

// write code here
export function getEmployees(list) {
  const people = [];

  for (const item of list.children) {
    const personName = item.querySelector('.name').textContent.trim();
    const position = item.querySelector('.position').textContent.trim();
    const salary = item.dataset.salary;
    const age = Number(item.dataset.age);

    people.push({
      name: personName,
      position,
      salary,
      age,
    });
  }

  return people;
}

export function sortList(list) {
  const items = Array.from(list.children);

  const sorted = items.sort((a, b) => {
    const salaryA = Number(a.dataset.salary.replace(/\D/g, ''));
    const salaryB = Number(b.dataset.salary.replace(/\D/g, ''));

    return salaryA - salaryB;
  });

  for (const item of sorted) {
    list.appendChild(item);
  }
}

// Виклики:
getEmployees();
sortList();
