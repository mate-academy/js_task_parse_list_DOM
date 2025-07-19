'use strict';

const list = document.querySelector('ul');

function sortList(ul) {
  const array = Array.from(ul.querySelectorAll('li'));

  array.sort((a, b) => {
    return (
      Number(b.dataset.salary.replace(/\D/g, '')) -
      Number(a.dataset.salary.replace(/\D/g, ''))
    );
  });
  ul.innerHTML = '';

  array.forEach((arr) => {
    ul.appendChild(arr);
  });
}

function getEmployees(employee) {
  const items = employee.querySelectorAll('li');

  return Array.from(items).map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: Number(item.dataset.age),
  }));
}

sortList(list);

getEmployees(list);
