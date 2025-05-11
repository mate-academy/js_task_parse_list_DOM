'use strict';

// write code here

function parseSalary(salaryStr) {
  const withoutDollar = salaryStr.slice(1);
  const withoutComma = withoutDollar.split(',').join('');
  return parseFloat(withoutComma);
}


function sortList(list) {
  const ul = list[0].parentElement;

  const sortedItems = Array.from(list).sort((a, b) => {
    return parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary);
  });

  ul.innerHTML = '';
  sortedItems.forEach((item) => ul.appendChild(item));
}

function getEmployees(list) {
  return Array.from(list).map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: parseSalary(item.dataset.salary),
    age: parseInt(item.dataset.age),
  }));
}

const allList = document.querySelectorAll('ul > li');

sortList(allList);
getEmployees(allList);
