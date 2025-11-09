'use strict';

function sortList(ulElement) {
  const listItems = Array.from(ulElement.querySelectorAll('li'));

  listItems.sort((a, b) => {
    const salaryA = Number(a.dataset.salary.replace(/[$,]/g, ''));
    const salaryB = Number(b.dataset.salary.replace(/[$,]/g, ''));

    return salaryB - salaryA;
  });

  ulElement.innerHTML = '';
  listItems.forEach((li) => ulElement.appendChild(li));
}

function getEmployees(ulElement) {
  const items = ulElement.querySelectorAll('li');

  return Array.from(items).map((li) => ({
    name: li.textContent.trim(),
    position: li.dataset.position,
    salary: Number(li.dataset.salary.replace(/[$,]/g, '')),
    age: Number(li.dataset.age),
  }));
}

const list = document.querySelector('ul');

sortList(list);
// eslint-disable-next-line no-console
console.log(getEmployees(list));
