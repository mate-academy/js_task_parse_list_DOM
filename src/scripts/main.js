'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const list = document.querySelector('ul');

  function parseSalary(salaryString) {
    return parseInt(salaryString.replace(/[$,]/g, ''), 10);
  }

  function sortList() {
    const items = Array.from(list.children);

    items.sort((a, b) => {
      const salaryA = parseSalary(a.dataset.salary);
      const salaryB = parseSalary(b.dataset.salary);

      return salaryB - salaryA;
    });

    list.innerHTML = '';
    items.forEach((item) => list.appendChild(item));
  }

  function getEmployees() {
    const items = Array.from(list.children);

    return items.map((item) => ({
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: parseSalary(item.dataset.salary),
      age: parseInt(item.dataset.age, 10),
    }));
  }

  // Викликаємо функції
  sortList();

  const employees = getEmployees();
});
