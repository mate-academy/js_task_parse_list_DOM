'use strict';

const parseSalary = (s) => Number(String(s || '').replace(/[^\d.-]/g, ''));

const sortList = (list) => {
  if (!list) {
    return;
  }

  const items = Array.from(list.querySelectorAll(':scope > li'));

  items.sort(
    (a, b) => parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary),
  );
  items.forEach((li) => list.appendChild(li));
};

const getEmployees = (list) => {
  const items = Array.from(list.querySelectorAll(':scope > li'));

  return items.map((li) => ({
    name: li.textContent.trim(),
    position: li.dataset.position || '',
    salary: parseSalary(li.dataset.salary),
    age: Number(li.dataset.age),
  }));
};

const employeesList = document.querySelector('ul');

sortList(employeesList);
getEmployees(employeesList);
