'use strict';

const foundList = document.querySelector('ul');

function parseSalary(str) {
  const replaced = str.replace(/[^\d.]/g, '');

  return Number(replaced) || 0;
}

function sortList(list) {
  const items = Array.from(list.children);

  items.sort(
    (a, b) => parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary),
  );

  items.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  const result = [];

  Array.from(list.children).forEach((li) => {
    const personName = li.textContent.trim();
    const position = li.dataset.position.trim();
    const salary = parseSalary(li.dataset.salary);
    const age = parseInt(li.dataset.age, 10);

    result.push({
      name: personName,
      position,
      salary,
      age,
    });
  });

  return result;
}

sortList(foundList);
getEmployees(foundList);
