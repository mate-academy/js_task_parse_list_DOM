'use strict';

function getSortEmployes() {
  const listEmployes = document.querySelectorAll('li');

  return [...listEmployes].map((li) => {
    const fullName = li.textContent.trim();
    const position = li.dataset.position;
    const age = li.dataset.age;
    const salary = parseInt(li.dataset.salary.replace(/\$|,/g, ''));

    return {
      name: fullName,
      position,
      salary,
      age,
    };
  });
}

function getSalarySort(workers) {
  return workers.slice().sort((a, b) => b.salary - a.salary);
}

const ul = document.querySelector('ul');
const employees = getSortEmployes();
const sortedEmployees = getSalarySort(employees);

ul.innerHTML = '';

sortedEmployees.forEach((emp) => {
  const li = document.createElement('li');

  li.dataset.salary = `$${emp.salary}`;
  li.dataset.position = emp.position;
  li.dataset.age = emp.age;
  li.dataset.fullName = emp.name;

  li.textContent = `${emp.name} - $${emp.salary}`;

  ul.appendChild(li);
});
