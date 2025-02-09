'use strict';

const ul = document.querySelector('ul');

function sortBySalary() {
  const sortedLi = [...ul.children].sort((a, b) => {
    const salaryA = parseInt(a.getAttribute('data-salary').replace(/\D/g, ''));
    const salaryB = parseInt(b.getAttribute('data-salary').replace(/\D/g, ''));

    return salaryB - salaryA;
  });

  ul.append(...sortedLi);
}

function employees() {
  const objectsLi = [...ul.children].map((li) => ({
    name: li.innerText.trim(),
    position: li.getAttribute('data-position'),
    salary: parseInt(li.getAttribute('data-salary').replace(/\D/g, '')),
    age: parseInt(li.getAttribute('data-age')),
  }));

  return objectsLi;
}

document.addEventListener('DOMContentLoaded', () => {
  sortBySalary();
  employees();
});
