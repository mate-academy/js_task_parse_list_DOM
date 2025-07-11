'use strict';

// write code here
const list = document.querySelector('ul');

function sortList(ul) {
  const mas = Array.from(ul.querySelectorAll('li'));

  mas.sort((a, b) => {
    return (
      Number(b.dataset.salary.replace(/\D/g, '')) -
      Number(a.dataset.salary.replace(/\D/g, ''))
    );
  });
  ul.innerHTML = '';

  mas.forEach((m) => {
    ul.appendChild(m);
  });
}

function getEmployees(emp) {
  const items = emp.querySelectorAll('li');

  return Array.from(items).map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: Number(item.dataset.age),
  }));
}

sortList(list);

getEmployees(list);
