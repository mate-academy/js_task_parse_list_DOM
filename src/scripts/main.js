'use strict';

const listOfEmployees = document.querySelector('ul');

function parseSalary(salaryStr) {
  return Number(salaryStr.replace(/[^0-9.-]+/g, ''));
}

function sortList(list) {
  const arr = getEmployees(list);
  const items = [...list.querySelectorAll('li')];

  arr.sort((a, b) => b.salary - a.salary);

  const liMap = new Map(items.map((li) => [li.textContent.trim(), li]));

  arr.forEach((emp) => {
    const li = liMap.get(emp.name);

    if (li) {
      list.appendChild(li);
    }
  });
}

function getEmployees(list) {
  const items = [...list.querySelectorAll('li')];

  return items.map((element) => ({
    name: element.textContent.trim(),
    position: element.dataset.position,
    salary: parseSalary(element.dataset.salary),
    age: Number(element.dataset.age),
  }));
}

sortList(listOfEmployees);
