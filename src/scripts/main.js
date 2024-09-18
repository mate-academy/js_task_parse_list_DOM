'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const listElement = document.querySelector('ul');

  function parseSalary(salaryStr) {
    const salary = parseFloat(salaryStr.replace(/[^0-9.-]+/g, ''));

    return salary;
  }

  function sortList(list) {
    const items = Array.from(list.children);

    items.sort(
      (a, b) => parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary),
    );

    list.innerHTML = '';
    items.forEach((item) => list.appendChild(item));
  }

  function getEmployees(list) {
    return Array.from(list.children).map((item) => ({
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: parseSalary(item.dataset.salary),
      age: parseInt(item.dataset.age, 10),
    }));
  }

  function displayEmployees(employees) {
    const resultDiv = document.createElement('div');

    resultDiv.id = 'employee-list';

    document.body.appendChild(resultDiv);
  }

  sortList(listElement);

  const workers = getEmployees(listElement);

  displayEmployees(workers);
});
