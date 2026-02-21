'use strict';

const list = document.querySelector('ul');

const parseSalary = (el) => {
  const cleaned = el.dataset.salary.replace(/[$,]/g, '');

  const value = Number(cleaned);

  return Number.isNaN(value) ? 0 : value;
};

function sortList(listElement) {
  const items = [...listElement.children].map((item) => ({
    element: item,
    salary: parseSalary(item),
  }));

  items.sort((a, b) => b.salary - a.salary);

  items.forEach((item) => listElement.appendChild(item.element));
}

function getEmployees(listElement) {
  return [...listElement.children].map((item) => {
    const nameText = item.firstChild?.textContent.trim() || '';
    const position = item.dataset.position || '';
    const salary = parseSalary(item);
    const ageValue = Number(item.dataset.age);
    const age = Number.isNaN(ageValue) ? null : ageValue;

    return {
      name: nameText,
      position,
      salary,
      age,
    };
  });
}

if (list) {
  sortList(list);
}

getEmployees(list);
