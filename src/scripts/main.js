'use strict';

function parseSalary(salaryString) {
  return Number(salaryString.replace(/[$,]/g, ''));
}

function sortList(ulElement) {
  const listItem = Array.from(ulElement.querySelectorAll('li'));

  listItem.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  ulElement.innerHTML = '';
  listItem.forEach((li) => ulElement.appendChild(li));
}

function getEmployees(ulElement) {
  const items = ulElement.querySelectorAll('li');

  return Array.from(items).map((li) => ({
    name: li.textContent.trim(),
    position: li.dataset.position,
    salary: parseSalary(li.dataset.salary),
    age: Number(li.dataset.age),
  }));
}

const list = document.querySelector('ul');

sortList(list);
// eslint-disable-next-line no-console
console.log(getEmployees(list));
