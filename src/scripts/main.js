'use strict';

const list = document.querySelector('ul');

function parseSalary(salaryStr) {
  return Number(String(salaryStr).replace(/[$,]/g, ''));
}

function sortList(ulList) {
  const itemsArray = Array.from(ulList.querySelectorAll('li'));

  itemsArray.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  itemsArray.forEach((item) => ulList.appendChild(item));
}

function getEmployees(ulList) {
  const itemsArray = Array.from(ulList.querySelectorAll('li'));

  return itemsArray.map((item) => {
    return {
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: parseSalary(item.dataset.salary),
      age: Number(item.dataset.age),
    };
  });
}

sortList(list);

getEmployees(list);
