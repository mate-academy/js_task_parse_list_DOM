'use strict';

function Sortlist() {
  const ul = document.querySelector('ul');
  const list = Array.from(ul.children);

  const parseSalary = (salary) => parseInt(salary.replace(/\D/g, ''));

  list.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  ul.innerHTML = '';

  list.forEach((item) => {
    ul.appendChild(item);
  });
}
Sortlist();
