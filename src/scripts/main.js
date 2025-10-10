'use strict';

// write code here
function getSalaryValue(salaryStr) {
  if (!salaryStr) {
    return NaN;
  }

  let clean = salaryStr.replace(/[^0-9,.-]/g, '').trim();

  clean = clean.replace(/\s+/g, '');
  clean = clean.replace(/(?!^-)-/g, '');

  if (clean.indexOf(',') > -1 && clean.indexOf('.') > -1) {
    clean = clean.replace(/,/g, '');
  } else if (clean.indexOf(',') > -1) {
    clean = clean.replace(/,/g, '.');
  }

  return Number(clean);
}

function getNameFromLi(li) {
  const nameEl = li.querySelector('.name');

  if (nameEl) {
    return nameEl.textContent.trim().replace(/\s+/g, ' ');
  }

  for (const node of li.childNodes) {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent.trim();

      if (text.length > 0) {
        return text.replace(/\s+/g, ' ');
      }
    }
  }

  return '';
}

function sortList(list) {
  if (!list) {
    return;
  }

  const items = Array.from(list.children);

  if (!items.every((i) => Number.isFinite(getSalaryValue(i.dataset.salary)))) {
    return;
  }

  items
    .sort(
      (a, b) =>
        getSalaryValue(b.dataset.salary) - getSalaryValue(a.dataset.salary),
    )
    .forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  return Array.from(list.children)
    .map((item) => ({
      name: getNameFromLi(item),
      position: item.dataset.position || '',
      salary: getSalaryValue(item.dataset.salary),
      age: Number(item.dataset.age) || 0,
    }))
    .filter((emp) => Number.isFinite(emp.salary));
}

document.addEventListener('DOMContentLoaded', () => {
  const list = document.querySelector('ul');

  if (!list) {
    return;
  }

  sortList(list);

  const employees = getEmployees(list);

  const firstSalary = getSalaryValue(list.firstElementChild.dataset.salary);
  const maxSalary = Math.max(...employees.map((e) => e.salary));

  // eslint-disable-next-line no-console
  console.assert(firstSalary === maxSalary, 'Сортування працює некоректно!');
});
