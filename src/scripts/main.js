'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const list = document.querySelector('ul');

  const parseSalary = (salaryStr) => {
    const parts = salaryStr.split('');
    const filtered = parts.filter((char) => char !== '$' && char !== ',');

    return parseFloat(filtered.join(''));
  };

  const sortList = (ulElement) => {
    const itemsArray = Array.from(ulElement.querySelectorAll('li'));

    itemsArray.sort(
      (a, b) => parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary),
    );
    itemsArray.forEach((item) => ulElement.appendChild(item));
  };

  sortList(list);
});
