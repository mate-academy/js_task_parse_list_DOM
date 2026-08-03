'use strict';

function formSalary(salary) {
  return Number(salary.replaceAll('$', '').replaceAll(',', ''));
}

function sortList(items) {
  const worker = [...items.children];

  worker.sort((a, b) => {
    const salaryA = formSalary(a.getAttribute('data-salary'));
    const salaryB = formSalary(b.getAttribute('data-salary'));

    return salaryB - salaryA;
  });

  worker.forEach((item) => items.append(item));
}

function getEmployees(items) {
  const workers = [...items.children];
  const result = [];

  for (const worker of workers) {
    result.push({
      name: worker.textContent,
      position: worker.dataset.position,
      salary: formSalary(worker.getAttribute('data-salary')),
      age: Number(worker.dataset.age),
    });
  }

  return result;
}

const list = document.querySelector('ul');

sortList(list);
getEmployees(list);
