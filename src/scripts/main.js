'use strict';

'use strict';

function parseSalary(salaryString) {
  return Number(salaryString.replace(/[^0-9.-]+/g, ''));
}

function sortList(listElement) {
  const items = Array.from(listElement.querySelectorAll('li'));

  items.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  items.forEach((item) => listElement.appendChild(item));
}

function getEmployees(listElement) {
  const items = Array.from(listElement.querySelectorAll('li'));

  return items.map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    age: Number(item.dataset.age),
    salary: parseSalary(item.dataset.salary),
  }));
}

const list = document.querySelector('ul');

sortList(list);

const employees = getEmployees(list);

// eslint-disable-next-line no-console
console.log(employees);
